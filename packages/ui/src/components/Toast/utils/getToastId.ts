import type { ToastStates } from "../types";

import { findById } from "./findById";

export function getToastId(state: ToastStates, id: string) {
  return findById(state, id)?.id;
}
