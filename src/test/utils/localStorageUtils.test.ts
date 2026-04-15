import {
  setToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  LocalStorageKey,
} from '../../utils/localStorageUtils'

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('setToLocalStorage', () => {
    it('should store a string value', () => {
      setToLocalStorage('testKey', 'testValue')
      expect(localStorage.getItem('testKey')).toBe('testValue')
    })

    it('should store a number value as string', () => {
      setToLocalStorage('testKey', 123)
      expect(localStorage.getItem('testKey')).toBe('123')
    })

    it('should store an object as JSON string', () => {
      const obj = { name: 'test', value: 42 }
      setToLocalStorage('testKey', obj)
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(obj))
    })

    it('should store an array as JSON string', () => {
      const arr = [1, 2, 3]
      setToLocalStorage('testKey', arr)
      expect(localStorage.getItem('testKey')).toBe(JSON.stringify(arr))
    })

    it('should store a boolean value as string', () => {
      setToLocalStorage('testKey', true)
      expect(localStorage.getItem('testKey')).toBe('true')
    })

    it('should store null as string "null"', () => {
      setToLocalStorage('testKey', null)
      expect(localStorage.getItem('testKey')).toBe('null')
    })

    it('should store undefined as string "undefined"', () => {
      setToLocalStorage('testKey', undefined)
      expect(localStorage.getItem('testKey')).toBe('undefined')
    })
  })

  describe('getFromLocalStorage', () => {
    it('should return empty string when key does not exist', () => {
      const result = getFromLocalStorage('nonExistentKey')
      expect(result).toBe('')
    })

    it('should return string value when stored as string', () => {
      localStorage.setItem('testKey', 'testValue')
      const result = getFromLocalStorage('testKey')
      expect(result).toBe('testValue')
    })

    it('should parse JSON and return object', () => {
      const obj = { name: 'test', value: 42 }
      localStorage.setItem('testKey', JSON.stringify(obj))
      const result = getFromLocalStorage('testKey')
      expect(result).toEqual(obj)
    })

    it('should parse JSON and return array', () => {
      const arr = [1, 2, 3]
      localStorage.setItem('testKey', JSON.stringify(arr))
      const result = getFromLocalStorage('testKey')
      expect(result).toEqual(arr)
    })

    it('should return string as is when not valid JSON', () => {
      localStorage.setItem('testKey', 'not a json')
      const result = getFromLocalStorage('testKey')
      expect(result).toBe('not a json')
    })

    it('should parse number string to number', () => {
      localStorage.setItem('testKey', '123')
      const result = getFromLocalStorage('testKey')
      expect(result).toBe(123)
      expect(typeof result).toBe('number')
    })

    it('should parse boolean string to boolean', () => {
      localStorage.setItem('testKey', 'true')
      const result = getFromLocalStorage('testKey')
      expect(result).toBe(true)
      expect(typeof result).toBe('boolean')
    })

    it('should handle malformed JSON and return as string', () => {
      localStorage.setItem('testKey', '{invalid}')
      const result = getFromLocalStorage('testKey')
      expect(result).toBe('{invalid}')
    })
  })

  describe('removeFromLocalStorage', () => {
    it('should remove item from localStorage', () => {
      localStorage.setItem('testKey', 'testValue')
      expect(localStorage.getItem('testKey')).toBe('testValue')
      removeFromLocalStorage('testKey')
      expect(localStorage.getItem('testKey')).toBe(null)
    })

    it('should do nothing when key does not exist', () => {
      expect(() => removeFromLocalStorage('nonExistentKey')).not.toThrow()
    })
  })

  describe('clearLocalStorage', () => {
    it('should clear all items from localStorage', () => {
      localStorage.setItem('key1', 'value1')
      localStorage.setItem('key2', 'value2')
      localStorage.setItem('key3', 'value3')
      expect(localStorage.length).toBe(3)
      clearLocalStorage()
      expect(localStorage.length).toBe(0)
    })

    it('should work even when localStorage is empty', () => {
      expect(() => clearLocalStorage()).not.toThrow()
    })
  })

  describe('LocalStorageKey enum', () => {
    it('should have LANG key', () => {
      expect(LocalStorageKey.LANG).toBe('lang')
    })
  })
})
