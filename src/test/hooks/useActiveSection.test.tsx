import { act, renderHook } from '@testing-library/react'

import { useActiveSection } from '../../hooks/useActiveSection'

const IDS = ['first', 'second', 'missing', 'third']

const addSection = (id: string, top: number) => {
  const section = document.createElement('section')
  section.id = id
  Object.defineProperty(section, 'offsetTop', { value: top })
  document.body.appendChild(section)
}

const scrollTo = (y: number) =>
  act(() => {
    window.scrollY = y
    window.dispatchEvent(new Event('scroll'))
  })

describe('useActiveSection', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
    window.scrollY = 0
    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      configurable: true,
    })
    addSection('first', 0)
    addSection('second', 1000)
    addSection('third', 2000)
  })

  it('starts on the first section', () => {
    const { result } = renderHook(() => useActiveSection(IDS))
    expect(result.current).toBe(0)
  })

  it('follows the section crossing the middle of the viewport', () => {
    const { result } = renderHook(() => useActiveSection(IDS))

    scrollTo(599) // middle of the viewport at 999: still the first
    expect(result.current).toBe(0)

    scrollTo(600) // middle at 1000: the second one starts here
    expect(result.current).toBe(1)

    scrollTo(1700) // ids with no element on the page are skipped
    expect(result.current).toBe(3)
  })

  it('updates on resize and stops listening after unmount', () => {
    const { result, unmount } = renderHook(() => useActiveSection(IDS))

    act(() => {
      window.scrollY = 600
      window.dispatchEvent(new Event('resize'))
    })
    expect(result.current).toBe(1)

    unmount()
    window.scrollY = 1700
    window.dispatchEvent(new Event('scroll'))
    expect(result.current).toBe(1)
  })
})
