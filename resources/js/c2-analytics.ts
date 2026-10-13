const source = '/c2-lp';
const params = new URLSearchParams(window.location.search);
const storage = {
    get(key: string) {
        try {
            return sessionStorage.getItem(key);
        } catch {
            return null;
        }
    },
    set(key: string, value: string) {
        try {
            sessionStorage.setItem(key, value);
        } catch {
            /* Storage may be disabled. */
        }
    },
};

type TrackingWindow = Window & {
    __abVariant?: string;
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
};

function eventId(prefix: string) {
    return `${prefix}-${crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
}

function cookie(name: string) {
    const value = document.cookie
        .split('; ')
        .find((part) => part.startsWith(`${name}=`));

    return value ? decodeURIComponent(value.slice(name.length + 1)) : null;
}

export function initializeC2Analytics() {
    const csrf = document.querySelector<HTMLMetaElement>(
        'meta[name="csrf-token"]',
    )?.content;

    if (!csrf) {
        return;
    }

    const variantKey = 'ab_variant_c2lp';
    let variant = storage.get(variantKey);

    if (variant !== 'A' && variant !== 'B') {
        variant = Math.random() < 0.5 ? 'A' : 'B';
        storage.set(variantKey, variant);
    }

    const trackingWindow = window as TrackingWindow;
    trackingWindow.__abVariant = variant;
    trackingWindow.dataLayer ??= [];
    trackingWindow.dataLayer.push({
        landing_source: source,
        ab_variant: variant,
    });

    let referral = params.get('ref') || 'direct';

    if (document.referrer) {
        try {
            if (new URL(document.referrer).hostname !== location.hostname) {
                referral = document.referrer;
            }
        } catch {
            /* Keep the query referral. */
        }
    }

    referral = referral.slice(0, 255);

    const track = (eventType: string, data: Record<string, unknown> = {}) =>
        fetch('/analytics/track', {
            method: 'POST',
            credentials: 'same-origin',
            keepalive: true,
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrf,
            },
            body: JSON.stringify({
                event_type: eventType,
                event_data: {
                    landing_source: source,
                    page: source,
                    ab_variant: variant,
                    timestamp: new Date().toISOString(),
                    ...data,
                },
                referral_source: referral,
                utm_source: params.get('utm_source'),
                utm_medium: params.get('utm_medium'),
                utm_campaign: params.get('utm_campaign'),
                utm_content: params.get('utm_content'),
                utm_term: params.get('utm_term'),
            }),
        });

    const visitKey = 'analytics_visit_tracked:/c2-lp';

    if (!storage.get(visitKey)) {
        void track('visit', {
            event_id: eventId('page-view'),
            is_initial: true,
            _fbp: cookie('_fbp'),
            _fbc: cookie('_fbc'),
        })
            .then((response) => {
                if (response.ok) {
                    storage.set(visitKey, '1');
                }
            })
            .catch(() => {});
    }

    const milestones = [25, 50, 75, 90];
    const trackScroll = () => {
        const scrollable = document.documentElement.scrollHeight - innerHeight;

        if (scrollable <= 0) {
            return;
        }

        const depth = Math.round((scrollY / scrollable) * 100);

        for (const milestone of milestones) {
            const key = `analytics_scroll:${source}:${milestone}`;

            if (depth >= milestone && !storage.get(key)) {
                storage.set(key, '1');
                void track('scroll', { depth: milestone }).catch(() => {});
            }
        }
    };
    addEventListener('scroll', trackScroll, { passive: true });

    let activeSeconds = 0;
    const dwellTimer = window.setInterval(() => {
        if (document.hidden) {
            return;
        }

        activeSeconds += 1;

        if (
            activeSeconds === 15 ||
            (activeSeconds > 15 && (activeSeconds - 15) % 30 === 0)
        ) {
            void track('engagement', {
                type: 'dwell_ping',
                duration: activeSeconds === 15 ? 15000 : 30000,
                is_initial: activeSeconds === 15,
            }).catch(() => {});
        }
    }, 1000);
    addEventListener('pagehide', () => clearInterval(dwellTimer), {
        once: true,
    });

    if ('IntersectionObserver' in window) {
        const timers = new Map<Element, number>();
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const section = entry.target as HTMLElement;
                    const key = `section_seen_v2_${source}:${section.id}`;

                    if (!entry.isIntersecting) {
                        clearTimeout(timers.get(section));
                        timers.delete(section);
                    } else if (!storage.get(key) && !timers.has(section)) {
                        timers.set(
                            section,
                            window.setTimeout(() => {
                                timers.delete(section);

                                if (!storage.get(key)) {
                                    storage.set(key, '1');
                                    void track('section_view', {
                                        section: section.id,
                                    }).catch(() => {});
                                }

                                observer.unobserve(section);
                            }, 500),
                        );
                    }
                }
            },
            { rootMargin: '0px 0px -20% 0px', threshold: 0 },
        );
        document
            .querySelectorAll('section[id]')
            .forEach((section) => observer.observe(section));
    }

    document.addEventListener('click', (event) => {
        const link = (event.target as Element | null)?.closest?.(
            'a[href*="wa.me/"]',
        );

        if (!(link instanceof HTMLAnchorElement)) {
            return;
        }

        const href = link.href;
        let message = href.toLowerCase();

        try {
            message = decodeURIComponent(
                href.replace(/\+/g, ' '),
            ).toLowerCase();
        } catch {
            /* Keep URL. */
        }

        const packageName = message.includes('try scuba')
            ? 'Try Scuba Diving'
            : message.includes('scuba')
              ? 'Scuba Diving'
              : message.includes('snorkel')
                ? 'Snorkeling'
                : null;
        const locationName =
            link.id === 'whatsapp-button'
                ? 'floating_whatsapp'
                : (link.closest('section[id]')?.id ??
                  (link.closest('header') ? 'header' : 'footer'));
        const text = (
            link.innerText ||
            link.getAttribute('aria-label') ||
            'WhatsApp'
        )
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 255);
        const conversionType = packageName ? 'wa_registration' : 'wa_inquiry';
        const common = {
            location: locationName.slice(0, 100),
            text,
            destination: href,
            package: packageName,
            _fbp: cookie('_fbp'),
            _fbc: cookie('_fbc'),
        };
        const conversionId = eventId('wa');

        void track('cta_click', { event_id: eventId('cta'), ...common }).catch(
            () => {},
        );
        void track('conversion', {
            event_id: conversionId,
            type: conversionType,
            meta_event: 'Search',
            ...common,
        }).catch(() => {});
        trackingWindow.dataLayer?.push({
            event: 'generate_lead',
            landing_source: source,
            ab_variant: variant,
            lead_type: conversionType,
            cta_location: locationName,
        });
        trackingWindow.dataLayer?.push({
            event: 'whatsapp_click',
            landing_source: source,
            ab_variant: variant,
            cta_location: locationName,
        });
        trackingWindow.fbq?.(
            'track',
            'Search',
            {
                content_category: conversionType,
                content_name: packageName || 'WhatsApp inquiry',
            },
            { eventID: conversionId },
        );
    });
}
