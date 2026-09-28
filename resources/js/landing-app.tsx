import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import Landing from './pages/landing';

createInertiaApp({
    resolve: (name) => {
        if (name === 'landing') return Landing;
        return import(`./pages/${name}.tsx`);
    },
    progress: {
        color: '#2563eb',
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});


