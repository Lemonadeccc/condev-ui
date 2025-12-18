import { AnimatePresence } from 'framer-motion'
import React, { useSyncExternalStore } from 'react'

import type { ModalStoreInstance } from '../store'

import { Modal } from './modal'

export function ModalProvider({
  store, maskCls, maskStyle, focusLock
}: {
  store: ModalStoreInstance,
  maskCls?: string,
  maskStyle?: React.CSSProperties,
  focusLock?: boolean,
}) {
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  return (
    <AnimatePresence>
      {
        state?.map((modalProps, index) => (
          <Modal {...modalProps}
            maskCls={maskCls === undefined ? modalProps.maskCls : maskCls}
            maskStyle={maskStyle === undefined ? modalProps.maskStyle : maskStyle}
            focusLock={focusLock === undefined ? modalProps.focusLock : focusLock}
            key={modalProps.id}
            index={index}
          />
        ))
      }
    </AnimatePresence>
  )
}
