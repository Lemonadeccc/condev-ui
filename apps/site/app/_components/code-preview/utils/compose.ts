export function compose<T>(...functions: ((...args: T[]) => T)[]) {
  return functions.reduce(
    (acc, currentFn) =>
      (...args: T[]) =>
        acc(currentFn(...args))
  );
}
