# TS、ESLint prettier 初始化 node 项目

初始化项目

```shell
npm init
```

## 一、TS 初始化

安装 typescript、@types/node，ts-node 依赖。

- typescript、@types/node 依赖库，安装 typescript 和 node 的 ts 类型定义。
- ts-node 依赖库，用于执行 t's

```she
pnpm add typescript @types/node ts-node -D
```

初始化 typescript 配置，生产 tsconfig.json 文件

```shell
npx tsc --init
```

创建项目入口文件：src/index.ts

在 tsconfig.json 文件中，修改一下这些配置：

```json
{
  "compilerOptions": {
    "target": "ESNext", // 目标代码语法规范。
    "module": "commonjs", // 目标代码要使用的模块化方案
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    },
    "outDir": "./dist",
  },
  "include": ["./src/**/*.ts"], // // 有哪些ts代码需要经过编译解析
  "exclude": ["node_modules"], // 排除不需要进行 ts 解析的目录。在需要解析的目录下有引用就不会解析。
}
```

安装 tsconfig-paths 依赖，用于 TypeScript 项目的工具库，主要用于解决 TypeScript 项目中路径别名的问题。当你在 TypeScript 的 `tsconfig.json` 文件中配置了路径别名（`paths`），可以方便地使用别名来替代相对路径，例如 `@src/utils` 替代 `../../utils`。

```shell
pnpm add tsconfig-paths -D
```

安装 tsc-alias 依赖，用于对 tsc 打包后的代码，进行路径别名的处理。

```shell
pnpm add tsc-alias -D
```

## 二、ESLint 初始化

安装 eslint 依赖

```shell
pnpm add eslint -D
```

初始化 eslint 配置。

```shell
npx eslint --init
```

根据情况，选择配置。

```shell
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.6
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · commonjs
✔ Which framework does your project use? · none
....
```

完成后，会在项目根目录生成 `eslint.config.mjs` 文件。

为 eslint 使用 prettier 插件

安装 eslint-config-prettier、eslint-plugin-prettier 插件

```shell
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

编辑 `eslint.config.mjs` 文件：

```javascript
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    languageOptions: { globals: globals.browser },
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended' // 添加 Prettier 插件配置
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error' // 确保 Prettier 规则作为 ESLint 错误被报告
    }
  }
]
```

## 三、prettier 初始化

安装 prettier

```shell
pnpm add prettier -D
```

在项目根目录，创建 prettier 配置文件 .prettierrc.json

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none",
  "useTabs": false,
  "arrowParens": "avoid"
}
```

在项目根目录，创建 prettier 忽略配置文件 .prettierignore

```shell
/node_modules/**
/dist/**
/logs/**
```

## 四、tsup 打包工具

tsup 是一个轻量的构建工具，底层由 esbuild 提供支持。 它可以直接把 .ts、.tsx 转成不同格式（esm、cjs、iife）的文件。

安装 tsup 依赖

```shell
pnpm add tsup -D
```

在项目根目录，创建一个 tsup.config.ts 的配置文件。

```typescript
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ['./src/index.ts'],  // 打包入口
  sourcemap: true,  // 生成 sourcemap 文件以便于调试
  clean: true, // 在打包之前清空 dist 目录
  minify: true, // 压缩打包体积
  dts: false, // 生成类型文件 xxx.d.ts
  splitting: false, // 代码分割，esm 模式默认支持 如果 cjs 需要代码分割的话，就需要配置为true
  format:["iife"],
  outDir: "dist",
  target: "es2020",
  tsconfig: "tsconfig.json",
})
```

在项目根目录下，执行命令，进行打包。

```shell
npx tsup
```

## 五、package.json 配置

在 package.json 文件中的 script 配置中，加入如下配置。

```json
{
  "scripts": {
    "build": "tsup",
    "tsc-build": "rm -rf dist && tsc && tsc-alias",
    "start": "node dist/index.global.js",
    "debug": "node --inspect-brk dist/index.js",
    "dev": "ts-node -r tsconfig-paths/register src/index.ts",
    "lint": "eslint ./src --ext .ts --fix",
    "prettier": "prettier --write .",
  },
}
```
