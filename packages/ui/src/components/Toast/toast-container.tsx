'use client'

import { type AnimationSequence, motion, useAnimate, usePresence } from "framer-motion";
import React, { cloneElement, useEffect, useRef } from 'react'

import { DIRECTION } from './contants'
import { useTimer } from './hoooks'
import type { Direction, StoreInstance, ToastProps } from './types'
import { applyDefaultSlide, applyStackVariants } from './utils'


export const ToastContainer = (props: ToastProps & {
  store: StoreInstance;
  stack: boolean;
  stackIndex?: number;
  stackMaxVisible?: number;
  stackOffset?: number;
  stackExpanded?: boolean;
  direction?: Direction;
}) => {
  const {
    component, id, stack = false, stackIndex = 0, stackMaxVisible = 3, stackOffset = 8, stackExpanded = false, direction = DIRECTION.TOP_TO_BOTTOM,
  } = props
  const promiseRef = useRef<Promise<void>>(Promise.resolve())
  const isFirstStackMount = useRef(true)
  const isFirstNormalMount = useRef(true)
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence()

  const { onMouseEnter, onMouseLeave, percent } = useTimer(props)

  const shouldShow = !stack || stackIndex < stackMaxVisible

  const variants = stack ? applyStackVariants({ index: stackIndex, maxVisible: stackMaxVisible, offset: stackOffset, expanded: stackExpanded, direction }) : applyDefaultSlide()

  useEffect(() => {
    if (!stack) return
    const isTopToBottom = direction === DIRECTION.TOP_TO_BOTTOM

    if (isPresent && scope.current) {
      const enterAnimation = async () => {
        const sequence: AnimationSequence = [[
          scope.current,
          stackExpanded ? { ...variants.animate, y: isTopToBottom ? stackIndex * scope.current.offsetHeight : -stackIndex * scope.current.offsetHeight } : variants.animate,
          { duration: 0.4 }
        ]]
        if (stackIndex === 0 && isFirstStackMount.current) {
          isFirstStackMount.current = false
          sequence.unshift([scope.current, variants.initial, { duration: 0 }])
        }
        await animate(sequence)
      }
      enterAnimation()
    } else if (!isPresent && scope.current) {
      const exitAnimation = async () => {
        await animate(scope.current, variants.exit, { duration: 0.1 })
        safeToRemove()
      }
      exitAnimation()
    }
  }, [isPresent, scope, stack, stackExpanded, stackIndex])

  useEffect(() => {
    if (stack) return
    if (isPresent && scope.current) {
      const enterAnimation = async () => {
        const sequence: AnimationSequence = [[
          scope.current,
          variants.animate,
          { duration: 0.4 }
        ]]
        if (stackIndex === 0 && isFirstNormalMount.current) {
          isFirstNormalMount.current = false
          sequence.unshift([scope.current, variants.initial, { duration: 0 }])
        }
        await animate(sequence)
      }
      promiseRef.current.then(() => {
        enterAnimation()
      })
    } else if (!isPresent && scope.current) {
      const exitAnimation = async () => {
        await animate(scope.current, variants.exit, { duration: 0.1 })
        safeToRemove()
      }
      promiseRef.current = promiseRef.current.then(() => exitAnimation())
    }
  }, [isPresent, scope, stack, stackExpanded, stackIndex])

  if (!shouldShow && !stackExpanded) {
    return null;
  }

  return (
    <motion.div ref={scope} layout onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ position: stack ? 'absolute' : 'relative', top: 0, zIndex: stack ? stackMaxVisible - stackIndex : 'auto' }}>
      {
        cloneElement(component, {
          toastPercent: percent,
          closeToast: () => {
            if (id) props.store.remove(id)
          }
        })
      }
    </motion.div>
  )
}
