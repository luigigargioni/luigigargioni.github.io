import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'
import { LanguageSwitch } from 'components/LanguageSwitch/LanguageSwitch'

type Props = {
  portfolio: Portfolio
  /** Section labels, in page order. */
  labels: string[]
  active: number
  /** Show the name: true once the hero name has scrolled out of view. */
  showIdentity: boolean
  onIdentityClick: () => void
  /** Where the flying profile photo docks. */
  photoSlotRef: React.Ref<HTMLSpanElement>
}

export const TopBar = ({
  portfolio,
  labels,
  active,
  showIdentity,
  onIdentityClick,
  photoSlotRef,
}: Props) => (
  <header className="topbar">
    <button
      className={`topbar-me${showIdentity ? ' on' : ''}`}
      onClick={onIdentityClick}
      tabIndex={showIdentity ? 0 : -1}
      aria-hidden={!showIdentity}
    >
      <span className="topbar-photo-slot" ref={photoSlotRef} />
      <span className="topbar-name">{portfolio.name}</span>
    </button>
    <span className="topbar-counter">
      0{active + 1} <i /> 0{labels.length} · {labels[active]}
    </span>
    <LanguageSwitch portfolio={portfolio} />
  </header>
)
