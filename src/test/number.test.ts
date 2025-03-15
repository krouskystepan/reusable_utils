import {
  parseReadableStringToNumber,
  getRandomNumber,
  clamp,
  parseTimeToSeconds,
  getDaysBetweenDates,
} from '../utils/number'

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

describe('parseReadableStringToNumber', () => {
  test('should parse string with M suffix correctly', () => {
    expect(parseReadableStringToNumber('2.5M')).toBe(2500000)
    expect(parseReadableStringToNumber('1M')).toBe(1000000)
    expect(parseReadableStringToNumber('0.5M')).toBe(500000)
  })

  test('should parse negative string with M suffix correctly', () => {
    expect(parseReadableStringToNumber('-2.5M')).toBe(-2500000)
    expect(parseReadableStringToNumber('-1M')).toBe(-1000000)
    expect(parseReadableStringToNumber('-0.5M')).toBe(-500000)
  })

  test('should parse string with K suffix correctly', () => {
    expect(parseReadableStringToNumber('2.5K')).toBe(2500)
    expect(parseReadableStringToNumber('1K')).toBe(1000)
    expect(parseReadableStringToNumber('0.1K')).toBe(100)
  })

  test('should parse negative string with K suffix correctly', () => {
    expect(parseReadableStringToNumber('-2.5K')).toBe(-2500)
    expect(parseReadableStringToNumber('-1K')).toBe(-1000)
    expect(parseReadableStringToNumber('-0.1K')).toBe(-100)
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
    expect(parseReadableStringToNumber('10k jjj')).toBeNaN()
    expect(parseReadableStringToNumber('10km')).toBeNaN()
    expect(parseReadableStringToNumber('10km m')).toBeNaN()
    expect(parseReadableStringToNumber('')).toBeNaN()
  })
})

describe('clamp', () => {
  test('should return the number when within the range', () => {
    expect(clamp(5, 1, 10)).toBe(5)
    expect(clamp(1, 1, 10)).toBe(1)
    expect(clamp(10, 1, 10)).toBe(10)
  })

  test('should return the minimum when below the range', () => {
    expect(clamp(0, 1, 10)).toBe(1)
    expect(clamp(-5, 1, 10)).toBe(1)
  })

  test('should return the maximum when above the range', () => {
    expect(clamp(15, 1, 10)).toBe(10)
    expect(clamp(20, 1, 10)).toBe(10)
  })

  test('should return the min value when num equals min', () => {
    expect(clamp(1, 1, 10)).toBe(1)
  })

  test('should return the max value when num equals max', () => {
    expect(clamp(10, 1, 10)).toBe(10)
  })

  test('should handle negative ranges correctly', () => {
    expect(clamp(-5, -10, -1)).toBe(-5)
    expect(clamp(-15, -10, -1)).toBe(-10)
    expect(clamp(0, -10, -1)).toBe(-1)
  })
})

describe('parseTimeToSeconds', () => {
  it('should parse seconds correctly', () => {
    expect(parseTimeToSeconds('5s')).toBe(5)
  })

  it('should parse minutes correctly', () => {
    expect(parseTimeToSeconds('2m')).toBe(120)
  })

  it('should parse hours correctly', () => {
    expect(parseTimeToSeconds('1h')).toBe(3600)
  })

  it('should parse days correctly', () => {
    expect(parseTimeToSeconds('1d')).toBe(86400)
  })

  it('should handle mixed time formats', () => {
    expect(parseTimeToSeconds('1h 30m')).toBe(5400)
    expect(parseTimeToSeconds('2d 4h 30m')).toBe(189000)
  })

  it('should throw an error for invalid formats', () => {
    expect(() => parseTimeToSeconds('invalid')).toThrow(
      'Invalid format. Use a format like "5s", "2m", "7h", or "90d".'
    )
  })

  it('should throw an error for unknown time units', () => {
    expect(() => parseTimeToSeconds('10x')).toThrow(
      'Invalid format. Use a format like "5s", "2m", "7h", or "90d".'
    )
  })
})

describe('getDaysBetweenDates', () => {
  test('should return 0 for same dates', () => {
    expect(
      getDaysBetweenDates(new Date('2024-09-23'), new Date('2024-09-23'))
    ).toBe(0)
  })

  test('should return correct days between dates', () => {
    expect(
      getDaysBetweenDates(new Date('2024-09-01'), new Date('2024-09-23'))
    ).toBe(22)
  })
})
