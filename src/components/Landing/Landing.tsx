import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HashLink } from 'react-router-hash-link'

import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'
import { themeData } from 'data/themeData'
import { IoMdSchool } from 'react-icons/io'

const ResumeBtn = styled(Button)(({ theme }) => ({
  color: themeData.theme.primary,
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  fontSize: '1rem',
  fontWeight: '500',
  height: '50px',
  fontFamily: 'var(--primaryFont)',
  border: `3px solid ${themeData.theme.primary}`,
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: themeData.theme.tertiary,
    color: themeData.theme.secondary,
    border: `3px solid ${themeData.theme.tertiary}`,
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
  },
}))

const ContactBtn = styled(Button)(({ theme }) => ({
  backgroundColor: themeData.theme.primary,
  color: themeData.theme.secondary,
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  height: '50px',
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: 'var(--primaryFont)',
  border: `3px solid ${themeData.theme.primary}`,
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: themeData.theme.secondary,
    color: themeData.theme.tertiary,
    border: `3px solid ${themeData.theme.tertiary}`,
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext)

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <FaLinkedin
                  className="landing--social"
                  style={{ color: theme.secondary }}
                  aria-label="LinkedIn"
                />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <FaGithub
                  className="landing--social"
                  style={{ color: theme.secondary }}
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
                  style={{ color: theme.secondary }}
                  aria-label="StackOverflow"
                />
              </a>
            )}
            {socialsData.scholar && (
              <a href={socialsData.scholar} target="_blank" rel="noreferrer">
                <IoMdSchool
                  className="landing--social"
                  style={{ color: theme.secondary }}
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
            borderColor: theme.secondary,
          }}
        />
        <div
          className="landing--container-right"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <h1>{headerData.name}</h1>
            <h2>{headerData.title}</h2>
            <p>
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
              <HashLink to="/#contacts" smooth={true}>
                <ContactBtn>Contact</ContactBtn>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
