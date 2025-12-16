import React, { type ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ref?: React.Ref<HTMLButtonElement>;
  type?: "fill" | "outline";
}
