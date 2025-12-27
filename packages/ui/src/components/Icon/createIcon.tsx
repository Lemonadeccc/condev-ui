import React, { forwardRef } from 'react'

import { Icon } from './icon'
import type { IconProps } from './types'

interface CreateIconOptions {
  paths: React.ReactNode;
  iconProps?: IconProps;
  viewBox?: string
}

export function createIcon(options: CreateIconOptions) {
  const { paths, iconProps = {}, viewBox = '0 0 48 48' } = options;

  return forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon {...iconProps} {...props} ref={ref} viewBox={viewBox}>
      {paths}
    </Icon>
  ))
}