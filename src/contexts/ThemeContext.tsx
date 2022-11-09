import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext({
  theme: themeData.theme,
  drawerOpen: false,
  setHandleDrawer: () => {},
})

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const theme = themeData.theme
  const [drawerOpen, setDrawerOpen] = useState(false)

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const value = { theme, drawerOpen, setHandleDrawer }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
