import React, { createContext, useMemo, useState } from 'react'
import { ThemeType } from 'theme/theme'

import { themeData } from '../data/themeData'

interface ThemeContextData {
  theme: ThemeType
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: themeData.theme,
  drawerOpen: false,
  setDrawerOpen: () => {
    /* void */
  },
})

export const ThemeContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const { theme } = themeData
  const [drawerOpen, setDrawerOpen] = useState(false)

  const value = useMemo(
    () => ({ theme, drawerOpen, setDrawerOpen }),
    [theme, drawerOpen, setDrawerOpen]
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
