import { ChangeEvent, HTMLAttributes, ReactNode } from "react";

export interface RadioProps<T = any>
  extends Omit<HTMLAttributes<HTMLLabelElement>, "children" | "onChange"> {
  disabled?: boolean;
  value?: T;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: ChangeEvent) => void;
  children?: ReactNode;
  readonly?: boolean;
}

export interface RadioGroupProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
  disabled?: boolean;
  name?: string;
  type?: "radio" | "button";
  onChange?: (value: any, event: ChangeEvent) => void;
  value?: any;
  defaultValue?: any;
  children: ReactNode;
  readonly?: boolean;
}

export interface RadioGroupContextProps {
  type: "radio" | "button";
  value?: any;
  disabled?: boolean;
  group?: boolean;
  name?: RadioGroupProps["name"];
  onChangeValue?: (value: any, event: ChangeEvent) => void;
  readonly?: boolean;
}
