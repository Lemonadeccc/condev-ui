export function isPrefix<T>(prefix: T[], full: T[]): boolean {
  if (!Array.isArray(prefix) || !Array.isArray(full)) return false;
  if (prefix.length > full.length) return false;
  for (let i = 0; i < prefix.length; i += 1) {
    if (prefix[i] !== full[i]) return false;
  }
  return true;
}

