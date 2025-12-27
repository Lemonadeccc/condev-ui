'use client'

import React from 'react'

export function Code({ children }: { children: React.ReactNode }) {
  return <code className="px-1 py-0.5 rounded bg-white/10 text-white">{children}</code>
}

