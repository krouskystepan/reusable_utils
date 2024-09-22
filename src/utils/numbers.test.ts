import {
  formatNumberToReadableString,
  parseReadableStringToNumber,
  getRandomNumber,
  formatPhoneNumber,
} from './numbers'

describe('getRandomNumber', () => {
  test('should return a number between min and max inclusive', () => {
    const min = 1
    const max = 10

    const randomNumber = getRandomNumber(min, max)

    expect(randomNumber).toBeGreaterThanOrEqual(min)
    expect(randomNumber).toBeLessThanOrEqual(max)
  })

  test('should return a number when min and max are the same', () => {
    const min = 5
    const max = 5

    expect(getRandomNumber(min, max)).toBe(5)
  })

  test('should handle negative ranges', () => {
    const min = -10
    const max = -1

    const randomNumber = getRandomNumber(min, max)

    expect(randomNumber).toBeGreaterThanOrEqual(min)
    expect(randomNumber).toBeLessThanOrEqual(max)
  })

  test('should handle zero range', () => {
    const min = 0
    const max = 0

    expect(getRandomNumber(min, max)).toBe(0)
  })
})

describe('fotmatNumberToReadableString', () => {
  it('should format numbers in thousands correctly', () => {
    expect(formatNumberToReadableString(1000)).toBe('1.00k')
    expect(formatNumberToReadableString(1500)).toBe('1.50k')
  })

  it('should format numbers in millions correctly', () => {
    expect(formatNumberToReadableString(1_000_000)).toBe('1.00M')
    expect(formatNumberToReadableString(2_500_000)).toBe('2.50M')
  })

  it('should return the original number as a string if less than 1000', () => {
    expect(formatNumberToReadableString(500)).toBe('500')
  })
})

describe('parseReadableStringToNumber', () => {
  test('should parse string with M suffix correctly', () => {
    expect(parseReadableStringToNumber('2.5M')).toBe(2500000)
    expect(parseReadableStringToNumber('1M')).toBe(1000000)
    expect(parseReadableStringToNumber('0.5M')).toBe(500000)
  })

  test('should parse string with K suffix correctly', () => {
    expect(parseReadableStringToNumber('2.5K')).toBe(2500)
    expect(parseReadableStringToNumber('1K')).toBe(1000)
    expect(parseReadableStringToNumber('0.1K')).toBe(100)
  })

  test('should parse numeric strings without suffix correctly', () => {
    expect(parseReadableStringToNumber('500')).toBe(500)
    expect(parseReadableStringToNumber('1000')).toBe(1000)
    expect(parseReadableStringToNumber('0')).toBe(0)
  })

  test('should handle lowercase suffixes correctly', () => {
    expect(parseReadableStringToNumber('2.5k')).toBe(2500)
    expect(parseReadableStringToNumber('1m')).toBe(1000000)
  })

  test('should handle invalid inputs gracefully', () => {
    expect(parseReadableStringToNumber('abc')).toBeNaN()
    expect(parseReadableStringToNumber('')).toBeNaN()
  })
})

describe('formatPhoneNumber', () => {
  test('formats phone number without country code', () => {
    expect(formatPhoneNumber(777333111)).toBe('777 333 111')
  })

  test('formats phone number with country code +420', () => {
    expect(formatPhoneNumber(777333111, '+420')).toBe('+420 777 333 111')
  })

  test('formats phone number with country code +1', () => {
    expect(formatPhoneNumber(1234567890, '+1')).toBe('+1 123 456 7890')
  })
})
