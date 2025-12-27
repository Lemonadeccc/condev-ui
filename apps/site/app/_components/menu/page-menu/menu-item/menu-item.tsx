'use client'

import React from 'react'

// import { VerticalMenu } from '@condev-ui/ui'
import { cn } from '../../../_utils'

export function MenuItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  // const { level } = useContext(VerticalMenu.SubMenuContext)
  // const safeLevel = typeof level === 'number' ? level : -1

  return (
    <span className={cn('flex items-center', className)}>
      {/* <div style={{ width: `${safeLevel + 2.4}em` }} /> */}
      {children}
    </span>
  )
}

