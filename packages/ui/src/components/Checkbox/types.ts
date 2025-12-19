import React, { HTMLAttributes, ReactNode } from "react";

export interface CheckboxProps<T = any>
  extends Omit<
    React.HTMLAttributes<HTMLLabelElement>,
    "children" | "onChange"
  > {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, e: Event) => void;
  value?: T;
  onGroupChange?: (value: T, checked: boolean) => void;
  children?: ReactNode;
  readonly?: boolean;
}

export interface CheckboxGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
  disabled?: boolean;
  defaultValue?: any[];
  value?: any[];
  onChange?: (value: any[], e: Event) => void;
  readonly?: boolean;
  children: ReactNode;
}
