// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import aws from "astro-sst";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/noop",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: aws(),
  site: "https://macknolan.com", // Update this to your actual domain
  integrations: [
    mdx(),
    sitemap({
      customPages: ["https://macknolan.com/sitwell_features.pdf"],
    }),
    react(),
  ],
});
