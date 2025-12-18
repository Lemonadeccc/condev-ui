import { useEffect, useRef } from 'react'

import { getAttach } from '../../Portal/utils'
import { resetContainerStyle, setContainerStyle } from '../utils'

export function useOverflowHidden(attach: string, hidden: boolean) {
  const needResetContainerStyle = useRef<boolean>(false)
  const originContainerStyle = useRef<Partial<CSSStyleDeclaration>>({})

  useEffect(() => {
    const container = getAttach(attach)
    if (hidden) {
      setContainerStyle({ needResetContainerStyle, originContainerStyle, container })
    } else {
      resetContainerStyle({ needResetContainerStyle, originContainerStyle, container })
    }

    return () => {
      resetContainerStyle({ needResetContainerStyle, originContainerStyle, container })
    }
  }, [attach, hidden])
}