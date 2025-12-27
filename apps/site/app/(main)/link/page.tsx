'use client'

import React from 'react'

import { Link } from '@condev-ui/ui'

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Link</h1>
      <p className="text-white/80">Hyperlinks to other pages or resources.</p>

      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Link href="#" className="text-blue-400 hover:text-blue-300">
          This is a link
        </Link>
      </div>
    </div>
  )
}
