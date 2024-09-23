import { deepCloneObject, mergeObjects } from '../utils/object'

describe('deepCloneObject', () => {
  test('should deep clone an object', () => {
    const obj = { a: 1, b: { c: 2 } }
    const cloned = deepCloneObject(obj)
    expect(cloned).toEqual(obj)
    expect(cloned).not.toBe(obj)
    expect(cloned.b).not.toBe(obj.b)
  })

  test('should return null for null input', () => {
    expect(deepCloneObject(null)).toBeNull()
  })

  test('should return undefined for undefined input', () => {
    expect(deepCloneObject(undefined)).toBeUndefined()
  })

  test('should handle arrays', () => {
    const arr = [1, 2, { a: 3 }]
    const clonedArr = deepCloneObject(arr)
    expect(clonedArr).toEqual(arr)
    expect(clonedArr).not.toBe(arr) // Ensure it's a different object
    expect(clonedArr[2]).not.toBe(arr[2]) // Ensure nested object is also a different instance
  })
})

describe('mergeObjects', () => {
  test('should merge two flat objects', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { b: 3, c: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 3, c: 4 })
  })

  test('should merge nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } }
    const obj2 = { b: { d: 3 }, e: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4 })
  })

  test('should overwrite properties in the first object', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 3, b: 4 }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 3, b: 4 })
  })

  test('should handle merging with empty objects', () => {
    const obj1 = { a: 1 }
    const obj2 = {}
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1 })
  })

  test('should handle arrays within objects correctly', () => {
    const obj1 = { a: [1, 2], b: 2 }
    const obj2 = { a: [3, 4] }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: [3, 4], b: 2 })
  })

  test('should deeply merge arrays within objects', () => {
    const obj1 = { a: [1, { b: 2 }] }
    const obj2 = { a: [{ c: 3 }, { d: 4 }] }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: [{ c: 3 }, { d: 4 }] })
  })

  test('should not mutate the original objects', () => {
    const obj1 = { a: 1 }
    const obj2 = { b: 2 }
    const result = mergeObjects(obj1, obj2)
    expect(obj1).toEqual({ a: 1 })
    expect(obj2).toEqual({ b: 2 })
  })

  test('should handle merging with null values', () => {
    const obj1 = { a: 1, b: null }
    const obj2 = { b: { c: 3 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 3 } })
  })

  test('should handle merging with undefined values', () => {
    const obj1 = { a: 1, b: undefined }
    const obj2 = { b: { c: 3 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { c: 3 } })
  })

  test('should merge array contents into the object', () => {
    const obj1 = { a: 1, b: [1, 2] }
    const obj2 = { b: { c: 3 } }
    const result = mergeObjects(obj1, obj2)
    expect(result).toEqual({ a: 1, b: { '0': 1, '1': 2, c: 3 } })
  })
})
