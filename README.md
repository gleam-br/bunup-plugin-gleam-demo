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

Gleam new:

```sh
cd bunup-plugin-gleam-demo
gleam new bunup_plugin_gleam_demo --skip-git --skip-github --template javascript .
```

Glema build:

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
$ Hello from bunup_plugin_gleam_demo!
```
