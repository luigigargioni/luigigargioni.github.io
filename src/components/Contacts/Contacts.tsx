import React from 'react'
import { FiMapPin } from 'react-icons/fi'

import { Portfolio } from 'hooks/usePortfolio'
import { Socials } from 'components/Socials/Socials'

type Props = { id: string; portfolio: Portfolio }

export const Contacts = ({ id, portfolio }: Props) => (
  <section
    id={id}
    className="site-section site-section--wide site-section--end"
  >
    <div className="panel reveal">
      <h2 className="kicker">05 — {portfolio.contacts.title}</h2>
      <a className="contact-mail" href={`mailto:${portfolio.contacts.email}`}>
        {portfolio.contacts.email}
      </a>
      <a
        className="contact-address"
        href={portfolio.contacts.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <FiMapPin /> {portfolio.contacts.address}
      </a>
      <Socials portfolio={portfolio} />
      <p className="services">
        <b>{portfolio.services.title}</b>
        {portfolio.services.items.map((service) => (
          <span key={service.id}>
            {service.icon}
            {service.title}
          </span>
        ))}
      </p>
      <footer className="copyright">{portfolio.copyright}</footer>
    </div>
  </section>
)
