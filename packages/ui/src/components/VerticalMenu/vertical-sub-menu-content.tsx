'use client';

import React, { forwardRef, useContext } from 'react';

import { cn } from '../utils';

import { SubMenuContext } from './sub-menu-context';
import type { SubMenuContentProps } from './types';

export const VerticalSubMenuContent = forwardRef<HTMLDivElement, React.PropsWithChildren<SubMenuContentProps>>((props, ref) => {
  const { children, className, selectedClassName = '', notSelectedClassName = '', ...restProps } = props;
  const { isSelected } = useContext(SubMenuContext);
  return (
    <div ref={ref} {...restProps} className={cn(isSelected ? selectedClassName : notSelectedClassName, className)}>
      {children}
    </div>
  );
});
