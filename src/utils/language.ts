import { getFromLocalStorage, LocalStorageKey } from './localStorageUtils'

export enum LanguageEnum {
  EN = 'en',
  IT = 'it',
}

const validLanguage = Object.values(LanguageEnum).includes(
  getFromLocalStorage(LocalStorageKey.LANG) as LanguageEnum,
)
export const defaultLang =
  getFromLocalStorage(LocalStorageKey.LANG) && validLanguage
    ? getFromLocalStorage(LocalStorageKey.LANG)
    : LanguageEnum.EN

export const documentTitleEN = 'Luigi Gargioni | Researcher & Computer Engineer'
export const documentTitleIT = 'Luigi Gargioni | Ingegnere Informatico'
