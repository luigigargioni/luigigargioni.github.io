import React from 'react'
import { FiSend } from 'react-icons/fi'

import { Portfolio } from 'hooks/usePortfolio'
import { Socials } from 'components/Socials/Socials'

type Props = {
  id: string
  portfolio: Portfolio
  /** Ref on the big name, so the page can tell when it scrolls out of view. */
  nameRef: React.Ref<HTMLHeadingElement>
  /** Where the flying profile photo starts: it only keeps the space. */
  photoPlaceholderRef: React.Ref<HTMLSpanElement>
  onContactClick: () => void
}

export const Hero = ({
  id,
  portfolio,
  nameRef,
  photoPlaceholderRef,
  onContactClick,
}: Props) => (
  <section id={id} className="site-section site-section--hero">
    {/* no fade-in here: the name is the first thing to show */}
    <div className="panel hero-panel">
      <div className="hero-who">
        <span className="hero-photo-placeholder" ref={photoPlaceholderRef} />
        <p className="kicker">{portfolio.role}</p>
      </div>
      <h1 ref={nameRef} aria-label={portfolio.name}>
        <span>Luigi</span>
        <span className="hero-outline">Gargioni</span>
      </h1>
      <blockquote className="hero-quote">
        &ldquo;{portfolio.quote}&rdquo;
        <cite>— {portfolio.quoteAuthor}</cite>
      </blockquote>
      <div className="hero-actions">
        <button className="button" onClick={onContactClick}>
          <FiSend /> {portfolio.contactButton}
        </button>
        <Socials portfolio={portfolio} />
      </div>
    </div>
  </section>
)
