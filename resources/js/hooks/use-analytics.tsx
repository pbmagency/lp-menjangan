import { useCallback, useEffect } from 'react';

const LANDING_SOURCE_KEY = 'landing_source';
const REFERRAL_SOURCE_KEY = 'referral_source';
const VISIT_TRACKED_PREFIX = 'analytics_visit_tracked:';
const pendingVisitKeys = new Set<string>();

export type AnalyticsEventType =
    | 'visit'
    | 'scroll'
    | 'engagement'
    | 'cta_click'
    | 'initiate_checkout'
    | 'conversion'
    | 'payment'
    | 'section_view';

interface AnalyticsEvent {
    event_type: AnalyticsEventType;
    event_data?: Record<string, unknown>;
    referral_source?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}

type GoogleTagManagerEvent = Record<string, unknown> & {
    event: string;
    event_id: string;
};

export function generateEventId(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Push a custom event to Google Tag Manager. The dataLayer exists before the
 * GTM script finishes loading, so early interactions are queued safely.
 */
export function pushGoogleTagManagerEvent(
    event: string,
    parameters: Record<string, unknown> = {},
): string {
    const eventId =
        typeof parameters.event_id === 'string'
            ? parameters.event_id
            : generateEventId();

    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event,
            ...parameters,
            event_id: eventId,
        } satisfies GoogleTagManagerEvent);
    }

    return eventId;
}

function numericValue(value: unknown, fallback: unknown = 0): number {
    const parsed = Number(value ?? fallback);

    return Number.isFinite(parsed) ? parsed : 0;
}

function googleItem(data: Record<string, unknown> = {}) {
    const packageName = String(
        data.package ?? data.level ?? 'TOEFL Full Bright',
    );

    return {
        item_id: String(
            data.item_id ?? packageName.toLowerCase().replace(/\s+/g, '-'),
        ),
        item_name: packageName,
        item_category: 'TOEFL Course',
        price: numericValue(data.price ?? data.amount),
        quantity: 1,
    };
}

function getCookieValue(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));

    return match ? decodeURIComponent(match[2]) : null;
}

export function getLandingSource(): string {
    if (typeof window === 'undefined') {
        return 'unknown';
    }

    return (
        sessionStorage.getItem(LANDING_SOURCE_KEY) || window.location.pathname
    );
}

