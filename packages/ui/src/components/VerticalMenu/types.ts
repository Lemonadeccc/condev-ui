import type { AnimationProps } from "framer-motion";
import React, { HTMLAttributes, type LiHTMLAttributes } from "react";

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  defaultOpenedSubMenuValues?: string[];
  defaultSelectedValuePath?: string[];
  openedSubMenuValues?: string[];
  selectedValuePath?: string[];
  onClickSubMenu?: (
    value: string,
    finalOpenedSubMenuValues: string[],
    keyPath: string[],
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  onClickMenuItem?: (
    value: string,
    keyPath: string[],
    e: React.MouseEvent<HTMLDivElement>
  ) => void;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface VerticalSubMenuProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customizeDivAnimate?: AnimationProps;
  value: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface SubMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  selectedClassName?: string;
  notSelectedClassName?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface SubMenuListProps extends HTMLAttributes<HTMLDivElement> {
  customizeDivAnimate?: AnimationProps;
  ref?: React.RefObject<HTMLDivElement>;
}

export interface MenuItemProps extends LiHTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  value: string;
  selectedClassName?: string;
  notSelectedClassName?: string;
  ref?: React.RefObject<HTMLDivElement>;
}
