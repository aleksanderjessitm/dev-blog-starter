import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import deno from '@astrojs/deno'
import sitemap from '@astrojs/sitemap';
import { config } from './config.mjs';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  integrations: [
    preact({
      compat: true
    }),
    mdx(),
    sitemap({
      customPages: [
        `${config.domainName}/`,
        `${config.domainName}/posts`,
      ]
    }),
    image(),
  ],
  site: `${config.domainName ?? "https://example.com"}`
});