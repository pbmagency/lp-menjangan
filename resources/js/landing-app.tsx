import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
    progress: {
        color: '#2563eb',
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});

