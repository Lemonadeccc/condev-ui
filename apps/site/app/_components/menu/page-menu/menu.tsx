'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

import { VerticalMenu } from '@condev-ui/ui'

import { type BasicMenuProps, renderBasicMenu } from '../basic-menu'

function findSelectedValuePath(data: BasicMenuProps['data'], pathname: string): string[] {
  const walk = (items: BasicMenuProps['data'], ancestors: string[]): string[] | null => {
    for (const item of items) {
      const nextAncestors = item.value ? [...ancestors, item.value] : ancestors

      if (item.value === pathname) return nextAncestors

      if (item.items?.length) {
        for (const child of item.items) {
          if (Array.isArray(child.content)) {
            const found = walk(child.content, nextAncestors)
            if (found) return found
            continue
          }

          if (child.value === pathname) {
            return child.value ? [...nextAncestors, child.value] : nextAncestors
          }
        }
      }
    }
    return null
  }

  return walk(data, []) || []
}

export function Menu({ data, subMenuClassName }: BasicMenuProps) {
  const pathname = usePathname()
  const [menu, allOpenValues] = useMemo(() => renderBasicMenu({ data, subMenuClassName }), [data, subMenuClassName])
  const [currentSelectedValue, setCurrentSelectedValue] = useState<string[]>([])

  useEffect(() => {
    setCurrentSelectedValue(findSelectedValuePath(data, pathname))
  }, [data, pathname])

  return (
    <VerticalMenu.Root defaultOpenedSubMenuValues={allOpenValues} selectedValuePath={currentSelectedValue} className="text-[15px]">
      {menu}
    </VerticalMenu.Root>
  )
}
