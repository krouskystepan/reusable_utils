/**
 * Removes duplicates from an array.
 *
 * @param arr - The input array from which duplicates should be removed.
 * @returns A new array containing only unique elements.
 *
 * @example
 * getUniqueArrayElements([1, 2, 2, 3, 4, 4]) // returns [1, 2, 3, 4]
 */
export const getUniqueArrayElements = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

/**
 * Flattens a nested array into a single array.
 *
 * @param arr - The input nested array to flatten.
 * @returns A new array with all elements from the nested arrays.
 *
 * @example
 * flattenArray([1, [2, 3], [4, [5]]]) // returns [1, 2, 3, 4, 5]
 */
export const flattenArray = <T>(arr: any[]): T[] => {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  )
}

/**
 * Splits an array into chunks of a specified size.
 *
 * @param arr - The input array to be split into chunks.
 * @param size - The size of each chunk.
 * @returns An array containing chunks of the specified size.
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2) // returns [[1, 2], [3, 4], [5]]
 */
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
