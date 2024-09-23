import {
  getUniqueArrayElements,
  flattenArray,
  chunkArray,
  arrayIntersection,
  arrayDifference,
  removeArrayDuplicates,
} from '../utils/array'

describe('getUniqueArrayElements', () => {
  test('should remove duplicates from an array of numbers', () => {
    expect(getUniqueArrayElements([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4])
  })

  test('should remove duplicates from an array of strings', () => {
    expect(getUniqueArrayElements(['a', 'b', 'b', 'c'])).toEqual([
      'a',
      'b',
      'c',
    ])
  })

  test('should return an empty array for an empty input array', () => {
    expect(getUniqueArrayElements([])).toEqual([])
  })

  test('should handle an array with all identical elements', () => {
    expect(getUniqueArrayElements([1, 1, 1, 1])).toEqual([1])
  })
})

describe('flattenArray', () => {
  test('should flatten a nested array', () => {
    expect(flattenArray([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5])
  })

  test('should return an empty array when given an empty array', () => {
    expect(flattenArray([])).toEqual([])
  })

  test('should handle an array with no nested elements', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('should handle deeply nested arrays', () => {
    expect(flattenArray([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
  })
})

describe('chunkArray', () => {
  test('should split an array into chunks of specified size', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test('should handle a chunk size greater than the array length', () => {
    expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  test('should return an empty array when given an empty array', () => {
    expect(chunkArray([], 2)).toEqual([])
  })

  test('should handle chunk size of 1', () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]])
  })
})

describe('arrayIntersection', () => {
  it('should return common elements in two arrays', () => {
    expect(arrayIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
  })

  it('should return an empty array if no common elements', () => {
    expect(arrayIntersection([1, 2, 3], [4, 5, 6])).toEqual([])
  })

  it('should return an empty array if either array is empty', () => {
    expect(arrayIntersection([], [4, 5, 6])).toEqual([])
  })
})

describe('removeArrayDuplicates', () => {
  it('should remove duplicate elements from an array', () => {
    expect(removeArrayDuplicates([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
  })

  it('should return the same array if no duplicates are present', () => {
    expect(removeArrayDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  it('should return an empty array if input is empty', () => {
    expect(removeArrayDuplicates([])).toEqual([])
  })
})

describe('arrayDifference', () => {
  it('should return elements in the first array not in the second', () => {
    expect(arrayDifference([1, 2, 3], [2, 3, 4])).toEqual([1])
  })

  it('should return the first array if no elements are in the second array', () => {
    expect(arrayDifference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3])
  })

  it('should return an empty array if both arrays are empty', () => {
    expect(arrayDifference([], [])).toEqual([])
  })
})
