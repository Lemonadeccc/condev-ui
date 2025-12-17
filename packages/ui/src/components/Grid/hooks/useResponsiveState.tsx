import { useEffect, useMemo, useRef, useState } from 'react'

import { isObject } from '../../utils'
import { responsiveArray } from '../constants'
import { ResponsiveValue, ScreenMap } from '../types'
import ResponsiveObserve from '../utils/responsive-observe'

function isResponsiveValue(val: number | ResponsiveValue): val is ResponsiveValue {
  return isObject(val)
}

export const useResponsiveState = (val: number | ResponsiveValue, defaultValue: number) => {
  const token = useRef<string | null>(null)
  const valRef = useRef(val)
  const [screens, setScreens] = useState<ScreenMap>({})

  useEffect(() => {
    valRef.current = val
  }, [val])

  useEffect(() => {
    token.current = ResponsiveObserve.subscribe((nextScreens) => {
      if (isResponsiveValue(valRef.current)) {
        setScreens(nextScreens)
      }
    })

    return () => {
      if (token.current) {
        ResponsiveObserve.unsubscribe(token.current)
        token.current = null
      }
    }
  }, [])

  const result = useMemo(() => {
    if (!isResponsiveValue(val)) {
      return val
    }

    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint = responsiveArray[i]
      if (!screens[breakpoint]) continue
      const nextValue = val[breakpoint]
      if (nextValue !== undefined) return nextValue
    }

    return defaultValue
  }, [screens, val, defaultValue])
  return result
}
