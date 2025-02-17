import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
	plugins: [react(), tailwindcss()],
});
