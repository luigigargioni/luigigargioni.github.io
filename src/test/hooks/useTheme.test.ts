import { renderHook, act } from '@testing-library/react'
import { useTheme } from '../../hooks/useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    // Reset matchMedia to default mock (matches: false)
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: false,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })
  })

  it('should return dark theme by default when no saved theme and no media query', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })

  it('should return saved theme from localStorage', () => {
    localStorage.setItem('portfolio-theme', 'light')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('should return light theme when media query prefers light', () => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      media: '(prefers-color-scheme: light)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })

    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('should toggle theme from dark to light', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('light')
  })

  it('should toggle theme from light to dark', () => {
    localStorage.setItem('portfolio-theme', 'light')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('dark')
  })

  it('should save theme to localStorage on toggle', () => {
    const { result } = renderHook(() => useTheme())

    act(() => {
      result.current.toggleTheme()
    })

    expect(localStorage.getItem('portfolio-theme')).toBe('light')
  })

  it('should set data-theme attribute on document', () => {
    const { result } = renderHook(() => useTheme())

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

    act(() => {
      result.current.toggleTheme()
    })

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})
