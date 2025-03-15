import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/all-on-mv/", // Substitua pelo nome exato do repositório no GitHub
});
