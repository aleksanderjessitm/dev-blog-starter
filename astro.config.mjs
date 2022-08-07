import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap(), mdx(), astroImageTools(), svelte()],
  site: `ENTER_HERE`
});