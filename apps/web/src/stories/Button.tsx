import React from "react";

// export const buttonVariants = [
//   "filled",
//   "light",
//   "outline",
//   "transparent",
//   "danger",
// ] as const;

// export type ButtonVariant = (typeof buttonVariants)[number];

export interface ButtonProps {
  /**
   * The variant of the button
   */
  variant?: "filled" | "light" | "outline" | "transparent" | "danger";
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

export const Button = (props: ButtonProps) => {
  const {
    variant = "filled",
    size = "medium",
    disabled,
    children,
    onClick,
    ...rest
  } = props;

  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const disabledClass = disabled ? "btn-disabled" : "";

  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass}`;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
