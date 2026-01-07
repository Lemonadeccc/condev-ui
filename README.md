# condev-ui

Headless React components: behavior-first, style-by-you.

- English | [简体中文](README.zh-CN.md)

## Features

- Headless-first: behavior over styling.
- Tailwind-friendly (this repo targets Tailwind v4).

## Components

- `Button`
- `Checkbox`
- `Grid`
- `Icon`
- `Link`
- `Modal`
- `Radio`
- `Toast`
- `VerticalMenu`

## Requirements

- Node `22+`

## Install

```bash
pnpm add @condev-ui/ui
# or: npm i @condev-ui/ui
# or: yarn add @condev-ui/ui
```

## Quick start

1) Import library styles once:

```ts
import "@condev-ui/ui/es/index.css";
```

2) Use components:

```tsx
import { Button } from "@condev-ui/ui";

export function Example() {
  return <Button>Button</Button>;
}
```

## Styling

`@condev-ui/ui` is headless-first: it focuses on state/behavior and keeps styling flexible. The package exports a base stylesheet at `@condev-ui/ui/es/index.css` which you can layer with your own CSS/Tailwind.
