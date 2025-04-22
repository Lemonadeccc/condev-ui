import { useEffect, useRef, useState } from "react";

/**
 * 用于初始化和管理给定 canvas 元素的 GlslCanvas 实例的 Hook。
 * @param canvasRef - 指向目标 HTMLCanvasElement 的 React ref 对象。
 * @returns GlslCanvas 实例，如果初始化未完成或失败，则返回 null。
 */
export function useCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) {
  const sandboxRef = useRef<GlslCanvas | null>(null);
  const [sandboxInstance, setSandboxInstance] = useState<GlslCanvas | null>(
    null
  );

  useEffect(() => {
    // 防止重复初始化或在 canvas 不存在时运行
    if (canvasRef.current && !sandboxRef.current) {
      // 确保全局 GlslCanvas 存在后再尝试实例化
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
