"use client"

import React from 'react'

import { Button } from '@condev-ui/ui'

export default function ButtonPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Button</h1>
      <p className="text-white/80">Trigger an action or event, such as submitting a form or opening a dialog.</p>
      
      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Default Button
        </Button>
      </div>
    </div>
  )
}
