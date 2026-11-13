import React from 'react'

import { Portfolio } from 'hooks/usePortfolio'
import { Timeline } from 'components/Timeline/Timeline'

type Props = { id: string; portfolio: Portfolio }

/** Experience and education side by side. */
export const Journey = ({ id, portfolio }: Props) => (
  <section id={id} className="site-section site-section--wide">
    <div className="panel reveal">
      <div className="journey-columns">
        <div>
          <h2 className="kicker">03 — {portfolio.experience.title}</h2>
          <Timeline items={portfolio.experience.items} />
        </div>
        <div>
          <h2 className="kicker">04 — {portfolio.education.title}</h2>
          <Timeline items={portfolio.education.items} />
        </div>
      </div>
    </div>
  </section>
)
