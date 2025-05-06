import React from "react";

import "./index.css";

import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
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

export { Button };
