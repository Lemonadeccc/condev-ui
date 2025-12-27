'use client'

import React from 'react'

import { Checkbox } from '@condev-ui/ui'

export default function Page() {
  return (
    <div className="min-w-0 space-y-6 py-4">
      <h1 className="text-4xl font-bold">Checkbox</h1>
      <p className="text-white/80">A control that allows the user to toggle between checked and unchecked states.</p>

      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Checkbox.Root>Accept terms and conditions</Checkbox.Root>
      </div>
    </div>
  )
}
