import { isString } from "lodash-es";

class CdUIError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = "CdUIError";
  }
}

export function throwError(scope: string, msg: string) {
  throw new CdUIError(`[${scope}]:${msg}`);
}

export function debugWarn(error: Error): void;
export function debugWarn(scope: string, msg: string): void;
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== "production") {
    const err = isString(scope) ? new CdUIError(`[${scope}]:${msg}`) : scope;
    console.warn(err);
  }
}
