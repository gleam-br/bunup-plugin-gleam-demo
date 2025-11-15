import { defineConfig } from "bunup";

import gleam from "bun-plugin-gleam";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "node",
  format: ["esm"],
  sourcemap: "linked",
  minify: true,
  plugins: [gleam({ log: "debug", force: true })]
});
