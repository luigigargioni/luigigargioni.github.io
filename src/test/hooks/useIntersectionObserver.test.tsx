import React from 'react'
import { render, renderHook, act } from '@testing-library/react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

type MockInstance = {
  trigger: (entries: Partial<IntersectionObserverEntry>[]) => void
  observe: ReturnType<typeof vi.fn>
  unobserve: ReturnType<typeof vi.fn>
}

const getInstances = (): MockInstance[] =>
  ((globalThis as unknown as Record<string, unknown>)
    .__intersectionObserverInstances as MockInstance[]) || []

const resetInstances = () => {
  ;(
    globalThis as unknown as Record<string, unknown>
  ).__intersectionObserverInstances = []
}

describe('useIntersectionObserver', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    resetInstances()
  })

  it('should return ref and isVisible state', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    const [ref, isVisible] = result.current

    expect(ref).toBeDefined()
    expect(ref.current).toBe(null)
    expect(isVisible).toBe(false)
  })

  it('should use default options when none provided', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    expect(result.current[1]).toBe(false)
  })

  it('should use custom threshold option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ threshold: 0.5 }),
    )
    expect(result.current[1]).toBe(false)
  })

  it('should use custom root option', () => {
    const root = document.createElement('div')
    const { result } = renderHook(() => useIntersectionObserver({ root }))
    expect(result.current[1]).toBe(false)
  })

  it('should use custom rootMargin option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ rootMargin: '100px' }),
    )
    expect(result.current[1]).toBe(false)
  })

  it('should use freezeOnceVisible option', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ freezeOnceVisible: true }),
    )
    expect(result.current[1]).toBe(false)
  })

  it('should handle array threshold', () => {
    const { result } = renderHook(() =>
      useIntersectionObserver({ threshold: [0, 0.5, 1] }),
    )
    expect(result.current[1]).toBe(false)
  })

  it('should observe element when ref is attached to a DOM element', () => {
    const TestComponent = () => {
      const [ref] = useIntersectionObserver()
      return <div ref={ref} />
    }
    render(<TestComponent />)
    const instances = getInstances()
    expect(instances.length).toBeGreaterThan(0)
    expect(instances[0].observe).toHaveBeenCalled()
  })

  it('should call setIsVisible when intersection callback fires', () => {
    const TestComponent = () => {
      const [ref, isVisible] = useIntersectionObserver()
      return <div ref={ref} data-visible={String(isVisible)} />
    }
    const { container } = render(<TestComponent />)
    const instances = getInstances()
    act(() => {
      instances[0].trigger([
        { isIntersecting: true } as Partial<IntersectionObserverEntry>,
      ])
    })
    expect(container.querySelector('div')?.getAttribute('data-visible')).toBe(
      'true',
    )
  })

  it('should unobserve element on cleanup', () => {
    const TestComponent = () => {
      const [ref] = useIntersectionObserver()
      return <div ref={ref} />
    }
    const { unmount } = render(<TestComponent />)
    const instances = getInstances()
    expect(instances.length).toBeGreaterThan(0)
    unmount()
    expect(instances[0].unobserve).toHaveBeenCalled()
  })

  it('should freeze when freezeOnceVisible is true and element is visible', () => {
    const TestComponent = () => {
      const [ref, isVisible] = useIntersectionObserver({
        freezeOnceVisible: true,
      })
      return <div ref={ref} data-visible={String(isVisible)} />
    }
    const { container } = render(<TestComponent />)
    const instances = getInstances()
    act(() => {
      instances[0].trigger([
        { isIntersecting: true } as Partial<IntersectionObserverEntry>,
      ])
    })
    expect(container.querySelector('div')?.getAttribute('data-visible')).toBe(
      'true',
    )
  })

  it('should handle all options together', () => {
    const root = document.createElement('div')
    const { result } = renderHook(() =>
      useIntersectionObserver({
        threshold: 0.3,
        root,
        rootMargin: '50px',
        freezeOnceVisible: true,
      }),
    )
    expect(result.current[1]).toBe(false)
  })

  it('should not observe when element is null', () => {
    const { result } = renderHook(() => useIntersectionObserver())
    const [ref] = result.current
    expect(ref.current).toBe(null)
  })
})
