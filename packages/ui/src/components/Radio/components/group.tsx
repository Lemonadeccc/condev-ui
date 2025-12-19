'use client';

import React from 'react';

import { useMergeValue } from '../../hooks';
import { RadioGroupContext } from '../radioContext';
import type { RadioGroupProps } from '../types';

export function RadioGroup(props: RadioGroupProps) {
  const { name, children, type = 'radio', disabled, readonly, onChange: propsOnchange, ...rest } = props;

  const [value, setValue] = useMergeValue(undefined, {
    defaultValue: props.defaultValue,
    value: props.value,
  });

  const onChangeValue = (v: any, event): void => {
    if (v === value) return;

    if (!('value' in props)) {
      setValue(v);
    }
    propsOnchange?.(v, event);
  };

  return (
    <div role="radiogroup" {...rest}>
      <RadioGroupContext.Provider
        value={{
          onChangeValue,
          type,
          value,
          disabled,
          readonly,
          group: true,
          name,
        }}
      >
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
}
