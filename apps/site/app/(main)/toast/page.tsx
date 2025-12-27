'use client'

import React, { useMemo } from 'react'

import { Button, createToastStore, ToastProvider } from '@condev-ui/ui'

export default function Page() {
  const toastStore = useMemo(() => createToastStore(), [])

  const handleShowToast = () => {
    toastStore.add({
      component: <div className="bg-green-500 text-white px-4 py-2 rounded shadow-lg">This is a success message!</div>,
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Toast</h1>
      <p className="text-white/80">Brief notifications.</p>

      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Button onClick={handleShowToast} className="bg-blue-600 px-4 py-2 rounded">
          Show Toast
        </Button>
        <ToastProvider store={toastStore} />
      </div>
    </div>
  )
}
