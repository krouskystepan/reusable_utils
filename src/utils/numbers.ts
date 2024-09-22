export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const formatNumberToReadableString = (number: number): string => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + 'M'
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(2) + 'k'
  } else {
    return number.toString()
  }
}

export const parseReadableStringToNumber = (readableString: string): number => {
  const normalizedString = readableString.toUpperCase()
  if (normalizedString.endsWith('M')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000_000
  } else if (normalizedString.endsWith('K')) {
    return parseFloat(normalizedString.slice(0, -1)) * 1_000
  } else {
    return parseFloat(readableString)
  }
}

export const formatPhoneNumber = (
  number: string,
  countryCode: string = ''
): string => {
  const cleaned = number.replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
  return countryCode ? `${countryCode} ${formatted}` : formatted
}
