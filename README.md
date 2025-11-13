# 🎓 Demo: Bun bunup plugin to gleam

Gleam build:

```sh
gleam clean
gleam build
```

Bun make:

```sh
bunx bunup
```

## How this project was created

Bunup create:

```sh
bunx @bunup/cli@latest create
```

1. Select template variant -> `Minimal`
2. What type of library do you want to create? -> `TypeScript Library`
3. Do you to create a monorepo? -> `No`
4. Package nama -> `bunup-plugin-gleam-demo`
5. Description -> `Demo: Bunup ...`
6. GitHub repository -> `gleam-br/bunup-plugin-gleam-demo`

Add plugin:

```sh
cd bunup-plugin-gleam-demo
bun add --dev bun-plugin-gleam
```

Bunup config [bunup.config.ts](./bunup.config.ts):

```ts
import { defineConfig } from "bunup";
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
```

Gleam new:

```sh
gleam new bunup_plugin_gleam_demo --skip-git --skip-github --template javascript .
```

Gleam build:

```sh
gleam build --target javascript --warnings-as-errors
```

Bunup make:

```sh
bunx bunup
```

Bunup dev:

```sh
bunx bunup --watch
```

Testing

```sh
node ./dist/index.js
# Hello from bunup_plugin_gleam_demo!
```

## ✅ Plugins

- [bun-plugin-gleam](https://github.com/gleam-br/bun-plugin-gleam)
- [vite-plugin-gleam](https://github.com/gleam-br/vite-plugin-gleam)

## 🧪 Demo

- [vite-plugin-gleam-demo](https://github.com/gleam-br/vite-plugin-gleam-demo)
- [vite-ts-plugin-gleam-demo](https://github.com/gleam-br/vite-ts-plugin-gleam-demo)
