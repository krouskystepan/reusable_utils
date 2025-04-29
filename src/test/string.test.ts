import {
  capitalizeFirstLetter,
  camelToKebabCase,
  kebabToCamelCase,
  capitalizeEachWord,
  reverseString,
  getTimestamp,
  formatNumberToReadableString,
  formatPhoneNumber,
  toCurrency,
  formatElapsedTime,
  formatNumberWithSpaces,
  toOrdinal,
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

describe('reverseString', () => {
  it('should reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh')
  })

  it('should reverse an empty string', () => {
    expect(reverseString('')).toBe('')
  })

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
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

describe('formatNumberToReadableString', () => {
  it('should format numbers in thousands correctly', () => {
    expect(formatNumberToReadableString(1000)).toBe('1k')
    expect(formatNumberToReadableString(1500)).toBe('1.50k')
    expect(formatNumberToReadableString(2000)).toBe('2k')
  })

  it('should format numbers in millions correctly', () => {
    expect(formatNumberToReadableString(1_000_000)).toBe('1M')
    expect(formatNumberToReadableString(2_500_000)).toBe('2.50M')
  })

  it('should return the original number as a string if less than 1000', () => {
    expect(formatNumberToReadableString(500)).toBe('500')
    expect(formatNumberToReadableString(999)).toBe('999')
  })

  it('should handle negative numbers correctly', () => {
    expect(formatNumberToReadableString(-1000)).toBe('-1k')
    expect(formatNumberToReadableString(-1500)).toBe('-1.50k')
    expect(formatNumberToReadableString(-2_500_000)).toBe('-2.50M')
  })

  it('should handle edge cases correctly', () => {
    expect(formatNumberToReadableString(0)).toBe('0')
    expect(formatNumberToReadableString(-999)).toBe('-999')
  })
})

describe('formatNumberWithSpaces', () => {
  test('formats positive numbers correctly with default separator', () => {
    expect(formatNumberWithSpaces(2500000)).toBe('2 500 000')
    expect(formatNumberWithSpaces(1500)).toBe('1 500')
  })

  test('formats negative numbers correctly with default separator', () => {
    expect(formatNumberWithSpaces(-2500000)).toBe('-2 500 000')
    expect(formatNumberWithSpaces(-1500)).toBe('-1 500')
  })

  test('formats numbers with custom separator', () => {
    expect(formatNumberWithSpaces(2500000, '.')).toBe('2.500.000')
    expect(formatNumberWithSpaces(1500, ',')).toBe('1,500')
    expect(formatNumberWithSpaces(-1500, '.')).toBe('-1.500')
  })

  test('formats small numbers correctly', () => {
    expect(formatNumberWithSpaces(999)).toBe('999')
    expect(formatNumberWithSpaces(-999)).toBe('-999')
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

describe('toCurrency', () => {
  it('should format number as USD currency by default', () => {
    expect(toCurrency(1234.56)).toBe('$1,234.56')
  })

  it('should format number as EUR currency', () => {
    expect(toCurrency(1234.56, 'de-DE', 'EUR')).toBe('1.234,56 €')
  })

  it('should format number as JPY currency', () => {
    expect(toCurrency(1234, 'ja-JP', 'JPY')).toBe('￥1,234')
  })

  it('should format number as CZK currency', () => {
    expect(toCurrency(1234, 'cs-CZ', 'CZK')).toBe('1 234,00 Kč')
  })
})

describe('formatElapsedTime', () => {
  it('should return seconds when below 60s', () => {
    expect(formatElapsedTime(new Date(Date.now() - 45 * 1000))).toBe('45s')
  })

  it('should return only minutes when below 1h', () => {
    expect(formatElapsedTime(new Date(Date.now() - 5 * 60 * 1000))).toBe('5m')
  })

  it('should return hours and minutes when below 1 day', () => {
    expect(
      formatElapsedTime(new Date(Date.now() - (3 * 3600 + 15 * 60) * 1000))
    ).toBe('3h 15m')
  })

  it('should return days and hours when below 1 month', () => {
    expect(
      formatElapsedTime(new Date(Date.now() - (5 * 86400 + 12 * 3600) * 1000))
    ).toBe('5d 12h')
  })

  it('should return months and days when below 1 year', () => {
    expect(
      formatElapsedTime(
        new Date(Date.now() - (5 * 30.44 * 86400 + 12 * 86400) * 1000)
      )
    ).toBe('5M 12d')
  })

  it('should return years and months when above 1 year', () => {
    expect(
      formatElapsedTime(
        new Date(Date.now() - (2 * 365.25 * 86400 + 3 * 30.44 * 86400) * 1000)
      )
    ).toBe('2Y 3M')
  })

  it('should allow custom suffixes', () => {
    expect(
      formatElapsedTime(new Date(Date.now() - (3 * 3600 + 15 * 60) * 1000), {
        h: ' hours',
        m: ' minutes',
        s: ' seconds',
      })
    ).toBe('3 hours 15 minutes')
  })
})

describe('toOrdinal', () => {
  it('should return "1st" for 1', () => {
    expect(toOrdinal(1)).toBe('1st')
  })

  it('should return "2nd" for 2', () => {
    expect(toOrdinal(2)).toBe('2nd')
  })

  it('should return "3rd" for 3', () => {
    expect(toOrdinal(3)).toBe('3rd')
  })

  it('should return "4th" for 4', () => {
    expect(toOrdinal(4)).toBe('4th')
  })

  it('should handle teen exceptions correctly (11th, 12th, 13th)', () => {
    expect(toOrdinal(11)).toBe('11th')
    expect(toOrdinal(12)).toBe('12th')
    expect(toOrdinal(13)).toBe('13th')
  })

  it('should return "21st", "22nd", "23rd", "24th"', () => {
    expect(toOrdinal(21)).toBe('21st')
    expect(toOrdinal(22)).toBe('22nd')
    expect(toOrdinal(23)).toBe('23rd')
    expect(toOrdinal(24)).toBe('24th')
  })
})
