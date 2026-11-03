// @ts-check
import { defineConfig } from 'astro/config';
import Compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
    site: 'https://mkfix.se',
    trailingSlash: 'always',
    integrations: [Compress()]
});
