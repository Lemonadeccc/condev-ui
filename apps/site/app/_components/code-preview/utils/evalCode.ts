import type { ComponentType, ReactElement } from 'react'

export const evalCode = (
  code: string,
  dependencies: Record<string, unknown>
): ComponentType | ReactElement | null | undefined => {
  const args: string[] = []
  const argv: unknown[] = []

  for (const key of Object.keys(dependencies)) {
    args.push(key)
    argv.push(dependencies[key])
  }

  args.push(code || '')
  return new Function(...args)(...argv) as ComponentType | ReactElement | null | undefined
}
