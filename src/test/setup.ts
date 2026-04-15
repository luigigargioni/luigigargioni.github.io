import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = String(value)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    get length() {
      return Object.keys(store).length
    },
    key: (index: number) => {
      const keys = Object.keys(store)
      return keys[index] || null
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Mock IntersectionObserver
type IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
) => void

class IntersectionObserverMock {
  callback: IntersectionObserverCallback
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
  root = null
  rootMargin = ''
  thresholds = []

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    ;(
      globalThis as unknown as Record<string, unknown[]>
    ).__intersectionObserverInstances =
      (globalThis as unknown as Record<string, unknown[]>)
        .__intersectionObserverInstances || []
    ;(
      globalThis as unknown as Record<string, unknown[]>
    ).__intersectionObserverInstances.push(this)
  }

  trigger(entries: Partial<IntersectionObserverEntry>[]) {
    this.callback(entries as IntersectionObserverEntry[])
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
})
;(
  globalThis as unknown as Record<string, unknown>
).getIntersectionObserverInstances = () => {
  return (
    (globalThis as unknown as Record<string, unknown[]>)
      .__intersectionObserverInstances || []
  )
}

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResizeObserver
class ResizeObserverMock {
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: ResizeObserverMock,
})

// Mock canvas
HTMLCanvasElement.prototype.getContext = vi.fn(() => ({
  clearRect: vi.fn(),
  fillRect: vi.fn(),
  beginPath: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  stroke: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  shadowBlur: 0,
  shadowColor: '',
  lineWidth: 1,
  fillStyle: '',
  strokeStyle: '',
})) as unknown as typeof HTMLCanvasElement.prototype.getContext

HTMLCanvasElement.prototype.toDataURL = vi.fn(
  () => 'data:image/png;base64,mock',
)

// Mock requestAnimationFrame and cancelAnimationFrame
globalThis.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 0))
globalThis.cancelAnimationFrame = vi.fn((id) => clearTimeout(id))

// Mock window.scrollY
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
})

// Mock document.documentElement.scrollHeight
Object.defineProperty(document.documentElement, 'scrollHeight', {
  writable: true,
  value: 1000,
})

// Mock document.documentElement.clientHeight
Object.defineProperty(document.documentElement, 'clientHeight', {
  writable: true,
  value: 800,
})
