import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import react from "@astrojs/react";

import {config} from './config.mjs';

// https://astro.build/config
export default defineConfig({
  vite: {
    appType: "spa",
    build: {
      reportCompressedSize: true
    },
    server: {
      watch: {
        usePolling: true,
      }
    }
  },
  integrations: [
      preact({
        compat: true
      }), 
      sitemap({
        changefreq: "weekly"
      }), 
      mdx(),
      svelte(),
      image(),
      react()
    ],
    site: `${config.domainName ?? "https://example.com"}`
});