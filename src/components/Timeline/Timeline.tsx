import React from 'react'

import { TimelineEntry } from 'hooks/usePortfolio'

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
        <b className="timeline-title">{item.title}</b>
        <span className="timeline-place">{item.place}</span>
        <div className="timeline-desc">{item.description}</div>
      </div>
    ))}
  </>
)
