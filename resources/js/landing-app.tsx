import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    progress: {
        color: '#2563eb',
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

