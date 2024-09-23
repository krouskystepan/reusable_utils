import {
  capitalizeFirstLetter,
  camelToKebabCase,
  kebabToCamelCase,
  capitalizeEachWord,
} from '../utils/string'

describe('capitalizeFirstLetter', () => {
  test('should capitalize the first letter and lowercase the rest', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
    expect(capitalizeFirstLetter('HELLO')).toBe('Hello')
    expect(capitalizeFirstLetter('hELLO')).toBe('Hello')
  })

  test('should handle empty strings', () => {
    expect(capitalizeFirstLetter('')).toBe('')
  })

  test('should handle single character strings', () => {
    expect(capitalizeFirstLetter('a')).toBe('A')
    expect(capitalizeFirstLetter('A')).toBe('A')
  })
})

describe('capitalizeEachWord', () => {
  test('should capitalize the first letter of each word', () => {
    expect(capitalizeEachWord('hello world')).toBe('Hello World')
    expect(capitalizeEachWord('javaScript is fun')).toBe('JavaScript Is Fun')
  })

  test('should handle single word strings', () => {
    expect(capitalizeEachWord('hello')).toBe('Hello')
  })

  test('should handle empty strings', () => {
    expect(capitalizeEachWord('')).toBe('')
  })
})

describe('camelToKebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(camelToKebabCase('camelCase')).toBe('camel-case')
    expect(camelToKebabCase('myVariableName')).toBe('my-variable-name')
  })

  test('should handle strings without uppercase letters', () => {
    expect(camelToKebabCase('myvariablename')).toBe('myvariablename')
  })

  test('should handle empty strings', () => {
    expect(camelToKebabCase('')).toBe('')
  })
})

describe('kebabToCamelCase', () => {
  test('should convert kebab-case to camelCase', () => {
    expect(kebabToCamelCase('kebab-case')).toBe('kebabCase')
    expect(kebabToCamelCase('my-variable-name')).toBe('myVariableName')
  })

  test('should handle strings without dashes', () => {
    expect(kebabToCamelCase('myvariablename')).toBe('myvariablename')
  })

  test('should handle empty strings', () => {
    expect(kebabToCamelCase('')).toBe('')
  })
})
