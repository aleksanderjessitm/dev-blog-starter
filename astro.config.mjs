import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import NetlifyCMS from 'astro-netlify-cms';
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [NetlifyCMS({
    config: {
      backend: {
        name: "git-gateway",
        branch: "main"
      },
      collections: [{
        name: "posts",
        label: "Blog Posts",
        folder: "src/pages/posts",
        create: true,
        delete: true,
        fields: [{
          name: "title",
          widget: "string",
          label: "Post Title"
        }, {
          name: "body",
          widget: "markdown",
          label: "Post Body"
        }, {
          name: "date",
          widget: "datetime",
          label: "Post Date"
        }, {
          name: "image",
          widget: "image",
          label: "Post Image"
        }]
      }]
    }
  }), preact({
    compat: true
  }), sitemap({
    changefreq: "weekly"
  }), mdx(), svelte(), image(), react()],
  site: `https://example.com`
});