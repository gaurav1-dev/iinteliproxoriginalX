import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      // @ts-expect-error nitro preset config – valid for TanStack Start's bundler
      nitro: {
        preset: "netlify",
      },
    }),
    viteReact(),
    viteTsConfigPaths(),
    tailwindcss(),
  ],
});
