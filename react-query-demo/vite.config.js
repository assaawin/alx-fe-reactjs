import { defineConfig, transformWithEsbuild } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    // Custom plugin to transform .js files containing JSX
    {
      name: "treat-js-files-as-jsx",
      enforce: "pre", // Important for HMR to work
      async transform(code, id) {
        // Apply only to files in src/ ending with .js
        if (!id.match(/src\/.*\.js$/)) {
          return null;
        }
        // Transform the code as JSX
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic", // Modern JSX transform (no need for React import)
        });
      },
    },
    react(),
  ],
  // Optimize dependencies to also treat .js as JSX during pre-bundling
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
});
