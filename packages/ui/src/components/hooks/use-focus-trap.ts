"use client";

import { RefObject, useEffect, useRef } from "react";

const TABBABLE_ELEMENTS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), area[href], form, audio[controls], video[controls], [tabindex="0"]';

const FIRST = "fist";
const NONE = "none";

export type InitialFocus = typeof FIRST | typeof NONE | number;

export interface Options {
  initialFocus?: InitialFocus;
  tabbableElements?: string;
}

export const useFocusTrap = <T extends HTMLElement>(
  ref: RefObject<T>,
  isActive: boolean,
  options: Options = {}
) => {
  const { initialFocus = NONE, tabbableElements = "" } = options;

  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const target = ref.current as T;

      lastFocusedElement.current = document.activeElement as HTMLElement;
      lastFocusedElement.current?.blur();

      const focusableElements = target.querySelectorAll(
        TABBABLE_ELEMENTS + tabbableElements
      );
      const numFocusableElements = focusableElements.length;

      if (numFocusableElements === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        numFocusableElements - 1
      ] as HTMLElement;

      if (initialFocus === FIRST) firstElement.focus();
      else if (typeof initialFocus === "number") {
        if (initialFocus < 0)
          console.error(
            `initialFocus cannot be a negative number: you entered ${initialFocus}`
          );
        if (initialFocus >= numFocusableElements)
          console.error(
            `initialFocus cannot be greater than or equal to the total number of focusable elements within the target: you entered ${initialFocus}`
          );

        const elem = focusableElements[initialFocus] as HTMLElement;
        elem.focus();
      } else if (initialFocus === "none") {
        /* empty */
      } else {
        console.error(
          `initialFocus must be either the values 'first', 'none', or a number. You specified initialFocus as ${typeof initialFocus}`
        );
      }

      const handleTab = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          const focusedElement = document.activeElement as HTMLElement;

          const focusEvent = (elem: HTMLElement) => {
            elem.focus();
            return event.preventDefault();
          };

          if (!event.shiftKey && focusedElement === lastElement) {
            focusEvent(firstElement);
          }
          if (event.shiftKey && focusedElement === firstElement) {
            focusEvent(lastElement);
          }
        }
      };

      target.addEventListener("keydown", handleTab);
      return () => {
        lastFocusedElement.current!.focus();
        target.removeEventListener("keydown", handleTab);
      };
    }
  }, [ref.current, isActive]);
};
