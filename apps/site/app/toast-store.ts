"use client";

import { createToastStore } from "@condev-ui/ui";

export const toastStore = createToastStore();

export const toastBottomStore = createToastStore({ maxCount: 6 });
export const toastBottomStackStore = createToastStore({ maxCount: 3 });
