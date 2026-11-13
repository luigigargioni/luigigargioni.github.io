import React from 'react'

import { TimelineEntry } from 'hooks/usePortfolio'

const MaybeLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  )

export const Timeline = ({ items }: { items: TimelineEntry[] }) => (
  <>
    {items.map((item) => (
      <div
        key={item.key}
        className={`timeline-item${item.current ? ' live' : ''}`}
      >
        <span className="timeline-when">
          {item.start ? `${item.start} — ${item.end}` : item.end}
        </span>
        <b className="timeline-title">
          <MaybeLink href={item.titleUrl}>{item.title}</MaybeLink>
        </b>
        <span className="timeline-place">
          <MaybeLink href={item.placeUrl}>{item.place}</MaybeLink>
        </span>
        <div className="timeline-desc">{item.description}</div>
      </div>
    ))}
  </>
)