export function useAnalytics() {
    const coursePrice = import.meta.env.VITE_COURSE_PRICE;

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (!sessionStorage.getItem(LANDING_SOURCE_KEY)) {
            sessionStorage.setItem(
                LANDING_SOURCE_KEY,
                window.location.pathname,
            );
        }

        if (!sessionStorage.getItem(REFERRAL_SOURCE_KEY)) {
            const urlParams = new URLSearchParams(window.location.search);
            let externalReferrer = '';

            if (document.referrer) {
                try {
                    externalReferrer =
                        new URL(document.referrer).hostname ===
                        window.location.hostname
                            ? ''
                            : document.referrer;
                } catch {
                    externalReferrer = '';
                }
            }

            sessionStorage.setItem(
                REFERRAL_SOURCE_KEY,
                urlParams.get('ref') || externalReferrer || 'direct',
            );
        }
    }, []);

    const track = useCallback(
        async (event: AnalyticsEvent): Promise<boolean> => {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const payload = {
                    ...event,
                    event_data: {
                        ...event.event_data,
                        landing_source: getLandingSource(),
                    },
                    referral_source:
                        event.referral_source ||
                        sessionStorage.getItem(REFERRAL_SOURCE_KEY) ||
                        'direct',
                    utm_source: event.utm_source || urlParams.get('utm_source'),
                    utm_medium: event.utm_medium || urlParams.get('utm_medium'),
                    utm_campaign:
                        event.utm_campaign || urlParams.get('utm_campaign'),
                    utm_content:
                        event.utm_content || urlParams.get('utm_content'),
                    utm_term: event.utm_term || urlParams.get('utm_term'),
                };

                const response = await fetch('/analytics/track', {
                    method: 'POST',
                    credentials: 'same-origin',
                    keepalive: true,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN':
                            document
                                .querySelector('meta[name=csrf-token]')
                                ?.getAttribute('content') || '',
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    return false;
                }

                return true;
            } catch {
                return false;
            }
        },
        [],
    );

    const trackVisit = useCallback(() => {
        const landingSource = getLandingSource();
        const visitKey = `${VISIT_TRACKED_PREFIX}${landingSource}`;

        if (
            sessionStorage.getItem(visitKey) === 'tracked' ||
            pendingVisitKeys.has(visitKey)
        ) {
            return;
        }

        pendingVisitKeys.add(visitKey);

        const eventId =
            ((window as unknown as Record<string, unknown>)
                .__META_PAGE_VIEW_EVENT_ID as string) || generateEventId();

        // Google equivalent of Meta ViewContent. Google page_view is already
        // emitted by the installed Google tag, so it is not pushed again here.
        pushGoogleTagManagerEvent('view_item', {
            event_id: eventId,
            page_path: window.location.pathname,
            ecommerce: {
                currency: 'IDR',
                items: [googleItem()],
            },
        });

        void track({
            event_type: 'visit',
            event_data: {
                page: window.location.pathname,
                timestamp: new Date().toISOString(),
                event_id: eventId,
                _fbp: getCookieValue('_fbp'),
                _fbc: getCookieValue('_fbc'),
            },
        }).then((success) => {
            pendingVisitKeys.delete(visitKey);

            if (success) {
                sessionStorage.setItem(visitKey, 'tracked');

                return;
            }

            sessionStorage.removeItem(visitKey);
        });
    }, [track]);

    const trackScroll = useCallback(
        (depth: number) => {
            void track({
                event_type: 'scroll',
                event_data: {
                    depth,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                },
            });
        },
        [track],
    );

    const trackEngagement = useCallback(
        (duration: number, isInitial = false) => {
            void track({
                event_type: 'engagement',
                event_data: {
                    type: 'dwell_ping',
                    duration,
                    is_initial: isInitial,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                },
            });
        },
        [track],
    );

    const trackCTA = useCallback(
        (location: string, text: string, destination = 'unknown') => {
            void track({
                event_type: 'cta_click',
                event_data: {
                    location,
                    text,
                    destination,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                },
            });
        },
        [track],
    );

    const trackInitiateCheckout = useCallback(
        (
            location: string,
            data?: Record<string, unknown>,
            eventId = generateEventId(),
        ) => {
            const eventData = data ?? {};
            const value = numericValue(eventData.price, coursePrice);

            // Google equivalent of the Meta AddToCart browser/CAPI event.
            pushGoogleTagManagerEvent('add_to_cart', {
                event_id: eventId,
                cta_location: location,
                ecommerce: {
                    currency: String(eventData.currency ?? 'IDR'),
                    value,
                    items: [googleItem({ ...eventData, price: value })],
                },
            });

            void track({
                event_type: 'initiate_checkout',
                event_data: {
                    type: 'external_payment_redirect',
                    location,
                    event_id: eventId,
                    _fbp: getCookieValue('_fbp'),
                    _fbc: getCookieValue('_fbc'),
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                    ...data,
                },
            });
        },
        [coursePrice, track],
    );

    const trackConversion = useCallback(
        (type: string, data?: Record<string, unknown>) => {
            const eventData = data ?? {};

            if (type === 'wa_inquiry' || type === 'wa_registration') {
                const value = numericValue(eventData.price, coursePrice);

                // Google equivalent of the Meta Search/WhatsApp lead event.
                pushGoogleTagManagerEvent('generate_lead', {
                    lead_type: type,
                    cta_location: eventData.location ?? 'unknown',
                    currency: String(eventData.currency ?? 'IDR'),
                    value,
                    item_name: googleItem(eventData).item_name,
                });
            }

            void track({
                event_type: 'conversion',
                event_data: {
                    type,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                    ...data,
                },
            });
        },
        [coursePrice, track],
    );

    const trackPayment = useCallback(
        (status: string, data?: Record<string, unknown>) => {
            const eventData = data ?? {};
            const normalizedStatus = status.toLowerCase();

            if (['success', 'paid', 'completed'].includes(normalizedStatus)) {
                const value = numericValue(eventData.amount, coursePrice);

                pushGoogleTagManagerEvent('purchase', {
                    event_id:
                        typeof eventData.event_id === 'string'
                            ? eventData.event_id
                            : generateEventId(),
                    ecommerce: {
                        transaction_id: String(
                            eventData.order_id ?? generateEventId(),
                        ),
                        currency: String(eventData.currency ?? 'IDR'),
                        value,
                        items: [googleItem({ ...eventData, price: value })],
                    },
                });
            }

            void track({
                event_type: 'payment',
                event_data: {
                    status,
                    amount: coursePrice,
                    currency: 'IDR',
                    timestamp: new Date().toISOString(),
                    ...data,
                },
            });
        },
        [track, coursePrice],
    );

    const trackSectionView = useCallback(
        (sectionId: string, data?: Record<string, unknown>) => {
            return track({
                event_type: 'section_view',
                event_data: {
                    section: sectionId,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString(),
                    ...data,
                },
            });
        },
        [track],
    );

    return {
        track,
        trackVisit,
        trackScroll,
        trackEngagement,
        trackCTA,
        trackInitiateCheckout,
        trackConversion,
        trackPayment,
        trackSectionView,
    };
}
