// Usage: Deep clones an object
// deepCloneObject({ a: 1, b: { c: 2 } }) becomes a new object { a: 1, b: { c: 2 } }.
export const deepCloneObject = <T>(obj: T): T => {
  if (obj === null || obj === undefined) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

// Usage: Merges two objects deeply
// mergeObjects({ a: 1, b: { c: 2 } }, { b: { d: 3 } }) becomes { a: 1, b: { c: 2, d: 3 } }.
export const mergeObjects = <
  T extends Record<string, any>,
  K extends Partial<Record<string, any>>
>(
  obj1: T,
  obj2: K
): T & K => {
  const result = { ...obj1 } as T & K

  for (const key in obj2) {
    if (
      obj2[key] &&
      typeof obj2[key] === 'object' &&
      !Array.isArray(obj2[key])
    ) {
      // Recursively merge objects
      ;(result as Record<string, any>)[key] = mergeObjects(
        (result[key] as Record<string, any>) || {},
        obj2[key] as Record<string, any>
      )
    } else {
      // If the value is an array or any other type, replace the existing value
      ;(result as Record<string, any>)[key] = obj2[key]
    }
  }
  return result
}
