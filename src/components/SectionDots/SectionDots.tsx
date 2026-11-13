import React from 'react'

type Props = {
  /** Section labels, in page order. */
  labels: string[]
  active: number
  onSelect: (index: number) => void
}

export const SectionDots = ({ labels, active, onSelect }: Props) => (
  <nav className="section-dots">
    {labels.map((label, index) => (
      <button
        key={label}
        className={index === active ? 'on' : ''}
        onClick={() => onSelect(index)}
        aria-label={label}
        aria-current={index === active}
      >
        <span>{label}</span>
      </button>
    ))}
  </nav>
)
