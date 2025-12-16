import React from "react";

export interface PortalProps {
  attach?: AttachNodeReturnValue;
  children: React.ReactNode;
}

export type AttachNodeReturnValue = HTMLElement | Element | Document | string;
