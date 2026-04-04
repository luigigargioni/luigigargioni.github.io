import React, { createContext, useContext, ReactNode } from 'react'
import { useTheme } from 'hooks/useTheme'
import { ThemeType } from './theme'
import { greenThemeboy, eduGreen, expGreen, contactsGreen } from './images'

const darkTheme: ThemeType = {
  type: 'dark',
  primary: '#3fc337',
  primary400: '#57d750',
  primary600: '#29c51f',
  primary80: '#3fc337cc',
  primary50: '#3fc33780',
  primary30: '#3fc3374d',
  secondary: '#212121',
  secondary70: '#212121b3',
  secondary50: '#21212180',
  tertiary: '#eaeaea',
  tertiary80: '#eaeaeacc',
  tertiary70: '#eaeaeab3',
  tertiary50: '#eaeaea80',
  aboutimg1: greenThemeboy,
  eduimg: eduGreen,
  expimg: expGreen,
  contactsimg: contactsGreen,
}

const lightTheme: ThemeType = {
  type: 'light',
  primary: '#3fc337',
  primary400: '#57d750',
  primary600: '#29c51f',
  primary80: '#3fc337cc',
  primary50: '#3fc33780',
  primary30: '#3fc3374d',
  secondary: '#ffffff',
  secondary70: '#ffffffb3',
  secondary50: '#ffffff80',
  tertiary: '#212121',
  tertiary80: '#212121cc',
  tertiary70: '#212121b3',
  tertiary50: '#21212180',
  aboutimg1: greenThemeboy,
  eduimg: eduGreen,
  expimg: expGreen,
  contactsimg: contactsGreen,
}

const ThemeContext = createContext<ThemeType>(darkTheme)

export const useCustomTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme()
  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
