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
const replaceUseStrict = (code: string) =>
  code.replace(/^\s*(?:\/\*[\s\S]*?\*\/\s*|\/\/[^\n]*\n\s*)*(['"])use strict\1;?\s*/, '')
const trimCode = (code: string) => (code ?? '').trim().replace(/;$/, '')

const createThrowingComponent = (error: Error): ComponentType => {
  const Thrower = () => {
    throw error
  }
  return Thrower
}

export const generateElement = ({ input, dependencies, errorCallback }: executeCodeProps): ComponentType => {
  try {
    const transformed = compose<string>(wrapReturn, trimCode, replaceUseStrict, babelTransform, trimCode)(input)
    return errorBoundary(evalCode(transformed, { ...dependencies, React }), errorCallback)
  } catch (error) {
    const normalizedError = error instanceof Error ? error : new Error(String(error))
    return errorBoundary(createThrowingComponent(normalizedError), errorCallback)
  }
};
