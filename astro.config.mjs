import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({
    compat: true
  }), sitemap({
    changefreq: "weekly"
  }), mdx(), svelte(), image(), react()],
  site: `https://example.com`
});