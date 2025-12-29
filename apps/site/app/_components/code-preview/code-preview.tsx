'use client'

import { LayoutGroup } from 'framer-motion'
import React from 'react'

import * as Cd from '@condev-ui/ui'

import * as CdComponent from '@/app/_components/ui-lib';
import * as CdButtons from '@/app/(main)/button/tailwind-button';
import { toastBottomStackStore, toastBottomStore, toastStore } from '@/app/toast-store'

import { cn } from '../_utils';

import { CodeTab, ErrorMessage } from './components';
import { useCodePreview } from './hooks'
import type { CodePreviewProps } from './interface'

const CdUI = {
  ...Cd,
  cn,
  ...CdButtons,
  ...CdComponent,
  toastStore,
  toastBottomStore,
  toastBottomStackStore,
  ...React,
  LayoutGroup
}

export function CodePreview(props: CodePreviewProps) {
  const { code: _Code = '', dependencies = CdUI, demoContainerStyle, cssCode, id } = props

  const { state, onChange } = useCodePreview({ code: _Code, dependencies, ...props })
  const Element = state.element

  return (
    <>
      <div className={cn('relative p-12 overflow-hidden min-w-25 border border-solid border-color rounded-md', {
        [`z-2 mb-0 text-red-600`]: !!state.error
      })}
        style={demoContainerStyle}
        id={id}
      >
        <>
          <ErrorMessage message={state.error} />
          <div>
            <>{Element ? <Element /> : null}</>
          </div>
        </>
      </div>
      <CodeTab code={_Code} onChange={onChange} cssCode={cssCode} />
    </>
  )
}