import type { ModalProps } from "../types";

export const findIndexById = (arr: ModalProps[], id: ModalProps["id"]) =>
  arr.findIndex((item) => item.id === id);
