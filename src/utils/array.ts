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

/**
 * Returns elements that are in the first array but not in the second.
 *
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array of elements that are in arr1 but not in arr2.
 *
 * @example
 * arrayDifference([1, 2, 3], [2, 3, 4]) // returns [1]
 */
export const arrayDifference = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => !arr2.includes(item))
}

/**
 * Returns elements common to both arrays.
 *
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array of elements common to both arr1 and arr2.
 *
 * @example
 * arrayIntersection([1, 2, 3], [2, 3, 4]) // returns [2, 3]
 */
export const arrayIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  return arr1.filter((item) => arr2.includes(item))
}

/**
 * Removes duplicate elements from an array.
 *
 * @param arr - The array to remove duplicates from.
 * @returns A new array with only unique elements.
 *
 * @example
 * removeArrayDuplicates([1, 2, 2, 3, 3, 4]) // returns [1, 2, 3, 4]
 */
export const removeArrayDuplicates = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

/**
 * Randomly shuffles the elements of an array.
 *
 * @param array - The array to shuffle.
 * @returns A new array with the elements shuffled.
 *
 * @example
 * shuffleArray([1, 2, 3, 4, 5]); // returns a shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
