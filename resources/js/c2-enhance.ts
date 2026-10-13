import '../css/landing.css';
import { initializeC2Analytics } from './c2-analytics';

const page = document.getElementById('page');

function setLanguage(language: 'en' | 'id') {
    if (!page) {
        return;
    }

    page.dataset.lg = language;
    document.documentElement.lang = language;

    for (const code of ['en', 'id']) {
        const button = document.getElementById(`btn-lang-${code}`);
        button?.classList.toggle('active', code === language);
        button?.setAttribute('aria-pressed', String(code === language));
    }
}

document
    .getElementById('btn-lang-en')
    ?.addEventListener('click', () => setLanguage('en'));
document
    .getElementById('btn-lang-id')
    ?.addEventListener('click', () => setLanguage('id'));

for (const [buttonId, targetId, eventName] of [
    ['btn-hero-snorkeling', 'snorkeling-intro', 'hero_snorkeling'],
    ['btn-hero-scuba', 'scuba-diving-section', 'hero_scuba'],
    ['btn-hero-discovery', 'discovery-scuba-section', 'hero_discovery'],
]) {
    document.getElementById(buttonId)?.addEventListener('click', (event) => {
        const target = document.getElementById(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();
        const trackingWindow = window as typeof window & {
            dataLayer?: Array<Record<string, string>>;
            gtag?: (type: string, name: string) => void;
        };
        trackingWindow.dataLayer ??= [];
        trackingWindow.dataLayer.push({
            event: eventName,
            cta_location: 'hero',
        });
        trackingWindow.gtag?.('event', eventName);
        const headerHeight =
            document.querySelector('header')?.getBoundingClientRect().height ??
            0;
        window.scrollTo({
            top:
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight,
            behavior: 'smooth',
        });
    });
}

initializeC2Analytics();

let tagManagerLoaded = false;
function loadTagManager() {
    if (tagManagerLoaded) {
        return;
    }

    tagManagerLoaded = true;
    const trackingWindow = window as typeof window & {
        dataLayer?: Array<Record<string, unknown>>;
    };
    trackingWindow.dataLayer ??= [];
    trackingWindow.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-57DRDWXR';
    document.head.appendChild(script);
}

for (const eventName of ['pointerdown', 'keydown', 'scroll']) {
    window.addEventListener(eventName, loadTagManager, {
        once: true,
        passive: true,
    });
}

window.addEventListener('load', () => window.setTimeout(loadTagManager, 8000), {
    once: true,
});

for (const [trackId, cardSelector, previousId, nextId] of [
    ['rev-cards-carousel', '.rev-card-item', 'rev-prev-btn', 'rev-next-btn'],
    ['ta-cards-carousel', '.ta-card-item', 'ta-prev-btn', 'ta-next-btn'],
]) {
    const track = document.getElementById(trackId);

    for (const [buttonId, direction] of [
        [previousId, -1],
        [nextId, 1],
    ] as const) {
        document.getElementById(buttonId)?.addEventListener('click', () => {
            const card = track?.querySelector<HTMLElement>(cardSelector);
            track?.scrollBy({
                left: direction * ((card?.offsetWidth ?? 134) + 16) * 2,
                behavior: 'smooth',
            });
        });
    }
}
