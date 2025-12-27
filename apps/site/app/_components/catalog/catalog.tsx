'use client'

import React from 'react'

import { cn } from '../_utils'

export interface NestedAnchorLinkProps {
  level: number
  text: string
  items?: NestedAnchorLinkProps[]
}

function renderLinks(items?: NestedAnchorLinkProps[]) {
  if (!Array.isArray(items)) return null
  return (
    <ul className="pl-0">
      {items.map((item, index) => (
        <li key={`${item.text}-${index}`} className="my-1">
          <a
            href={`#${item.text}`}
            className="block text-sm text-white/60 hover:text-white transition-colors"
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            {item.text}
          </a>
          {renderLinks(item.items)}
        </li>
      ))}
    </ul>
  )
}

export function Catalog({ items }: { items: NestedAnchorLinkProps[] }) {
  return (
    <nav className={cn('w-full')} aria-label="Catalog">
      {renderLinks(items)}
    </nav>
  )
}
