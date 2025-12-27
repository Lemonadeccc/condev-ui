'use client'

import React from 'react'

export function Avatar({
  text,
  des,
  children,
}: {
  text: string
  des: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-x-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 my-6">
      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white">
        {children ?? <span className="text-sm font-semibold">{text.slice(0, 1)}</span>}
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-medium">{text}</div>
        <div className="text-xs text-white/60">{des}</div>
      </div>
    </div>
  )
}

