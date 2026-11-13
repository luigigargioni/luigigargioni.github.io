import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'

import {
  About,
  Contacts,
  Hero,
  Journey,
  SectionDots,
  Skills,
  TopBar,
} from 'components'
import { useActiveSection } from 'hooks/useActiveSection'
import { usePhotoFlight } from 'hooks/usePhotoFlight'
import { usePortfolio } from 'hooks/usePortfolio'
import './styles/site.css'

// Three.js is the heaviest dependency: load it in its own chunk, so the text
// shows up first and the particles fade in when ready.
const ParticleField = lazy(() =>
  import('components/ParticleField/ParticleField').then((module) => ({
    default: module.ParticleField,
  })),
)

// Page order. The particle cloud takes one shape per section.
const SECTION_IDS = ['home', 'about', 'skills', 'journey', 'contacts']
const CONTACTS_INDEX = SECTION_IDS.length - 1

export const App = () => {
  const portfolio = usePortfolio()
  const active = useActiveSection(SECTION_IDS)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const [nameVisible, setNameVisible] = useState(true)
  const [particlesOn, setParticlesOn] = useState(false)
  const photoPlaceholderRef = useRef<HTMLSpanElement>(null)
  const photoSlotRef = useRef<HTMLSpanElement>(null)
  const photoRef = useRef<HTMLImageElement>(null)
  usePhotoFlight(photoPlaceholderRef, photoSlotRef, photoRef)

  useEffect(() => {
    document.title = portfolio.documentTitle
    document.documentElement.lang = portfolio.italian ? 'it' : 'en'
  }, [portfolio.documentTitle, portfolio.italian])

  // start the particle cloud once the browser is idle, so the text and the
  // first interactions are not slowed down by WebGL set-up
  useEffect(() => {
    const start = () => setParticlesOn(true)
    // not available in older Safari
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(start, { timeout: 2000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(start, 300)
    return () => window.clearTimeout(id)
  }, [])

  // panels fade in the first time they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        }),
      { threshold: 0.15 },
    )
    document
      .querySelectorAll('.reveal')
      .forEach((panel) => observer.observe(panel))
    return () => observer.disconnect()
  }, [])

  // once the big name leaves the screen, the top bar shows photo and name
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setNameVisible(entry.isIntersecting),
      { rootMargin: '-70px 0px 0px 0px' },
    )
    observer.observe(nameRef.current as Element)
    return () => observer.disconnect()
  }, [])

  const labels = [
    portfolio.home,
    portfolio.about.title,
    portfolio.skills.title,
    `${portfolio.experience.title} · ${portfolio.education.title}`,
    portfolio.contacts.title,
  ]
  const goTo = (index: number) =>
    (document.getElementById(SECTION_IDS[index]) as HTMLElement).scrollIntoView(
      { behavior: 'smooth' },
    )

  return (
    <div className="site">
      {particlesOn && (
        <Suspense fallback={null}>
          <ParticleField sectionIds={SECTION_IDS} />
        </Suspense>
      )}
      <div className="site-vignette" />
      <TopBar
        portfolio={portfolio}
        labels={labels}
        active={active}
        showIdentity={!nameVisible}
        onIdentityClick={() => goTo(0)}
        photoSlotRef={photoSlotRef}
      />
      <img
        className="flying-photo"
        ref={photoRef}
        src={portfolio.profile}
        alt={portfolio.name}
      />
      <SectionDots labels={labels} active={active} onSelect={goTo} />
      <main>
        <Hero
          id={SECTION_IDS[0]}
          portfolio={portfolio}
          nameRef={nameRef}
          photoPlaceholderRef={photoPlaceholderRef}
          onContactClick={() => goTo(CONTACTS_INDEX)}
        />
        <About id={SECTION_IDS[1]} portfolio={portfolio} />
        <Skills id={SECTION_IDS[2]} portfolio={portfolio} />
        <Journey id={SECTION_IDS[3]} portfolio={portfolio} />
        <Contacts id={SECTION_IDS[4]} portfolio={portfolio} />
      </main>
    </div>
  )
}
