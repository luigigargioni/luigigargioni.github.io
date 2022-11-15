import React, { useContext } from 'react'
import { FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa'
import { FiPhone, FiAtSign } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { IoMdSchool } from 'react-icons/io'
import { ThemeContext } from '../../contexts/ThemeContext'

import { socialsData } from '../../data/socialsData'
import { contactsData } from '../../data/contactsData'
import './Contacts.css'
import { DetailsIcon, SocialIcon } from './Contacts.style'

export const Contacts = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="contacts"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              target="_blank"
              className="personal-details"
              rel="noreferrer"
            >
              <DetailsIcon>
                <FiAtSign />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <DetailsIcon>
                <FiPhone />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <a
              href="https://goo.gl/maps/zeqVc8fyGjZi5yUMA"
              target="_blank"
              className="personal-details"
              rel="noreferrer"
            >
              <DetailsIcon>
                <HiOutlineLocationMarker />
              </DetailsIcon>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </a>

            <div className="socialmedia-icons">
              {socialsData.github && (
                <SocialIcon
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub aria-label="GitHub" />
                </SocialIcon>
              )}
              {socialsData.linkedIn && (
                <SocialIcon
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn aria-label="LinkedIn" />
                </SocialIcon>
              )}
              {socialsData.stackOverflow && (
                <SocialIcon
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaStackOverflow aria-label="Stack Overflow" />
                </SocialIcon>
              )}
              {socialsData.scholar && (
                <SocialIcon
                  href={socialsData.scholar}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoMdSchool aria-label="Stack Overflow" />
                </SocialIcon>
              )}
            </div>
          </div>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  )
}
