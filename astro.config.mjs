import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://ai-nighty-night.example.com',
  integrations: [tailwind()],
  output: 'static',
});