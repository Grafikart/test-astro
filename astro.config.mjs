// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
    site: 'https://grafikart.github.io',
    base: '/test-astro',
});
