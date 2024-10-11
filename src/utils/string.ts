/**
 * Capitalizes the first letter of a string and makes the rest of the string lowercase.
 *
 * @param str - The string to capitalize.
 * @returns A new string with the first letter capitalized and the rest in lowercase.
 *
 * @example
 * capitalizeFirstLetter('EXAMPLE') // 'Example'
 */
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - The string to capitalize.
 * @returns A new string with the first letter of each word capitalized.
 *
 * @example
 * capitalizeEachWord('hello world') // 'Hello World'
 */
export const capitalizeEachWord = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

/**
 * Converts a camelCase string to kebab-case.
 *
 * @param str - The camelCase string to convert.
 * @returns A kebab-case version of the input string.
 *
 * @example
 * camelToKebabCase('camelCase') // 'camel-case'
 */
export const camelToKebabCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Converts a kebab-case string to camelCase.
 *
 * @param str - The kebab-case string to convert.
 * @returns A camelCase version of the input string.
 *
 * @example
 * kebabToCamelCase('kebab-case') // 'kebabCase'
 */
export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase())
}

/**
 * Reverses the characters of a given string.
 *
 * @param value - The string to be reversed.
 * @returns The reversed string.
 *
 * @example
 * reverseString("hello") // returns "olleh"
 */
export const reverseString = (value: string): string => {
  return value.split('').reverse().join('')
}

/**
 * Counts the number of words in a given string.
 *
 * @param value - The string to count words in.
 * @returns The word count.
 *
 * @example
 * countWords("hello world") // returns 2
 */
export const countWords = (value: string): number => {
  const trimmed = value.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}
