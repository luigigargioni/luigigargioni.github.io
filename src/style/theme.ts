import { greenThemeboy, eduGreen, expGreen, contactsGreen } from './images'

export type ThemeType = {
  type: 'dark' | 'light'
  primary: string
  primary400: string
  primary600: string
  primary80: string
  primary50: string
  primary30: string
  secondary: string
  secondary70: string
  secondary50: string
  tertiary: string
  tertiary80: string
  tertiary70: string
  tertiary50: string
  aboutimg1: string
  eduimg: string
  expimg: string
  contactsimg: string
}

export const customTheme: ThemeType = {
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
