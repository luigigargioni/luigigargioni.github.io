import { useEffect, useState } from 'react'

/**
 * Index of the section currently crossing the middle of the viewport:
 * the last one, in page order, whose top is above that line.
 */
export const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const update = () => {
      const center = window.scrollY + window.innerHeight / 2
      let found = 0
      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= center) found = index
      })
      setActive(found)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return active
}
