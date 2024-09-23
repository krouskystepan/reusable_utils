/**
 * Deep clones an object.
 *
 * @param obj - The object to clone.
 * @returns A new object that is a deep clone of the original object.
 *
 * @example
 * deepCloneObject({ a: 1, b: { c: 2 } }) // returns a new object { a: 1, b: { c: 2 } }
 */
export const deepCloneObject = <T>(obj: T): T => {
  if (obj === null || obj === undefined) {
    return obj
  }
  return JSON.parse(JSON.stringify(obj))
}

/**
 * Merges two objects deeply.
 *
 * @param obj1 - The first object to merge.
 * @param obj2 - The second object to merge.
 * @returns A new object that combines the properties of both objects.
 *
 * @example
 * deepMergeObjects({ a: 1, b: { c: 2 } }, { b: { d: 3 } }) // returns { a: 1, b: { c: 2, d: 3 } }
 */
export const deepMergeObjects = <
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
      ;(result as Record<string, any>)[key] = deepMergeObjects(
        (result[key] as Record<string, any>) || {},
        obj2[key] as Record<string, any>
      )
    } else {
      // If the value is an array or any other type, add the value
      ;(result as Record<string, any>)[key] = obj2[key]
    }
  }
  return result
}
