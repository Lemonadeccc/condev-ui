import type { PortalProps } from "../types";

export function getAttach(attach: PortalProps["attach"]): Element {
  if (typeof document === "undefined") {
    throw new Error("getAttach must be called in a browser environment");
  }

  if (!attach) return document.body;

  if (typeof attach === "string") {
    return document.querySelector(attach) ?? document.body;
  }

  if (typeof attach === "object") {
    const maybeNode = attach as unknown as {
      nodeType?: unknown;
      body?: unknown;
    };

    // TODO
    // Cross-iframe / cross-window safe checks (avoid instanceof realm issues).
    if (maybeNode?.nodeType === 1) return attach as Element;
    if (maybeNode?.nodeType === 9) {
      const body = (attach as unknown as { body?: unknown }).body;
      if ((body as { nodeType?: unknown } | undefined)?.nodeType === 1)
        return body as Element;
      return document.body;
    }
  }

  return document.body;
}
