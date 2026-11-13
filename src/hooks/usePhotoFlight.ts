import { RefObject, useEffect } from 'react'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
const lerp = (from: number, to: number, t: number) => from + (to - from) * t
const isRunning = (animation: Animation) => animation.playState === 'running'

/**
 * Scroll-linked flight of a single photo from a placeholder in the page
 * (`originRef`) to a slot in the fixed top bar (`targetRef`).
 *
 * The photo (`photoRef`, position: fixed) starts exactly on the placeholder;
 * while the page scrolls it rises, slides left and shrinks, and docks in the
 * slot at the moment the placeholder would reach the bar. Scrolling back up
 * plays the flight in reverse.
 *
 * Positions are measured only when something may have moved: scroll, resize,
 * any change of the page size (web fonts loading, language switch), and every
 * frame while CSS animations or transitions are running (the hero panel slides
 * in on load). At most once per frame.
 */
export const usePhotoFlight = (
  originRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null>,
  photoRef: RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    const origin = originRef.current as HTMLElement
    const target = targetRef.current as HTMLElement
    const photo = photoRef.current as HTMLElement
    let frame = 0

    const place = () => {
      frame = 0
      const from = origin.getBoundingClientRect()
      const to = target.getBoundingClientRect()
      // scroll distance after which the placeholder would be level with the slot
      const travel = from.top + window.scrollY - to.top
      const progress = travel > 0 ? clamp01(window.scrollY / travel) : 1
      const eased = progress * progress * (3 - 2 * progress)

      const top = progress < 1 ? lerp(from.top, to.top, eased) : to.top
      const left = lerp(from.left, to.left, eased)
      const size = lerp(from.width, to.width, eased)
      photo.style.transform = `translate(${left}px, ${top}px)`
      photo.style.width = `${size}px`
      photo.style.height = `${size}px`
      photo.classList.toggle('docked', progress === 1)
      photo.classList.add('ready')
      // keep following while something on the page is still animating
      if (document.getAnimations?.().some(isRunning)) schedule()
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(place)
    }

    place()
    const resizeObserver = new ResizeObserver(schedule)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('transitionend', schedule)
    window.addEventListener('animationend', schedule)
    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('transitionend', schedule)
      window.removeEventListener('animationend', schedule)
    }
  }, [originRef, targetRef, photoRef])
}
