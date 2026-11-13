import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import i18n from '../i18n/config'
import { App } from '../App'

// WebGL is not available in jsdom
vi.mock('../components/ParticleField/ParticleField', () => ({
  ParticleField: () => <canvas data-testid="particle-field" />,
}))

type ObserverMock = {
  trigger: (entries: Partial<IntersectionObserverEntry>[]) => void
}

// App creates two observers per mount: panels reveal first, hero name second
const lastObservers = () => {
  const all = (
    globalThis as unknown as {
      getIntersectionObserverInstances: () => ObserverMock[]
    }
  ).getIntersectionObserverInstances()
  return { reveal: all[all.length - 2], name: all[all.length - 1] }
}

const renderIn = async (language: 'en' | 'it') => {
  await act(async () => {
    await i18n.changeLanguage(language)
  })
  return render(<App />)
}

describe('App', () => {
  const scrollIntoView = vi.fn()

  beforeEach(() => {
    scrollIntoView.mockClear()
    Element.prototype.scrollIntoView = scrollIntoView
  })

  it('renders every section in English', async () => {
    await renderIn('en')

    // started after a short delay and loaded lazily, in its own chunk
    expect(
      await screen.findByTestId('particle-field', {}, { timeout: 3000 }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Luigi Gargioni' }),
    ).toBeInTheDocument()
    expect(screen.getByText('01 — Who I am')).toBeInTheDocument()
    expect(screen.getByText('02 — Skills')).toBeInTheDocument()
    expect(screen.getByText('03 — Experience')).toBeInTheDocument()
    expect(screen.getByText('04 — Education')).toBeInTheDocument()
    expect(screen.getByText('05 — Contacts')).toBeInTheDocument()
    expect(screen.getByText('— Don Norman')).toBeInTheDocument()
    expect(document.title).toBe(
      'Luigi Gargioni | Researcher & Computer Engineer',
    )
    expect(document.documentElement.lang).toBe('en')
  })

  it('starts the particle cloud when the browser is idle', async () => {
    const callbacks: (() => void)[] = []
    const cancel = vi.fn()
    Object.assign(window, {
      requestIdleCallback: (callback: () => void) => callbacks.push(callback),
      cancelIdleCallback: cancel,
    })
    try {
      const { unmount } = await renderIn('en')
      expect(screen.queryByTestId('particle-field')).toBeNull()

      await act(async () => callbacks.forEach((callback) => callback()))
      expect(await screen.findByTestId('particle-field')).toBeInTheDocument()

      unmount()
      expect(cancel).toHaveBeenCalled()
    } finally {
      delete (window as Partial<Window>).requestIdleCallback
      delete (window as Partial<Window>).cancelIdleCallback
    }
  })

  it('renders in Italian', async () => {
    await renderIn('it')

    expect(screen.getByText('01 — Mi presento')).toBeInTheDocument()
    expect(screen.getByText('03 — Esperienze')).toBeInTheDocument()
    expect(screen.getByText('Libero Professionista')).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('it')
  })

  it('does not show phone number or VAT number', async () => {
    const { container } = await renderIn('it')

    expect(container.textContent).not.toMatch(/\+39|IVA|VAT/)
    expect(container.querySelector('a[href^="tel:"]')).toBeNull()
  })

  it('switches language from the top bar', async () => {
    await renderIn('en')

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'IT' }))
    })
    expect(screen.getByText('02 — Competenze')).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'EN' }))
    })
    expect(screen.getByText('02 — Skills')).toBeInTheDocument()
  })

  it('reveals a panel only once it enters the viewport', async () => {
    const { container } = await renderIn('en')
    const [first, second] = Array.from(container.querySelectorAll('.reveal'))

    act(() => {
      lastObservers().reveal.trigger([
        { isIntersecting: true, target: first },
        { isIntersecting: false, target: second },
      ])
    })

    expect(first).toHaveClass('in')
    expect(second).not.toHaveClass('in')
  })

  it('shows photo and name in the top bar once the hero name is off screen', async () => {
    const { container } = await renderIn('en')
    const identity = container.querySelector('.topbar-me') as HTMLElement
    expect(identity).not.toHaveClass('on')
    expect(identity).toHaveAttribute('tabindex', '-1')

    act(() => {
      lastObservers().name.trigger([{ isIntersecting: false }])
    })
    expect(identity).toHaveClass('on')
    expect(identity).toHaveAttribute('tabindex', '0')

    fireEvent.click(identity)
    expect(scrollIntoView).toHaveBeenCalledTimes(1)
    expect(scrollIntoView.mock.instances[0]).toBe(
      document.getElementById('home'),
    )
  })

  it('scrolls to a section from the dots and from the contact button', async () => {
    await renderIn('en')

    fireEvent.click(screen.getByRole('button', { name: 'Skills' }))
    expect(scrollIntoView.mock.instances[0]).toBe(
      document.getElementById('skills'),
    )

    // the hero button (the dot with the same name comes first in the page)
    const contactButtons = screen.getAllByRole('button', { name: 'Contacts' })
    fireEvent.click(contactButtons[contactButtons.length - 1])
    expect(scrollIntoView.mock.instances[1]).toBe(
      document.getElementById('contacts'),
    )
  })

  it('links e-mail, address, profiles and institutions', async () => {
    await renderIn('en')

    expect(
      screen.getByRole('link', { name: 'luigi.gargioni@gmail.com' }),
    ).toHaveAttribute('href', 'mailto:luigi.gargioni@gmail.com')
    expect(
      screen.getByRole('link', { name: /Brescia, Italy/ }),
    ).toHaveAttribute('href', expect.stringContaining('maps'))
    expect(screen.getAllByRole('link', { name: 'GitHub' })).toHaveLength(2)
    expect(
      screen.getByRole('link', { name: 'University of Milano-Bicocca' }),
    ).toHaveAttribute('href', 'https://www.unimib.it/')
    // freelance has no company link
    expect(screen.getByText('Freelance').closest('a')).toBeNull()
  })
})
