import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/doc-nicole/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        resume: resolve(__dirname, "resume.html"),
      },
    },
  },
});
