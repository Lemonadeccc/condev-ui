import React, { forwardRef,FunctionComponent, ReactNode } from 'react'

import { Icon } from './icon'
import { IconProps } from './types'

const customCache = new Set<string>()

export function createFromIconfont(scriptUrl: string): FunctionComponent<IconProps> {
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    typeof scriptUrl === 'string' &&
    scriptUrl.length &&
    !customCache.has(scriptUrl)
  ) {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  const Iconfont = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { type, ...rest } = props;

    let content: ReactNode;
    if (type) {
      content = <use xlinkHref={`#${type}`} />;
    }

    return (
      <Icon {...rest} ref={ref}>
        {content}
      </Icon>
    );
  });

  return Iconfont;
}