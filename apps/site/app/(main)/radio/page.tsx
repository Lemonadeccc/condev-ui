'use client'

import React from 'react'

import { Radio } from '@condev-ui/ui'

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Radio</h1>
      <p className="text-white/80">A set of options where only one can be selected.</p>

      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Radio.Group defaultValue="1" className="flex gap-4">
          <Radio.Root value="1">Option 1</Radio.Root>
          <Radio.Root value="2">Option 2</Radio.Root>
          <Radio.Root value="3">Option 3</Radio.Root>
        </Radio.Group>
      </div>
    </div>
  )
}
