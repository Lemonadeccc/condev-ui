import RemoveImports from 'babel-plugin-transform-remove-imports'

import { transform } from '@babel/standalone'

export function babelTransform(input: string): string {
  const { code } = transform(input, {
    presets: ['react'],
    plugins: [[RemoveImports, { removeAll: true }]]
  })
  if (typeof code !== 'string') {
    throw new Error('Code failed to transform')
  }
  return code
}
