'use client'

import { createContext } from 'react'

export interface RadioContextValue {
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

export const RadioContext = createContext<RadioContextValue>({
  checked: false
})