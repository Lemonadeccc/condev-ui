'use client'

import React from 'react'

import { VerticalMenu } from '@condev-ui/ui'

import { cn } from '../../_utils'

export interface BasicMenuProps {
  subMenuClassName?: string
  data: {
    value?: string
    content: React.ReactNode
    onClick?: () => void
    defaultCollapsed?: boolean
    items?: Array<{
      value?: string
      content: React.ReactNode | BasicMenuProps['data']
      onClick?: () => void
    }>
  }[]
}

export function renderBasicMenu({ data = [], subMenuClassName }: BasicMenuProps): [React.JSX.Element[], string[]] {
  const allOpenValues: string[] = []

  function renderMenu(items: BasicMenuProps['data'], level = 0) {
    return items.flatMap((item, subIndex) => {
      const fallbackValue = `${level}-${subIndex}`
      const value = item.value || fallbackValue
      const hasSubMenu = Array.isArray(item.items) && item.items.length > 0

      if (hasSubMenu && !item.defaultCollapsed) {
        allOpenValues.push(value)
      }

      if (!hasSubMenu) {
        return (
          <VerticalMenu.MenuItem
            key={fallbackValue}
            value={value}
            className="w-full cursor-pointer px-6 py-3 hover:bg-white/10 text-sm tracking-widest uppercase transition-colors"
            selectedClassName="bg-white/10 text-white font-semibold"
            notSelectedClassName="text-white/60"
            onClick={item.onClick}
          >
            {item.content}
          </VerticalMenu.MenuItem>
        )
      }

      return (
        <VerticalMenu.Submenu key={fallbackValue} value={value}>
          <VerticalMenu.SubMenuContent
            className={cn(
              'w-full px-6 py-3 cursor-pointer hover:bg-white/10 flex justify-between items-center text-sm tracking-widest uppercase transition-colors',
              subMenuClassName,
            )}
            selectedClassName="text-white font-semibold"
            notSelectedClassName="text-white/60"
            onClick={item.onClick}
          >
            {item.content}
          </VerticalMenu.SubMenuContent>
          <VerticalMenu.SubMenuList className="bg-white/5">
            {item.items?.flatMap((subItem, index) => {
              const childFallbackValue = `${level}-${subIndex}-${index}`
              const childValue = subItem.value || childFallbackValue

              if (Array.isArray(subItem.content)) {
                return renderMenu(subItem.content, level + 1)
              }

              return (
                <VerticalMenu.MenuItem
                  key={childFallbackValue}
                  value={childValue}
                  className="w-full cursor-pointer pl-10 pr-6 py-2 hover:bg-white/10 text-sm transition-colors"
                  selectedClassName="text-white bg-white/10 border-r-2 border-white"
                  notSelectedClassName="text-white/60"
                  onClick={subItem.onClick}
                >
                  {subItem.content}
                </VerticalMenu.MenuItem>
              )
            })}
          </VerticalMenu.SubMenuList>
        </VerticalMenu.Submenu>
      )
    })
  }

  return [renderMenu(data), allOpenValues]
}

