import React from "react";

import * as SC from "./styles";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { variant, size, disabled, children, onClick } = props;
  return (
    <SC.Button
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </SC.Button>
  );
};
