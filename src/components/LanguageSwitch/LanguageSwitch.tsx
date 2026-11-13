import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'

// The visible text ("IT", "EN") is the accessible name, so speech-input users
// can say what they see; the full language name is in the tooltip.
export const LanguageSwitch = ({ portfolio }: { portfolio: Portfolio }) => (
  <span className="lang-switch">
    <button
      className={portfolio.italian ? 'on' : ''}
      onClick={() => portfolio.setLanguage('it')}
      title="Italiano"
      lang="it"
      aria-pressed={portfolio.italian}
    >
      IT
    </button>
    /
    <button
      className={portfolio.italian ? '' : 'on'}
      onClick={() => portfolio.setLanguage('en')}
      title="English"
      lang="en"
      aria-pressed={!portfolio.italian}
    >
      EN
    </button>
  </span>
)
