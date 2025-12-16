"use client"

import React, { forwardRef, MouseEventHandler,PropsWithChildren } from 'react';

import type { ButtonProps } from './types'

function _Button(props: PropsWithChildren<ButtonProps>, ref: React.Ref<HTMLButtonElement> | undefined) {
  const { children, htmlType = 'button', disabled, loading, onClick, ...restProps } = props;
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
    if (loading || disabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event)
  }

  return (
    <button {...restProps} ref={ref} type={htmlType} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}

const ForwardRefButton = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(_Button)

export const Button = ForwardRefButton as typeof ForwardRefButton
