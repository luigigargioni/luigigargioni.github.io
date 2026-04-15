import React from 'react'
import { render } from '@testing-library/react'
import { ScrollProgress } from '../../components/ScrollProgress/ScrollProgress'

describe('ScrollProgress', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render scroll progress container', () => {
    render(<ScrollProgress />)
    const container = document.querySelector('.scroll-progress-container')
    expect(container).toBeInTheDocument()
  })

  it('should render scroll progress bar', () => {
    render(<ScrollProgress />)
    const bar = document.querySelector('.scroll-progress-bar')
    expect(bar).toBeInTheDocument()
  })

  it('should add scroll event listener on mount', () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    render(<ScrollProgress />)
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      { passive: true },
    )
  })

  it('should remove scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<ScrollProgress />)
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    )
  })
})
