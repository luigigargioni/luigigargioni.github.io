import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'

type Props = { id: string; portfolio: Portfolio }

export const About = ({ id, portfolio }: Props) => (
  <section id={id} className="site-section site-section--right">
    <div className="panel reveal">
      <h2 className="kicker">01 — {portfolio.about.title}</h2>
      <p className="lead">{portfolio.about.lead}</p>
      <p className="body-text">{portfolio.about.body}</p>
    </div>
  </section>
)
