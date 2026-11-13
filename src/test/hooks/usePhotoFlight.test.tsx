import { act, renderHook } from '@testing-library/react'

import { usePhotoFlight } from '../../hooks/usePhotoFlight'

const rect = (top: number, left: number, size: number) =>
  ({ top, left, width: size, height: size }) as DOMRect

const nextFrame = () =>
  act(() => new Promise((resolve) => setTimeout(resolve, 5)))

// the ResizeObserver mock from setup.ts keeps no callback: capture it here
let resizeCallback: () => void = () => undefined
const resizeDisconnect = vi.fn()
class CapturingResizeObserver {
  constructor(callback: () => void) {
    resizeCallback = callback
  }
  observe = vi.fn()
  disconnect = resizeDisconnect
}

// placeholder 64px at (300, 100) when the page is at the top;
// it moves up with the scroll. Slot 42px at (20, 64), fixed.
const setup = (originTop = 300) => {
  const origin = document.createElement('span')
  const target = document.createElement('span')
  const photo = document.createElement('img')
  origin.getBoundingClientRect = () => rect(originTop - window.scrollY, 100, 64)
  target.getBoundingClientRect = () => rect(20, 64, 42)
  const hook = renderHook(() =>
    usePhotoFlight(
      { current: origin },
      { current: target },
      { current: photo },
    ),
  )
  return { photo, origin, ...hook }
}

const scrollTo = async (y: number) => {
  window.scrollY = y
  window.dispatchEvent(new Event('scroll'))
  await nextFrame()
}

describe('usePhotoFlight', () => {
  const originalResizeObserver = window.ResizeObserver

  beforeEach(() => {
    window.scrollY = 0
    resizeDisconnect.mockClear()
    window.ResizeObserver =
      CapturingResizeObserver as unknown as typeof ResizeObserver
  })

  afterEach(() => {
    window.ResizeObserver = originalResizeObserver
  })

  it('starts on the placeholder', () => {
    const { photo } = setup()

    expect(photo.style.transform).toBe('translate(100px, 300px)')
    expect(photo.style.width).toBe('64px')
    expect(photo).toHaveClass('ready')
    expect(photo).not.toHaveClass('docked')
  })

  it('flies towards the slot while scrolling, then stays docked', async () => {
    const { photo } = setup()

    // travel is 280px: halfway the eased progress is exactly 0.5
    await scrollTo(140)
    expect(photo.style.transform).toBe('translate(82px, 90px)')
    expect(photo.style.width).toBe('53px')
    expect(photo).not.toHaveClass('docked')

    await scrollTo(280)
    expect(photo.style.transform).toBe('translate(64px, 20px)')
    expect(photo.style.width).toBe('42px')
    expect(photo).toHaveClass('docked')

    await scrollTo(2000)
    expect(photo.style.transform).toBe('translate(64px, 20px)')

    // and back
    await scrollTo(0)
    expect(photo.style.transform).toBe('translate(100px, 300px)')
    expect(photo).not.toHaveClass('docked')
  })

  it('follows layout changes: page resized, window resized, transitions', async () => {
    const { photo, origin } = setup()

    // e.g. a web font loads and the hero moves down by 20px
    origin.getBoundingClientRect = () => rect(320 - window.scrollY, 100, 64)
    resizeCallback()
    await nextFrame()
    expect(photo.style.transform).toBe('translate(100px, 320px)')

    origin.getBoundingClientRect = () => rect(340 - window.scrollY, 100, 64)
    window.dispatchEvent(new Event('resize'))
    await nextFrame()
    expect(photo.style.transform).toBe('translate(100px, 340px)')

    origin.getBoundingClientRect = () => rect(360 - window.scrollY, 100, 64)
    window.dispatchEvent(new Event('transitionend'))
    await nextFrame()
    expect(photo.style.transform).toBe('translate(100px, 360px)')
  })

  it('keeps following the placeholder while CSS animations run', async () => {
    let running = true
    const getAnimations = vi.fn(() => [
      { playState: running ? 'running' : 'finished' } as Animation,
    ])
    Object.assign(document, { getAnimations })
    try {
      // the hero panel is sliding in: the placeholder starts 40px lower
      let offset = 40
      const { photo, origin } = setup()
      origin.getBoundingClientRect = () =>
        rect(300 + offset - window.scrollY, 100, 64)

      offset = 20
      await nextFrame()
      expect(photo.style.transform).toBe('translate(100px, 320px)')

      // animation over: one last frame, then it stops measuring
      offset = 0
      running = false
      await nextFrame()
      expect(photo.style.transform).toBe('translate(100px, 300px)')
      const calls = getAnimations.mock.calls.length
      await nextFrame()
      expect(getAnimations.mock.calls.length).toBe(calls)
    } finally {
      delete (document as Partial<Document>).getAnimations
    }
  })

  it('measures at most once per frame', async () => {
    const { origin } = setup()
    const measure = vi.fn(() => rect(300, 100, 64))
    origin.getBoundingClientRect = measure

    window.dispatchEvent(new Event('scroll'))
    window.dispatchEvent(new Event('scroll'))
    window.dispatchEvent(new Event('resize'))
    await nextFrame()

    expect(measure).toHaveBeenCalledTimes(1)
  })

  it('is docked straight away if the placeholder is not below the slot', () => {
    const { photo } = setup(10)

    expect(photo).toHaveClass('docked')
    expect(photo.style.transform).toBe('translate(64px, 20px)')
  })

  it('stops listening after unmount', async () => {
    const { photo, unmount } = setup()

    unmount()
    await scrollTo(280)

    expect(photo).not.toHaveClass('docked')
    expect(resizeDisconnect).toHaveBeenCalled()
  })
})
