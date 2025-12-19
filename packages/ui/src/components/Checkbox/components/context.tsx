'use client'

import { createContext } from 'react'

export interface CheckboxContextValue {
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}

export const CheckboxContext = createContext<CheckboxContextValue>({
  checked: false
})