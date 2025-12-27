import type { ComponentType } from "react";

export const evalCode = (
  code: string,
  dependencies: Record<string, any>
): ComponentType => {
  const args: string[] = [];
  const argv: any[] = [];

  for (const key of Object.keys(dependencies)) {
    args.push(key);
    argv.push(dependencies[key]);
  }

  args.push(code || "");
  return new Function(...args)(...argv);
};
