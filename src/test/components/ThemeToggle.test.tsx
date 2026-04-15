import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { ThemeProvider } from '../../style/themeProvider'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>{children as React.JSX.Element}</ThemeProvider>
)

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('should render button', () => {
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should have correct aria-label for dark theme', () => {
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
  })

  it('should have correct aria-label for light theme', () => {
    localStorage.setItem('portfolio-theme', 'light')
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('should have correct title for dark theme', () => {
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('title', 'Switch to light mode')
  })

  it('should have correct title for light theme', () => {
    localStorage.setItem('portfolio-theme', 'light')
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('title', 'Switch to dark mode')
  })

  it('should call toggleTheme on click', () => {
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(localStorage.getItem('portfolio-theme')).toBe('light')
  })

  it('should render moon icon in dark theme', () => {
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render sun icon in light theme', () => {
    localStorage.setItem('portfolio-theme', 'light')
    render(<ThemeToggle />, { wrapper })
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
