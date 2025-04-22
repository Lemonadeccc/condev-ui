import { useEffect, useRef, useState } from "react";

export function useCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const sandboxRef = useRef<GlslCanvas | null>(null);
  const [sandboxInstance, setSandboxInstance] = useState<GlslCanvas | null>(
    null
  );

  useEffect(() => {
    if (canvasRef.current && !sandboxRef.current) {
      if (typeof GlslCanvas !== "undefined") {
        const instance = new GlslCanvas(canvasRef.current, {
          backgroundColor: "rgba(0,0,0,0)",
        });
        sandboxRef.current = instance;
        setSandboxInstance(instance);
      }
    }
  }, [canvasRef]);

  return sandboxInstance;
}
