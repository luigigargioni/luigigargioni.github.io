import { getFromLocalStorage, LocalStorageKey } from './localStorageUtils'

export enum LanguageEnum {
  EN = 'en',
  IT = 'it',
}

export const defaultLang =
  getFromLocalStorage(LocalStorageKey.LANG) &&
  getFromLocalStorage(LocalStorageKey.LANG) in LanguageEnum
    ? getFromLocalStorage(LocalStorageKey.LANG)
    : LanguageEnum.EN

export const documentTitleEN = 'Luigi Gargioni | Computer Engineer'
export const documentTitleIT = 'Luigi Gargioni | Ingegnere Informatico'
