import { LocalStorageKey } from '../../utils/localStorageUtils'

describe('language', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    vi.resetModules()
  })

  describe('LanguageEnum', () => {
    it('should have EN value', async () => {
      const { LanguageEnum } = await import('../../utils/language')
      expect(LanguageEnum.EN).toBe('en')
    })

    it('should have IT value', async () => {
      const { LanguageEnum } = await import('../../utils/language')
      expect(LanguageEnum.IT).toBe('it')
    })

    it('should have all valid language values', async () => {
      const { LanguageEnum } = await import('../../utils/language')
      expect(Object.values(LanguageEnum)).toEqual(['en', 'it'])
    })
  })

  describe('defaultLang', () => {
    it('should default to EN when localStorage is empty', async () => {
      const { defaultLang, LanguageEnum } = await import('../../utils/language')
      expect(defaultLang).toBe(LanguageEnum.EN)
    })

    it('should return IT when localStorage has valid IT value', async () => {
      localStorage.setItem(LocalStorageKey.LANG, 'it')
      const { defaultLang, LanguageEnum } = await import('../../utils/language')
      expect(defaultLang).toBe(LanguageEnum.IT)
    })

    it('should return EN when localStorage has valid EN value', async () => {
      localStorage.setItem(LocalStorageKey.LANG, 'en')
      const { defaultLang, LanguageEnum } = await import('../../utils/language')
      expect(defaultLang).toBe(LanguageEnum.EN)
    })

    it('should default to EN when localStorage has invalid value', async () => {
      localStorage.setItem(LocalStorageKey.LANG, 'fr')
      const { defaultLang, LanguageEnum } = await import('../../utils/language')
      expect(defaultLang).toBe(LanguageEnum.EN)
    })
  })

  describe('documentTitleEN', () => {
    it('should have correct English title', async () => {
      const { documentTitleEN } = await import('../../utils/language')
      expect(documentTitleEN).toBe(
        'Luigi Gargioni | Researcher & Computer Engineer',
      )
    })
  })

  describe('documentTitleIT', () => {
    it('should have correct Italian title', async () => {
      const { documentTitleIT } = await import('../../utils/language')
      expect(documentTitleIT).toBe('Luigi Gargioni | Ingegnere Informatico')
    })
  })
})
