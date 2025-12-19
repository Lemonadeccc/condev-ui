import React, { useState } from 'react'

import { useMergeValue } from '../../hooks'
import { CheckboxGroupContext } from '../checkboxGroupContext'
import type { CheckboxGroupProps } from '../types'

export function Group(props: CheckboxGroupProps) {
  const { disabled, children, readonly, onChange: propsOnChange, ...rest } = props;

  const [value, setValue] = useMergeValue([], {
    defaultValue: props.defaultValue,
    value: props.value
  })
  const [allOptionValues, setAllOptionValues] = useState([])

  const onChange = function (optionValue, checked: boolean, e: Event) {
    if (!Array.isArray(value)) {
      console.error('CheckboxGroup value must be an array')
      return
    }
    const newVal = value?.slice() || []
    if (checked) {
      newVal.push(optionValue)
    } else {
      newVal.splice(value.indexOf(optionValue), 1)
    }
    setValue(newVal)
    propsOnChange?.(
      newVal.filter((v) => allOptionValues.indexOf(v) > -1), e
    )
  }

  return (
    <div role="checkboxgroup" {...rest}>
      <CheckboxGroupContext.Provider value={{
        isCheckboxGroup: true,
        checkboxGroupValue: value,
        onGroupChange: onChange,
        disabled,
        readonly,
        registerValue: (value) => {
          setAllOptionValues((allOptionValues) => Array.from(new Set([...allOptionValues, value])))
        },
        unRegisterValue: (value) => {
          setAllOptionValues((allOptionValues) => allOptionValues.filter((x) => x !== value))
        },
      }}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  )
}