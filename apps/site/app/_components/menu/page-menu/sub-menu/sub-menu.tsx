'use client'

import React, { useContext } from 'react'

import { VerticalMenu } from '@condev-ui/ui'

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={open ? 'rotate-180 transition-transform' : 'transition-transform'}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export function SubMenu({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(VerticalMenu.SubMenuContext)
  return (
    <>
      <span className="flex items-center gap-x-2">{children}</span>
      <Chevron open={Boolean(isOpen)} />
    </>
  )
}

