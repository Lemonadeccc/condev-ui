import type { ToastProps } from "../types";

export const findById = (arr: ToastProps[], id: string) =>
  arr.find((item) => item.id === id);
