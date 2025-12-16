import type { Variants } from "framer-motion";

import { DIRECTION } from "../contants";
import type { Direction } from "../types";

interface StackVariantsOptions {
  index: number;
  maxVisible: number;
  offset: number;
  expanded: boolean;
}

export const applyStackVariants = (
  options: StackVariantsOptions & { direction: Direction }
): Variants => {
  const { index, maxVisible, offset, expanded, direction } = options;
  const isTopToBottom = direction === DIRECTION.TOP_TO_BOTTOM;
  const cardHeight = 80;
  const getStackTransform = (isExpanded: boolean) => {
    if (isExpanded) {
      const expandedY = isTopToBottom
        ? index * cardHeight
        : -index * cardHeight;
      return {
        y: expandedY,
        scale: 1,
        opacity: 1,
      };
    } else {
      if (index >= maxVisible) {
        const hiddenY = isTopToBottom
          ? (maxVisible - 1) * offset
          : -(maxVisible - 1) * offset;
        return {
          y: hiddenY,
          scale: 0.95 - (maxVisible - 1) * 0.05,
          opacity: 0,
        };
      } else {
        const stackedY = isTopToBottom ? index * offset : -index * offset;
        return {
          y: stackedY,
          scale: 0.95 - index * 0.05,
          opacity: 1 - index * 0.1,
        };
      }
    }
  };

  const getInitialY = () => {
    return isTopToBottom ? -cardHeight : cardHeight;
  };
  const getExitY = () => {
    return isTopToBottom ? -20 : 20;
  };
  return {
    initial: {
      opacity: 0,
      scale: 1,
      y: getInitialY(),
    },
    animate: {
      ...getStackTransform(expanded),
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: getExitY(),
    },
  };
};
