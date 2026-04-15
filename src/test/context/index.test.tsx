import React from 'react'
import { renderHook, act, render } from '@testing-library/react'
import { CustomContext, CustomContextProvider } from '../../context'

describe('CustomContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should provide default context values', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CustomContextProvider>
        {children as React.JSX.Element}
      </CustomContextProvider>
    )
    const { result } = renderHook(() => React.useContext(CustomContext), {
      wrapper,
    })
    expect(result.current.drawerOpen).toBe(false)
    expect(typeof result.current.setDrawerOpen).toBe('function')
  })

  it('should update drawerOpen state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CustomContextProvider>
        {children as React.JSX.Element}
      </CustomContextProvider>
    )
    const { result } = renderHook(() => React.useContext(CustomContext), {
      wrapper,
    })

    expect(result.current.drawerOpen).toBe(false)

    act(() => {
      result.current.setDrawerOpen(true)
    })

    expect(result.current.drawerOpen).toBe(true)
  })

  it('should toggle drawerOpen state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CustomContextProvider>
        {children as React.JSX.Element}
      </CustomContextProvider>
    )
    const { result } = renderHook(() => React.useContext(CustomContext), {
      wrapper,
    })

    act(() => {
      result.current.setDrawerOpen(true)
    })
    expect(result.current.drawerOpen).toBe(true)

    act(() => {
      result.current.setDrawerOpen(false)
    })
    expect(result.current.drawerOpen).toBe(false)
  })

  it('should set drawerOpen to same value', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CustomContextProvider>
        {children as React.JSX.Element}
      </CustomContextProvider>
    )
    const { result } = renderHook(() => React.useContext(CustomContext), {
      wrapper,
    })

    act(() => {
      result.current.setDrawerOpen(false)
    })
    expect(result.current.drawerOpen).toBe(false)

    act(() => {
      result.current.setDrawerOpen(false)
    })
    expect(result.current.drawerOpen).toBe(false)
  })

  it('should render children', () => {
    const { getByText } = render(
      <CustomContextProvider>
        <div>Test Child</div>
      </CustomContextProvider>,
    )
    expect(getByText('Test Child')).toBeInTheDocument()
  })

  it('should call default setDrawerOpen no-op without error', () => {
    const { result } = renderHook(() => React.useContext(CustomContext))
    expect(() => result.current.setDrawerOpen(true)).not.toThrow()
  })
})
