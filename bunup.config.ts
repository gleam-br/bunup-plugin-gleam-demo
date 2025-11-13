import { defineConfig, defineWorkspace } from "bunup";
import { unused } from 'bunup/plugins';

import bunPluginGleam from "bun-plugin-gleam";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "node",
  format: ["esm"],
  sourcemap: "linked",
  minify: true,
  plugins: [bunPluginGleam({ bunup: true }), unused()]
});
