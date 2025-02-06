import { debounce, sleep } from '../utils/miscellaneous'

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

describe('sleep', () => {
  it('should wait for the specified time before resolving', async () => {
    const mockFunc = jest.fn()

    const testSleep = async () => {
      await sleep(500)
      mockFunc()
    }

    const promise = testSleep()
    expect(mockFunc).not.toHaveBeenCalled()

    jest.advanceTimersByTime(500)

    await promise
    expect(mockFunc).toHaveBeenCalledTimes(1)
  })

  it('should resolve immediately if given a negative number', async () => {
    const mockFunc = jest.fn()

    // Použití real timers pro okamžité vyřešení Promise
    jest.useRealTimers()

    await sleep(-100)
    mockFunc()

    expect(mockFunc).toHaveBeenCalledTimes(1)

    jest.useFakeTimers()
  })
})
