import React, { useCallback, useRef } from 'react';

import { CdButton, type CdButtonProps } from '@/app/(main)/button/tailwind-button/';

import { Ripple } from './ripple';
import { useRipple } from './use-ripple';

interface RippleButtonProps extends CdButtonProps {
  disableRipple?: boolean;
  children?: React.ReactNode;
}

export function RippleButton(props: RippleButtonProps) {
  const { disableRipple = false, disabled, loading, children, ...rest } = props;
  const domRef = useRef<HTMLButtonElement>(null);
  const { ripples, onClear, onClick } = useRipple();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (disableRipple || disabled || loading) return;
      if (domRef.current) onClick(e);
    },
    [disableRipple, disabled, loading, onClick],
  );

  return (
    <div className="inline-flex relative overflow-hidden w-fit">
      <CdButton onClick={handleClick as any} ref={domRef} status="success" disabled={disabled} loading={loading} {...rest}>
        {children}
      </CdButton>
      {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
    </div>
  );
}
