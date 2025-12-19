import { ModalProps } from "../types";

let counter = 0;
export function getId({ id }: ModalProps) {
  counter = (counter + 1) % 1001;
  return (
    id ??
    Date.now().toString(36) + Math.random().toString(36).slice(2) + counter
  );
}
