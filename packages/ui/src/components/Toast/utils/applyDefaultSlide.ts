import type { Variants } from "framer-motion";

export const applyDefaultSlide = (): Variants => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
};
