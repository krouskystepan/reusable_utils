/**
 * Delays execution of a function until a specified time has passed since the last invocation.
 *
 * @param func - The function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A debounced function.
 *
 * @example
 * const debouncedLog = debounce(console.log, 200);
 * debouncedLog('Hello!'); // Will log 'Hello!' only after 200 ms if not called again within this time.
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}
