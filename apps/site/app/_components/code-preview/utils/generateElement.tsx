import React, { type ComponentType } from 'react'

import type { CodePreviewProps } from '../interface'

import { compose } from './compose'
import errorBoundary from './errorBoundary'
import { evalCode } from './evalCode'
import { babelTransform } from './transform'

interface executeCodeProps {
  input: string,
  dependencies: CodePreviewProps['dependencies'],
  errorCallback: (error: Error) => void
}

const wrapReturn = (code: string) => `${code}; return App`
const replaceUseStrict = (code: string) => code.replace("'use strict'", '')
const trimCode = (code: string) => code.trim().replace(/;$/, '')

export const generateElement = ({ input, dependencies, errorCallback }: executeCodeProps): ComponentType => {
  const transformed = compose<string>(wrapReturn, replaceUseStrict, trimCode, babelTransform, trimCode)(input);
  return errorBoundary(evalCode(transformed, { React, ...dependencies }), errorCallback);
};
