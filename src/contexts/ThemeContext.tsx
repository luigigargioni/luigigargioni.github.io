import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext({
  theme: themeData.theme,
  drawerOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setHandleDrawer: () => {},
})

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const { theme } = themeData
  const [drawerOpen, setDrawerOpen] = useState(false)

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { theme, drawerOpen, setHandleDrawer }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
