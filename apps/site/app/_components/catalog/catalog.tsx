'use client'

import React from 'react'

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
    <aside className="sticky top-[72px] hidden xl:flex xl:w-56 shrink-0 h-[calc(100vh-72px)] pt-6">
      <div className="overflow-y-auto pr-2 w-full">{renderLinks(items)}</div>
    </aside>
  )
}
