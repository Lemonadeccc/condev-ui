'use client';

import React, { forwardRef,useContext } from 'react';

import { cn, hasIntersection } from '../utils';

import { MenuContext } from './menu-context';
import { SubMenuContext } from './sub-menu-context';
import type { MenuItemProps } from './types';

export const VerticalMenuItem = forwardRef<HTMLDivElement, React.PropsWithChildren<MenuItemProps>>((props, ref) => {
  const { children, disabled, value, className, selectedClassName = '', notSelectedClassName = '', onClick, ...restProps } = props;

  const { onClickMenuItemContext, finalSelectedValuePath } = useContext(MenuContext);
  const { keyPath } = useContext(SubMenuContext);
  const nextKeyPath = keyPath ? [...keyPath, value] : [value];

  const isSelected = hasIntersection(nextKeyPath, finalSelectedValuePath);

  const mergeOnClick = (e) => {
    e.stopPropagation();
    onClick?.(e);
    onClickMenuItemContext(e, { disabled, value, keyPath: nextKeyPath });
  };

  return (
    <div ref={ref} {...restProps} onClick={mergeOnClick} className={cn(isSelected ? selectedClassName : notSelectedClassName, className)}>
      {children}
    </div>
  );
});
