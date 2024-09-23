import { debounce } from '../utils/miscellaneous'

beforeAll(() => {
  jest.useFakeTimers()
})

afterAll(() => {
  jest.useRealTimers()
})

describe('debounce', () => {
  it('should debounce function calls', () => {
    const mockFunc = jest.fn()
    const debouncedFunc = debounce(mockFunc, 200)

    debouncedFunc()
    debouncedFunc()
    debouncedFunc()

    expect(mockFunc).not.toBeCalled()

    jest.advanceTimersByTime(200)
    expect(mockFunc).toBeCalledTimes(1)
  })

  it('should reset debounce delay on multiple calls', () => {
    const mockFunc = jest.fn()
    const debouncedFunc = debounce(mockFunc, 200)

    debouncedFunc()
    jest.advanceTimersByTime(100)
    debouncedFunc()
    jest.advanceTimersByTime(100)
    debouncedFunc()

    jest.advanceTimersByTime(200)
    expect(mockFunc).toBeCalledTimes(1)
  })
})
