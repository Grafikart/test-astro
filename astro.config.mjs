// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    trailingSlash: 'never',
	integrations: [mdx(), sitemap()],
    site: 'https://grafikart.github.io',
    base: '/test-astro',
    build: {
        format: 'file',
    },
    redirects: {
        "/test-astro/about/": "/test-astro/about",
        "/test-astro/about.html": "/test-astro/about",
    }
});
