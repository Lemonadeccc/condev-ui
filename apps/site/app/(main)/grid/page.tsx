'use client'

import React from 'react'

import { Grid } from '@condev-ui/ui'

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Grid</h1>
      <p className="text-white/80">A responsive grid layout component.</p>

      <div className="p-8 border border-white/10 rounded-lg bg-white/5">
        <Grid columns={3} gap="20px">
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">1</div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">2</div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">3</div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">4</div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">5</div>
          <div className="h-20 bg-blue-500 rounded flex items-center justify-center">6</div>
        </Grid>
      </div>
    </div>
  )
}
