"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import type { PortalProps } from './types'
import { getAttach } from "./utils"

export const Portal = (props: PortalProps) => {
  const { attach, children } = props
  const [container, setContainer] = useState<Element | null>(null);
  useEffect(() => {
    // only client
    const parentElement = getAttach(attach);
    setContainer(parentElement);
  }, [attach])
  // no render in server
  if (!container) return null;
  return createPortal(children, container)
}