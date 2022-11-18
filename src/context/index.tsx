import React, { createContext, useMemo, useState } from 'react'
import {
  defaultLang,
  documentTitleEN,
  documentTitleIT,
  LanguageEnum,
} from 'utils/language'
import {
  getFromLocalStorage,
  LocalStorageKey,
  setToLocalStorage,
} from 'utils/localStorageUtils'

interface CustomContextData {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
  lang: LanguageEnum
  setLang: (value: LanguageEnum) => void
}

export const CustomContext = createContext<CustomContextData>({
  drawerOpen: false,
  setDrawerOpen: () => {
    /* void */
  },
  lang: defaultLang,
  setLang: () => {
    /* void */
  },
})

export const CustomContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [lang, setLang] = useState(defaultLang)

  if (getFromLocalStorage(LocalStorageKey.LANG) !== lang)
    setToLocalStorage(LocalStorageKey.LANG, lang)

  if (lang === LanguageEnum.EN) document.title = documentTitleEN
  if (lang === LanguageEnum.IT) document.title = documentTitleIT

  const value = useMemo(
    () => ({ drawerOpen, setDrawerOpen, lang, setLang }),
    [drawerOpen, setDrawerOpen, lang, setLang]
  )
  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  )
}
