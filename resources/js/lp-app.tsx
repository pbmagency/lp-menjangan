import { createRoot } from 'react-dom/client';
import C1LandingPage from './pages/c1-lp';

/**
 * Lean Inertia bootstrap for public landing pages (c1-lp, etc.).
 * Does NOT import admin layouts, AppProviders, or theme utilities — saves ~126 KB vs app.tsx.
 * No custom resolve() — @inertiajs/vite plugin injects it automatically so each page
 * component stays as a separate manifest chunk (required by Blade @vite directive).
 */
const root = document.getElementById('app');

if (root) {
    createRoot(root).render(<C1LandingPage />);
}
