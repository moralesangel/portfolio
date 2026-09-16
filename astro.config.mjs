// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages at https://moralesangel.github.io/portfolio
  site: 'https://moralesangel.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});
