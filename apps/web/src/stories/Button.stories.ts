import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Condev/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "light", "outline", "transparent", "danger"],
    },
    size: { control: "select", options: ["small", "medium", "large"] },
    disabled: { control: "boolean" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "按钮",
    disabled: false,
    size: "medium",
    variant: "filled",
    onClick: () => {
      alert("Button clicked!");
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "primary button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "secondary button",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "light button",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "transparent button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "danger button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "large button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "small button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "disabled button",
  },
};

export const WithAlertOnClick: Story = {
  args: {
    children: "click me",
    onClick: () => alert("button clicked!"),
  },
};
