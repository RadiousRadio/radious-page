import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      // The 404 route must be listed explicitly: crawlLinks cannot
      // discover a page nothing links to.
      routes: ["/", "/terms", "/privacy", "/404"],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
