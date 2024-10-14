import { defineConfig } from "vite";
// TODO: vite는 plugin-react-swc를 사용하고 있음.
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite({}), react()],
  base: "/ben-log/",
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
