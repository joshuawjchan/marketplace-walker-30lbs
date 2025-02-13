import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/marketplace-walker-30lbs/",
  plugins: [react()],
});
