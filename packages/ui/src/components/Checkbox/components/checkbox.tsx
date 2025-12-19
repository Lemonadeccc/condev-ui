import React, { useContext, useEffect, useRef } from 'react'

import { useMergeValue } from '../../hooks'
import type { CheckboxGroupContextProps } from '../checkboxGroupContext'
import { CheckboxGroupContext } from '../checkboxGroupContext'
import type { CheckboxProps } from '../types'
import { getMergeProps } from '../utils'

import { CheckboxContext } from './context'

export function Checkbox<T extends string | number>(props: CheckboxProps<T>) {
  const context = useContext<CheckboxGroupContextProps>(CheckboxGroupContext)
  const { onGroupChange } = context

  const mergeProps = getMergeProps({ props, context })
  const { disabled, children, readonly, value, checked: propsChecked, onChange: propsOnChange, indeterminate, ...rest } = mergeProps

  const inputRef = useRef<HTMLInputElement>(null)

  const [checked, setChecked] = useMergeValue(false, {
    value: propsChecked,
    defaultValue: mergeProps.defaultChecked
  })

  useEffect(() => {
    context.registerValue(value)
    return () => {
      context.unRegisterValue(value)
    }
  }, [value])

  const onChange = function (e) {
    e.persist();
    e.stopPropagation();

    if (disabled || readonly) return

    if (context.isCheckboxGroup) {
      onGroupChange?.(mergeProps.value, e.target.checked, e)
    } else {
      setChecked(e.target.checked)
    }
    propsOnChange?.(e.target.checked, e)
  }

  const onLabelClick = function (e) {
    if (disabled || readonly) {
      e.preventDefault()
      return
    }
    rest?.onClick?.(e)
  }

  return (
    <CheckboxContext.Provider value={{ checked, disabled, indeterminate, readonly }}>
      <label {...rest} onClick={onLabelClick} aria-disabled={!!disabled} aria-readonly={!!readonly} aria-checked={!!checked} >
        <input
          value={value}
          disabled={!!disabled}
          ref={inputRef}
          checked={!!checked}
          onChange={onChange}
          onClick={e => e.stopPropagation()}
          type="checkbox"
          aria-readonly={!!readonly} />
        {children}
      </label>
    </CheckboxContext.Provider>
  )
}
