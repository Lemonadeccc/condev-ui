"use client"

import React, { useMemo } from 'react'

import { Button,createModalStore, ModalProvider } from '@condev-ui/ui'

export default function ModalPage() {
  const modalStore = useMemo(() => createModalStore(), [])

  const handleOpenModal = () => {
    const id = modalStore.add({
      content: (
        <div className="bg-white rounded-lg overflow-hidden shadow-xl min-w-[300px]">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-black">Example Modal</h3>
          </div>
          <div className="p-4 text-black">
            This is a modal content.
          </div>
          <div className="flex justify-end gap-2 p-4 bg-gray-50">
            <Button onClick={() => modalStore.remove(id)}>Close</Button>
          </div>
          <ModalProvider store={modalStore} />
        </div>
      ),
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Modal</h1>
      <p className="text-white/80">Dialogs for alerts, confirmations, or other content.</p>

      <div className="p-8 border border-white/10 rounded-lg flex gap-4 items-center justify-center bg-white/5">
        <Button onClick={handleOpenModal} className="bg-blue-600 px-4 py-2 rounded">
          Open Modal
        </Button>
      </div>
    </div>
  )
}
