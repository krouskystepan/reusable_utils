import { isEmpty, isPalindrome, isWeekend } from '../utils/boolean'

describe('isEmpty', () => {
  it('should return true for empty arrays', () => {
    expect(isEmpty([])).toBe(true)
  })

  it('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('should return true for empty strings', () => {
    expect(isEmpty('')).toBe(true)
  })

  it('should return true for null', () => {
    expect(isEmpty(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true)
  })

  it('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  it('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })

  it('should return false for non-empty strings', () => {
    expect(isEmpty('Hello')).toBe(false)
  })

  it('should return false for numbers', () => {
    expect(isEmpty(0)).toBe(false)
  })

  it('should return false for booleans', () => {
    expect(isEmpty(true)).toBe(false)
  })
})

describe('isWeekend', () => {
  it('should return true for Saturday', () => {
    expect(isWeekend(new Date('2024-01-06'))).toBe(true)
  })

  it('should return true for Sunday', () => {
    expect(isWeekend(new Date('2024-01-07'))).toBe(true)
  })

  it('should handle edge case of a leap year', () => {
    expect(isWeekend(new Date('2024-02-29'))).toBe(false)
  })
})

describe('isPalindrome', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true)
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
  })

  it('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false)
    expect(isPalindrome('world')).toBe(false)
  })

  it('should return true for single character strings', () => {
    expect(isPalindrome('a')).toBe(true)
    expect(isPalindrome('A')).toBe(true)
  })

  it('should return true for empty strings', () => {
    expect(isPalindrome('')).toBe(true)
  })

  it('should ignore punctuation and spaces', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })
})
