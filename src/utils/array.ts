// Usage: Removes duplicates from an array
// getUniqueArrayElements([1, 2, 2, 3, 4, 4]) becomes [1, 2, 3, 4].
export const getUniqueArrayElements = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr))
}

// Usage: Flattens a nested array
// flattenArray([1, [2, 3], [4, [5]]]) becomes [1, 2, 3, 4, 5].
export const flattenArray = <T>(arr: any[]): T[] => {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  )
}

// Usage: Splits an array into chunks
// chunkArray([1, 2, 3, 4, 5], 2) becomes [[1, 2], [3, 4], [5]].
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
