import React from 'react'
import { render, screen } from '@testing-library/react'
import { Services } from '../../components/Services/Services'
import { ThemeProvider } from '../../style/themeProvider'
import { MemoryRouter } from 'react-router-dom'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    <ThemeProvider>{children as React.JSX.Element}</ThemeProvider>
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

// Mock SingleService component
vi.mock('../../components/Services/SingleService/SingleService', () => ({
  SingleService: ({
    title,
    icon,
  }: {
    title: string
    icon: React.ReactNode
  }) => (
    <div data-testid="single-service">
      {icon}
      <h3>{title}</h3>
    </div>
  ),
}))

describe('Services', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render services section', () => {
    render(<Services />, { wrapper })
    const servicesSection = screen
      .getByText('services.title')
      .closest('#services')
    expect(servicesSection).toBeInTheDocument()
  })

  it('should render services title', () => {
    render(<Services />, { wrapper })
    const title = screen.getByText('services.title')
    expect(title).toBeInTheDocument()
  })

  it('should render single service components', () => {
    render(<Services />, { wrapper })
    const services = screen.getAllByTestId('single-service')
    expect(services.length).toBeGreaterThan(0)
  })
})
