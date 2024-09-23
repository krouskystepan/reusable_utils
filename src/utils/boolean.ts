/**
 * Checks if a given object, array, or string is empty or undefined.
 *
 * @param value - The value to check.
 * @returns True if the value is empty, false otherwise.
 *
 * @example
 * isEmpty([]); // returns true (empty array)
 * isEmpty({}); // returns true (empty object)
 * isEmpty(''); // returns true (empty string)
 * isEmpty(undefined); // returns true (undefined)
 */
export const isEmpty = (value: any): boolean => {
  return (
    value === undefined || // Check for undefined
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' &&
      (value === null || Object.keys(value).length === 0)) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}

/**
 * Checks if a given date falls on a weekend (Saturday or Sunday).
 *
 * @param date - The date to check.
 * @returns True if the date is a Saturday or Sunday, false otherwise.
 *
 * @example
 * isWeekend(new Date('2024-01-06')) // returns true (Saturday)
 * isWeekend(new Date('2024-01-03')) // returns false (Wednesday)
 */
export const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}

/**
 * Checks if a given string is a palindrome.
 *
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 *
 * @example
 * isPalindrome('racecar'); // returns true
 * isPalindrome('hello'); // returns false
 */
export const isPalindrome = (str: string): boolean => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  return cleaned === cleaned.split('').reverse().join('')
}
