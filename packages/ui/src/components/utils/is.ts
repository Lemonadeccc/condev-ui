const getType = (obj: unknown) => Object.prototype.toString.call(obj).slice(8, -1);

export function isArray(obj: unknown): obj is unknown[] {
  return getType(obj) === "Array";
}

export function isObject(obj: unknown): obj is Record<string, unknown> {
  return getType(obj) === "Object";
}

export function isString(obj: unknown): obj is string {
  return getType(obj) === "String";
}

export function isNumber(obj: unknown): obj is number {
  return getType(obj) === "Number" && obj === obj;
}

export function isRegExp(obj: unknown): obj is RegExp {
  return getType(obj) === "RegExp";
}

export function isFile(obj: unknown): obj is File {
  return getType(obj) === "File";
}

export function isBlob(obj: unknown): obj is Blob {
  return getType(obj) === "Blob";
}

export function isUndefined(obj: unknown): obj is undefined {
  return obj === undefined;
}

export function isNull(obj: unknown): obj is null {
  return obj === null;
}

export const isNullOrUndefined = (obj: unknown): boolean => {
  return obj === null || obj === undefined;
};

export function isFunction(obj: unknown): obj is (...args: unknown[]) => unknown {
  return typeof obj === "function";
}

export function isEmptyObject(obj: unknown): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export function isEmptyArray(array: unknown): boolean {
  return isArray(array) && array.length === 0;
}

export function isWindow(el: unknown): el is Window {
  return el !== null && typeof el === "object" && (el as Window).window === el;
}

export function isPlainObject(obj: unknown): obj is Record<string, unknown> {
  if (typeof obj !== "object" || obj === null) return false;

  const proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;

  const ctor = Object.hasOwn(proto, "constructor") && proto.constructor;
  return typeof ctor === "function" && ctor === Object;
}