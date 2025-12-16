import type { ComponentPropsWithoutRef, JSX } from "react";

import { DIRECTION } from "./contants";

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];

export interface ToastProps {
  duration?: number | null;
  id?: string;
  component: JSX.Element;
  isHovering?: boolean;
  showProgress?: boolean;
}

export interface StoreInstance {
  getState: () => ToastStates;
  subscribe: (listener: () => void) => () => void;
  add: (noticeProps: ToastProps) => string;
  update: (id: ToastProps["id"], options: ToastProps) => void;
  remove: (id: string) => void;
  clearAll: () => void;
  maxCount: number;
}

export interface ToastStore {
  add: (noticeProps: ToastProps) => string;
  update: (id: ToastProps["id"], options: ToastProps) => void;
  remove: (id: string) => void;
  clearAll: () => void;
}

export interface ToastManagerProps {
  duration?: number;
  attach?: string;
  store: StoreInstance;
  direction?: Direction;
  containerProps?: ComponentPropsWithoutRef<"div">;
  stack?: boolean;
}

export type ToastStates = ToastProps[];
