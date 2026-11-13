import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'

export const Socials = ({ portfolio }: { portfolio: Portfolio }) => (
  <div className="socials">
    {portfolio.socials.map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        aria-label={social.name}
        title={social.name}
      >
        {social.icon}
      </a>
    ))}
  </div>
)
