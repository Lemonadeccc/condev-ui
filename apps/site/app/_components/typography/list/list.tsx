'use client'

import React from 'react'

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-6 my-6 space-y-2 text-white/90">{children}</ul>
}

export function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal pl-6 my-6 space-y-2 text-white/90">{children}</ol>
}

