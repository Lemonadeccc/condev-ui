# condev-ui

面向 React 的 Headless 组件库：以“行为/能力”为核心，你负责“样式/设计体系”。

- [English](README.md) | 简体中文

## 特性

- Headless 优先：更关注“行为/能力”，不强绑定具体视觉样式。
- 与 Tailwind CSS 友好（本仓库使用 Tailwind v4）。

## 组件

- `Button`
- `Checkbox`
- `Grid`
- `Icon`
- `Link`
- `Modal`
- `Radio`
- `Toast`
- `VerticalMenu`

## 运行环境

- Node `22+`

## 安装

```bash
pnpm add @condev-ui/ui
# 或：npm i @condev-ui/ui
# 或：yarn add @condev-ui/ui
```

## 快速开始

1）全局引入一次组件库样式：

```ts
import "@condev-ui/ui/es/index.css";
```

2）按需引入组件：

```tsx
import { Button } from "@condev-ui/ui";

export function Example() {
  return <Button>按钮</Button>;
}
```

## 样式

`@condev-ui/ui` 是 headless-first：交互状态与能力在组件内，视觉样式由你决定。组件库提供基础样式 `@condev-ui/ui/es/index.css`，你可以在其之上叠加自己的 Tailwind/CSS。
