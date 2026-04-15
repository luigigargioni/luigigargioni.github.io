import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HashLink } from 'react-router-hash-link'
import { IoMdSchool } from 'react-icons/io'
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaResearchgate,
  FaOrcid,
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

import './Landing.css'
import { customTheme } from 'style/theme'
import { CustomContext } from 'context'
import { socialsData } from 'data/socialsData'
import ITflag from 'assets/svg/it.svg'
import ENflag from 'assets/svg/gb.svg'
// import { AiOutlineDownload } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import profile from 'assets/jpg/profile.jpg'

/*
const ResumeBtn = styled(Button)(({ theme }) => ({
  color: 'var(--primary)',
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  fontSize: '1rem',
  fontWeight: '500',
  height: '50px',
  fontFamily: 'var(--primaryFont)',
  border: '3px solid var(--primary)',
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: 'var(--tertiary)',
    color: 'var(--secondary)',
    border: '3px solid var(--tertiary)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
  },
}))
  */

const ContactBtn = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--primary)',
  color: 'var(--secondary)',
  borderRadius: '30px',
  textTransform: 'inherit',
  textDecoration: 'none',
  width: '150px',
  height: '50px',
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: 'var(--primaryFont)',
  border: '3px solid var(--primary)',
  transition: '100ms ease-out',
  '&:hover': {
    backgroundColor: 'var(--secondary)',
    color: 'var(--tertiary)',
    border: '3px solid var(--tertiary)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const Landing = () => {
  const { drawerOpen } = useContext(CustomContext)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    document.title = t('documentTitle')
  }, [i18n.language, t])

  return (
    <div className="landing">
      <div className="landing--container">
        <div
          className="landing--container-left"
          style={{ backgroundColor: customTheme.primary }}
        >
          <div className="lcl--content">
            {socialsData.linkedIn && (
              <a
                href={socialsData.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
            {socialsData.scholar && (
              <a
                href={socialsData.scholar}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar"
              >
                <IoMdSchool
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
            {socialsData.researchGate && (
              <a
                href={socialsData.researchGate}
                target="_blank"
                rel="noreferrer"
                aria-label="ResearchGate"
              >
                <FaResearchgate
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
            {socialsData.orcId && (
              <a
                href={socialsData.orcId}
                target="_blank"
                rel="noreferrer"
                aria-label="ORCID"
              >
                <FaOrcid
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
            {socialsData.github && (
              <a
                href={socialsData.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
            {socialsData.stackOverflow && (
              <a
                href={socialsData.stackOverflow}
                target="_blank"
                rel="noreferrer"
                aria-label="Stack Overflow"
              >
                <FaStackOverflow
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                />
              </a>
            )}
          </div>
        </div>
        <img
          src={profile}
          alt=""
          className="landing--img"
          fetchPriority="high"
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
            <h1>{t('header.name')}</h1>
            <h2 /* style={{ textAlign: 'center' }} */>{t('header.title')}</h2>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              <i>{t('header.description')}</i>
            </p>
            <div className="language-container">
              <img
                src={ENflag}
                alt="EN-flag"
                className="language-flag"
                width="40"
                height="30"
                style={{
                  marginRight: '1rem',
                  borderColor:
                    i18n.language === 'en'
                      ? customTheme.primary
                      : customTheme.tertiary,
                }}
                onClick={() => {
                  i18n.changeLanguage('en')
                  document.title = t('documentTitle', { lng: 'en' })
                }}
                aria-hidden="true"
              />
              <img
                src={ITflag}
                alt="IT-flag"
                className="language-flag"
                width="40"
                height="30"
                style={{
                  borderColor:
                    i18n.language === 'it'
                      ? customTheme.primary
                      : customTheme.tertiary,
                }}
                onClick={() => {
                  i18n.changeLanguage('it')
                  document.title = t('documentTitle', { lng: 'it' })
                }}
                aria-hidden="true"
              />
            </div>
            <div className="lcr-buttonContainer">
              {/*
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="CV_LUIGI_GARGIONI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ResumeBtn startIcon={<AiOutlineDownload />}>
                    {headerData.resumeBtn}
                  </ResumeBtn>
                </a>
              )}
                */}
              <HashLink
                to="/#contacts"
                smooth
                aria-label={t('header.contactBtn')}
              >
                <ContactBtn startIcon={<FiSend />}>
                  {t('header.contactBtn')}
                </ContactBtn>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
