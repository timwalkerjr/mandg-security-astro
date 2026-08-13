import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Static 1:1 port of the M&G Security SPA.
// output: 'static' — every route is pre-rendered to real HTML at build time.
// Governing rule: content in the served HTML, per-route meta + JSON-LD.
export default defineConfig({
  site: 'https://astro-mandgsecurity.netlify.app',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
