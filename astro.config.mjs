import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import vercel from '@astrojs/vercel/serverless'
import sitemap from '@astrojs/sitemap';
import { config } from './config.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
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
    mdx(),
    sitemap({
      customPages: [
        `${config.domainName}/`,
        `${config.domainName}/posts`,
        `${config.domainName}/licenses`,
      ]
    }),
    svelte(),
    image(),
  ],
  site: `${config.domainName ?? "https://example.com"}`
});