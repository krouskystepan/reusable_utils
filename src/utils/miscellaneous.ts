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
 * @example
 * const sum = (a: number, b: number): number => a + b;
 * const debouncedSum = debounce(sum, 100);
 * const runDebounce = async () => {
 *   const result = await debouncedSum(1, 2); // Call the debounced function
 *   console.log(result); // Logs the result of the sum
 * };
 * runDebounce();
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => Promise<ReturnType<T> | undefined>) => {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): Promise<ReturnType<T> | undefined> => {
    clearTimeout(timeoutId)
    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        const result = func(...args)
        resolve(result)
      }, delay)
    })
  }
}
