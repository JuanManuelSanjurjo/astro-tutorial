import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://marvelous-manatee-0d8623.netlify.app",
  integrations: [preact()]
});