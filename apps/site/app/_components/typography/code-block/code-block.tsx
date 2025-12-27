'use client'

import React from 'react'

type CodeBlockProps = {
  language: string
  code: string
  slot?: React.ReactNode
  className?: string
}

export function CodeBlock({ language, code, slot, className }: CodeBlockProps) {
  return (
    <div className={className}>
      {slot ? <div className="flex items-center border border-white/10 rounded-lg mb-4 p-8">{slot}</div> : null}
      <pre className="w-full overflow-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm">
        <div className="text-white/50 text-xs mb-2">{language}</div>
        <code className="text-white/90 whitespace-pre">{code}</code>
      </pre>
    </div>
  )
}

