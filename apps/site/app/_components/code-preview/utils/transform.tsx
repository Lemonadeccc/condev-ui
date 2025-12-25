import RemoveImports from 'babel-plugin-transform-remove-imports'

import { transform } from '@babel/standalone'

export function babelTransform(input: string) {
  const { code } = transform(input, {
    presets: ['react'],
    plugins: [[RemoveImports, { removeAll: true }]]
  })
  return code
}
