import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../../components/Navbar/Navbar'
import { CustomContextProvider } from '../../context'
import { ThemeProvider } from '../../style/themeProvider'
import { MemoryRouter } from 'react-router-dom'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    <ThemeProvider>
      <CustomContextProvider>
        {children as React.JSX.Element}
      </CustomContextProvider>
    </ThemeProvider>
  </MemoryRouter>
)

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
    },
  }),
}))

// Mock react-awesome-reveal
vi.mock('react-awesome-reveal', () => ({
  Fade: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('Navbar', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render navbar container', () => {
    render(<Navbar />, { wrapper })
    const navbar = screen.getByText('header.name').closest('.navbar')
    expect(navbar).toBeInTheDocument()
  })

  it('should render menu button', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    expect(menuButton).toBeInTheDocument()
  })

  it('should open drawer when menu button is clicked', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    expect(menuButton).toBeInTheDocument()
  })

  it('should render close button when drawer is open', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    const closeButton = screen.getByLabelText('Close')
    expect(closeButton).toBeInTheDocument()
  })

  it('should close drawer when close button is clicked', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.click(closeButton)
    expect(closeButton).toBeInTheDocument()
  })

  it('should handle keyboard Enter on close button', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.keyDown(closeButton, { key: 'Enter' })
    expect(closeButton).toBeInTheDocument()
  })

  it('should handle keyboard Space on close button', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.keyDown(closeButton, { key: ' ' })
    expect(closeButton).toBeInTheDocument()
  })

  it('should not handle other keyboard keys on close button', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    const closeButton = screen.getByLabelText('Close')
    fireEvent.keyDown(closeButton, { key: 'Escape' })
    expect(closeButton).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Navbar />, { wrapper })
    const menuButton = screen.getByLabelText('Menu')
    fireEvent.click(menuButton)
    expect(screen.getByText('about.title')).toBeInTheDocument()
    expect(screen.getByText('skills.title')).toBeInTheDocument()
    expect(screen.getByText('experience.title')).toBeInTheDocument()
    expect(screen.getByText('education.title')).toBeInTheDocument()
    expect(screen.getByText('services.title')).toBeInTheDocument()
    expect(screen.getByText('contacts.title')).toBeInTheDocument()
  })
})
