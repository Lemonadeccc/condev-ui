'use client';
import React, { useContext, useRef } from 'react';

import { useMergeValue } from '../../hooks';
import { RadioGroupContext } from '../radioContext';
import type { RadioGroupContextProps, RadioProps } from '../types';
import { getMergeProps } from '../utils';

import { RadioContext } from './context';

export function Radio(props: RadioProps) {
  const context = useContext<RadioGroupContextProps>(RadioGroupContext);
  const mergeProps = getMergeProps({ props, context });
  const { disabled, readonly, children, value, checked: propsChecked, onChange: propsOnChange, ...rest } = mergeProps;

  const inputRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useMergeValue(false, {
    value: propsChecked,
    defaultValue: mergeProps.defaultChecked,
  });

  const onChange = (e) => {
    e.persist();
    e.stopPropagation();

    if (disabled || readonly) return;

    if (context.group) {
      context?.onChangeValue?.(value, e);
    } else if (!('checked' in props) && !checked) {
      setChecked(true);
    }
    if (!checked) {
      propsOnChange?.(true, e);
    }
  };

  const onLabelClick = function (e) {
    if (disabled || readonly) {
      e.preventDefault();
      return;
    }
    rest?.onClick?.(e);
  };

  return (
    <RadioContext.Provider value={{ checked, disabled, readonly }}>
      <label {...rest} onClick={onLabelClick} aria-disabled={!!disabled} aria-readonly={!!readonly} aria-checked={!!checked}>
        <input
          ref={inputRef}
          disabled={!!disabled}
          value={value}
          type="radio"
          checked={!!checked}
          onChange={onChange}
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-readonly={!!readonly}
        />
        {children}
      </label>
    </RadioContext.Provider>
  );
}
