// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  // TODO : fix this
  vite: {
    resolve: {
      alias: {
        "@": "./src",
      },
    },
  },
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "fr"],
  },
});
