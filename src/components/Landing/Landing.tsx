import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HashLink } from 'react-router-hash-link'
import { IoMdSchool } from 'react-icons/io'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

import './Landing.css'
import { customTheme } from 'style/theme'
import { CustomContext } from 'context'
import { headerData } from 'data/headerData'
import { socialsData } from 'data/socialsData'

const ResumeBtn = styled(Button)(({ theme }) => ({
  color: customTheme.primary,
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  fontSize: '1rem',
  fontWeight: '500',
  height: '50px',
  fontFamily: 'var(--primaryFont)',
  border: `3px solid ${customTheme.primary}`,
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: customTheme.tertiary,
    color: customTheme.secondary,
    border: `3px solid ${customTheme.tertiary}`,
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
  },
}))

const ContactBtn = styled(Button)(({ theme }) => ({
  backgroundColor: customTheme.primary,
  color: customTheme.secondary,
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  height: '50px',
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: 'var(--primaryFont)',
  border: `3px solid ${customTheme.primary}`,
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: customTheme.secondary,
    color: customTheme.tertiary,
    border: `3px solid ${customTheme.tertiary}`,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const Landing = () => {
  const { drawerOpen } = useContext(CustomContext)

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: customTheme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="GitHub"
                />
              </a>
            )}
            {socialsData.stackOverflow && (
              <a
                href={socialsData.stackOverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FaStackOverflow
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="StackOverflow"
                />
              </a>
            )}
            {socialsData.scholar && (
              <a href={socialsData.scholar} target="_blank" rel="noreferrer">
                <IoMdSchool
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="GoogleScholar"
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? '0' : '1'}`,
            borderColor: customTheme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: customTheme.secondary }}
        >
          <div className="lcr--content" style={{ color: customTheme.tertiary }}>
            <h1>{headerData.name}</h1>
            <h2>{headerData.title}</h2>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              <i>{headerData.description}</i>
            </p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="CV_LUIGI_GARGIONI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ResumeBtn>Download CV</ResumeBtn>
                </a>
              )}
              <HashLink to="/#contacts" smooth>
                <ContactBtn>Contact</ContactBtn>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
