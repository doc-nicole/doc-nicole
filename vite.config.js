import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resume: resolve(__dirname, "resume.html"),
      },
    },
  },
});
