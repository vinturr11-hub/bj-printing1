import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Force Vite to handle the local Cloudflare Workerd bundle boundary cleanly
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    preview: {
      allowedHosts: true
    }
  }
});
