import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { App } from '../App'

// Mock lazy loaded components
vi.mock('../components/About/About', () => ({
  About: () => <div data-testid="about">About</div>,
}))

vi.mock('../components/Skills/Skills', () => ({
  Skills: () => <div data-testid="skills">Skills</div>,
}))

vi.mock('../components/Education/Education', () => ({
  Education: () => <div data-testid="education">Education</div>,
}))

vi.mock('../components/Experience/Experience', () => ({
  Experience: () => <div data-testid="experience">Experience</div>,
}))

vi.mock('../components/Services/Services', () => ({
  Services: () => <div data-testid="services">Services</div>,
}))

vi.mock('../components/Contacts/Contacts', () => ({
  Contacts: () => <div data-testid="contacts">Contacts</div>,
}))

vi.mock('../components/Landing/Landing', () => ({
  Landing: () => <div data-testid="landing">Landing</div>,
}))

vi.mock('../components/Footer/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}))

vi.mock('../components/Navbar/Navbar', () => ({
  Navbar: () => <div data-testid="navbar">Navbar</div>,
}))

vi.mock('../components/ScrollProgress/ScrollProgress', () => ({
  ScrollProgress: () => <div data-testid="scroll-progress">ScrollProgress</div>,
}))

vi.mock('../components/ThreeBackground/ThreeBackground', () => ({
  ThreeBackground: () => (
    <div data-testid="three-background">ThreeBackground</div>
  ),
}))

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render canvas element', async () => {
    await act(async () => {
      render(<App />)
    })
    const canvas = document.querySelector('canvas')
    expect(canvas).toBeInTheDocument()
  })

  it('should render ScrollProgress component', async () => {
    await act(async () => {
      render(<App />)
    })
    const scrollProgress = screen.getByTestId('scroll-progress')
    expect(scrollProgress).toBeInTheDocument()
  })

  it('should render Navbar component', async () => {
    await act(async () => {
      render(<App />)
    })
    const navbar = screen.getByTestId('navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('should render Landing component', async () => {
    await act(async () => {
      render(<App />)
    })
    const landing = screen.getByTestId('landing')
    expect(landing).toBeInTheDocument()
  })

  it('should render About component', async () => {
    await act(async () => {
      render(<App />)
    })
    const about = screen.getByTestId('about')
    expect(about).toBeInTheDocument()
  })

  it('should render Skills component', async () => {
    await act(async () => {
      render(<App />)
    })
    const skills = screen.getByTestId('skills')
    expect(skills).toBeInTheDocument()
  })

  it('should render Education component', async () => {
    await act(async () => {
      render(<App />)
    })
    const education = screen.getByTestId('education')
    expect(education).toBeInTheDocument()
  })

  it('should render Experience component', async () => {
    await act(async () => {
      render(<App />)
    })
    const experience = screen.getByTestId('experience')
    expect(experience).toBeInTheDocument()
  })

  it('should render Services component', async () => {
    await act(async () => {
      render(<App />)
    })
    const services = screen.getByTestId('services')
    expect(services).toBeInTheDocument()
  })

  it('should render Contacts component', async () => {
    await act(async () => {
      render(<App />)
    })
    const contacts = screen.getByTestId('contacts')
    expect(contacts).toBeInTheDocument()
  })

  it('should render Footer component', async () => {
    await act(async () => {
      render(<App />)
    })
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })

  it('should add resize event listener on mount', async () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    await act(async () => {
      render(<App />)
    })
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    )
  })

  it('should remove resize event listener on unmount', async () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    let unmount: () => void
    await act(async () => {
      ;({ unmount } = render(<App />))
    })
    unmount!()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function),
    )
  })

  it('should add mousemove event listener on mount', async () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    await act(async () => {
      render(<App />)
    })
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    )
  })

  it('should remove mousemove event listener on unmount', async () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    let unmount: () => void
    await act(async () => {
      ;({ unmount } = render(<App />))
    })
    unmount!()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    )
  })

  it('should add mouseleave event listener on mount', async () => {
    const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    await act(async () => {
      render(<App />)
    })
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'mouseleave',
      expect.any(Function),
    )
  })

  it('should remove mouseleave event listener on unmount', async () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    let unmount: () => void
    await act(async () => {
      ;({ unmount } = render(<App />))
    })
    unmount!()
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'mouseleave',
      expect.any(Function),
    )
  })

  it('should cancel animation frame on unmount', async () => {
    const cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')
    let unmount: () => void
    await act(async () => {
      ;({ unmount } = render(<App />))
    })
    unmount!()
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })
})
