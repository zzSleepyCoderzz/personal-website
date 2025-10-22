// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://zzsleepycoderzz.github.io',
  base: 'personal-website',
  output: 'static',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});