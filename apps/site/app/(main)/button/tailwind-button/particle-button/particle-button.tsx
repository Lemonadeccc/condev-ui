import React, { useCallback, useRef } from 'react';

import { CdButton, type CdButtonProps } from '@/app/(main)/button/tailwind-button'

import { Particle } from './particle';
import { useParticle } from './use-particle';

interface ParticleButtonProps extends CdButtonProps {
  disableParticle?: boolean;
  children?: React.ReactNode;
}

export function ParticleButton(props: ParticleButtonProps) {
  const { disableParticle = false, disabled, loading, children, ...rest } = props;
  const domRef = useRef<HTMLButtonElement>(null);
  const { particles, onClear, onClick } = useParticle();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (disableParticle || disabled || loading) return;
      if (domRef.current) onClick(e);
    },
    [disableParticle, disabled, loading, onClick],
  );

  return (
    <div className="inline-flex relative w-fit">
      <CdButton onClick={handleClick as any} ref={domRef} status="success" disabled={disabled} loading={loading} {...rest}>
        {children}
      </CdButton>
      {!disableParticle && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <Particle particles={particles} onClear={onClear} />
        </div>
      )}
    </div>
  );
}
