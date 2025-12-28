'use client'

import { AnimatePresence } from 'framer-motion';
import React, { useState, useSyncExternalStore } from 'react'

import { Portal } from '../Portal';

import { DIRECTION } from './contants'
import { ToastContainer } from './toast-container';
import type { ToastManagerProps } from './types';


const defaultProps = {
  direction: DIRECTION.TOP_TO_BOTTOM,
  duration: 3,
  stack: false,
  stackOffset: 8
}

export function ToastProvider(baseProps: ToastManagerProps) {
  const props = {
    ...defaultProps,
    ...baseProps
  }
  const [isHovering, setIsHovering] = useState(false)

  const state = useSyncExternalStore(props.store.subscribe, props.store.getState, props.store.getState);

  const handleMouseEnter = () => {
    if (props.stack) {
      setIsHovering(true)
    }
  }

  const handleMouseLeave = () => {
    if (props.stack) {
      setIsHovering(false);
    }
  }

  return (
    <Portal attach={props.attach}>
      <div {...props.containerProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatePresence>
          {
            state.map((toast, index) => (
              <ToastContainer
                key={toast.id}
                duration={props.duration}
                {...toast}
                store={props.store}
                stack={props.stack}
                direction={props.direction}
                stackIndex={index}
                stackMaxVisible={props.store.maxCount}
                stackOffset={props.stackOffset}
                stackExpanded={isHovering}
              />
            ))
          }
        </AnimatePresence>
      </div>
    </Portal>
  )

}
