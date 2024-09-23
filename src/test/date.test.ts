import { getDaysBetweenDates, getTimestamp, isWeekend } from '../utils/date'

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

describe('getTimestamp', () => {
  test('should return "x seconds ago" for less than a minute', () => {
    const createdAt = new Date(Date.now() - 30 * 1000)
    expect(getTimestamp(createdAt)).toBe('30 seconds ago')

    const createdAtSingleSecond = new Date(Date.now() - 1 * 1000)
    expect(getTimestamp(createdAtSingleSecond)).toBe('1 second ago')
  })

  test('should return "x minutes ago" for less than an hour', () => {
    const createdAt = new Date(Date.now() - 5 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('5 minutes ago')

    const createdAtSingleMinute = new Date(Date.now() - 1 * 60 * 1000)
    expect(getTimestamp(createdAtSingleMinute)).toBe('1 minute ago')
  })

  test('should return "x hours ago" for less than a day', () => {
    const createdAt = new Date(Date.now() - 3 * 60 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('3 hours ago')

    const createdAtSingleHour = new Date(Date.now() - 1 * 60 * 60 * 1000)
    expect(getTimestamp(createdAtSingleHour)).toBe('1 hour ago')
  })

  test('should return "x days ago" for less than a week', () => {
    const createdAt = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('2 days ago')

    const createdAtSingleDay = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    expect(getTimestamp(createdAtSingleDay)).toBe('1 day ago')
  })

  test('should return "x weeks ago" for less than a month', () => {
    const createdAt = new Date(Date.now() - 3 * 7 * 24 * 60 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('3 weeks ago')

    const createdAtSingleWeek = new Date(
      Date.now() - 1 * 7 * 24 * 60 * 60 * 1000
    )
    expect(getTimestamp(createdAtSingleWeek)).toBe('1 week ago')
  })

  test('should return "x months ago" for less than a year', () => {
    const createdAt = new Date(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('4 months ago')

    const createdAtSingleMonth = new Date(
      Date.now() - 1 * 30 * 24 * 60 * 60 * 1000
    )
    expect(getTimestamp(createdAtSingleMonth)).toBe('1 month ago')
  })

  test('should return "x years ago" for a year or more', () => {
    const createdAt = new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000)
    expect(getTimestamp(createdAt)).toBe('2 years ago')

    const createdAtSingleYear = new Date(
      Date.now() - 1 * 365 * 24 * 60 * 60 * 1000
    )
    expect(getTimestamp(createdAtSingleYear)).toBe('1 year ago')
  })
})

describe('isWeekend', () => {
  it('should return true for Saturday', () => {
    expect(isWeekend(new Date('2024-01-06'))).toBe(true)
  })

  it('should return true for Sunday', () => {
    expect(isWeekend(new Date('2024-01-07'))).toBe(true)
  })

  it('should return false for a weekday', () => {
    expect(isWeekend(new Date('2024-01-03'))).toBe(false)
  })
})
