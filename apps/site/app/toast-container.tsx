"use client";

import { ToastProvider } from '@condev-ui/ui';

import { cn } from '@/app/_components/_utils'

import { toastBottomStackStore, toastBottomStore,toastStore } from './toast-store';

export default function ToastContainer() {
  return (
    <>
      <ToastProvider
        store={toastStore}
        containerProps={{
          className: cn('w-full fixed top-8 flex flex-col items-center pointer-events-none', `z-message`),
        }}
      // stack
      />
      <ToastProvider
        store={toastBottomStackStore}
        containerProps={{
          className: cn('w-full fixed bottom-28 flex flex-col items-end pr-12 pointer-events-none', `z-message`),
        }}
        direction="bottom-to-top"
        stack
      />
      <ToastProvider
        store={toastBottomStore}
        containerProps={{
          className: cn('w-full fixed bottom-12 flex flex-col items-end pr-12 pointer-events-none', `z-message`),
        }}
        direction="bottom-to-top"
      />
    </>
  )
}
