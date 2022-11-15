import React, { createContext, useMemo, useState } from 'react'

interface CustomContextData {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
}

export const CustomContext = createContext<CustomContextData>({
  drawerOpen: false,
  setDrawerOpen: () => {
    /* void */
  },
})

export const CustomContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const value = useMemo(
    () => ({ drawerOpen, setDrawerOpen }),
    [drawerOpen, setDrawerOpen]
  )
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  )
}
