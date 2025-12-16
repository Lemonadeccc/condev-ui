import { useEffect, useState } from "react";

import type { StoreInstance, ToastProps } from "../types";

export function useTimer(
  props: ToastProps & {
    store: StoreInstance;
    stackExpanded?: boolean;
    showProgress?: boolean;
  }
) {
  const [spentTime, setSpentTime] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [percent, setPercent] = useState(0);
  const {
    id,
    duration,
    store,
    stackExpanded: forcedHovering,
    showProgress,
  } = props;

  const mergedHovering = forcedHovering || hovering;
  const mergedShowProgress = duration && duration > 0 && showProgress;

  useEffect(() => {
    if (!mergedHovering && duration && duration > 0) {
      const start = Date.now() - spentTime;
      const timeout = setTimeout(() => {
        if (id) {
          store.remove?.(id);
        }
      }, duration * 1000 - spentTime);

      return () => {
        clearTimeout(timeout);
        setSpentTime(Date.now() - start);
      };
    }
  }, [duration, mergedHovering]);

  useEffect(() => {
    if (!mergedHovering && mergedShowProgress) {
      const start = performance.now();
      let animationFrame: number;

      const calculate = () => {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame((timestamp) => {
          const runtime = timestamp + spentTime - start;
          const progress = Math.min(runtime / (duration * 1000), 1);
          setPercent(progress * 100);
          if (progress < 1) {
            calculate();
          }
        });
      };

      calculate();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [duration, spentTime, mergedHovering, mergedShowProgress]);

  const onMouseEnter = () => {
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
  };

  return {
    onMouseEnter,
    onMouseLeave,
    percent,
  };
}
