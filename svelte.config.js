import adapter from '@sveltejs/adapter-static'; // Das hier ändern!
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html', // Wichtig für Netlify
            precompress: false,
            strict: true
        })
    }
};

export default config;