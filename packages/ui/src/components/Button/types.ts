import React from "react";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
}

export const buttonVariants = [
  "filled",
  "light",
  "outline",
  "transparent",
  "danger",
] as const;

export type ButtonVariant = (typeof buttonVariants)[number];

export interface ButtonProps {
  /**
   * The variant of the button
   */
  variant?: ButtonVariant;
  /**
   * The size of the button
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * The children of the button
   */
  children?: React.ReactNode;
  /**
   * The function to be called when the button is clicked
   */
  onClick?: () => void;
}
