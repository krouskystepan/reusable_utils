// Usage: Capitalizes the first letter of a string and makes the rest of the string lowercase.
// capitalizeFirstLetter('EXAMPLE') becomes 'Example'.
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Usage: Capitalizes the first letter of each word in a string
// capitalizeEachWord('hello world') becomes 'Hello World'.
export const capitalizeEachWord = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

// Usage: Converts a camelCase string to kebab-case
// camelToKebabCase('camelCase') becomes 'camel-case'.
export const camelToKebabCase = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Usage: Converts a kebab-case string to camelCase
// kebabToCamelCase('kebab-case') becomes 'kebabCase'.
export const kebabToCamelCase = (str: string): string => {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase())
}
