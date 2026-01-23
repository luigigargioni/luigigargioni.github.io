import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HashLink } from 'react-router-hash-link'
import { IoMdSchool } from 'react-icons/io'
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaResearchgate,
} from 'react-icons/fa'

import './Landing.css'
import { customTheme } from 'style/theme'
import { CustomContext } from 'context'
import { headerDataEN, headerDataIT } from 'data/headerData'
import { socialsData } from 'data/socialsData'
import ITflag from 'assets/svg/it.svg'
import ENflag from 'assets/svg/gb.svg'
import { AiOutlineDownload } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { LocalStorageKey, setToLocalStorage } from 'utils/localStorageUtils'
import { documentTitleEN, documentTitleIT, LanguageEnum } from 'utils/language'

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
  const { drawerOpen, setLang, lang } = useContext(CustomContext)
  const headerData = lang === LanguageEnum.EN ? headerDataEN : headerDataIT

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
            {socialsData.scholar && (
              <a href={socialsData.scholar} target="_blank" rel="noreferrer">
                <IoMdSchool
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="GoogleScholar"
                />
              </a>
            )}
            {socialsData.researchGate && (
              <a
                href={socialsData.researchGate}
                target="_blank"
                rel="noreferrer"
              >
                <FaResearchgate
                  className="landing--social"
                  style={{ color: customTheme.secondary }}
                  aria-label="ResearchGate"
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
            <h2 /* style={{ textAlign: 'center' }} */>{headerData.title}</h2>
            <p style={{ display: 'flex', justifyContent: 'center' }}>
              <i>{headerData.description}</i>
            </p>
            <div className="language-container">
              <img
                src={ENflag}
                alt="EN-flag"
                className="language-flag"
                style={{
                  marginRight: '1rem',
                  borderColor:
                    lang === LanguageEnum.EN
                      ? customTheme.primary
                      : customTheme.tertiary,
                }}
                onClick={() => {
                  setLang(LanguageEnum.EN)
                  setToLocalStorage(LocalStorageKey.LANG, LanguageEnum.EN)
                  document.title = documentTitleEN
                }}
                aria-hidden="true"
              />
              <img
                src={ITflag}
                alt="IT-flag"
                className="language-flag"
                style={{
                  borderColor:
                    lang === LanguageEnum.IT
                      ? customTheme.primary
                      : customTheme.tertiary,
                }}
                onClick={() => {
                  setLang(LanguageEnum.IT)
                  setToLocalStorage(LocalStorageKey.LANG, LanguageEnum.IT)
                  document.title = documentTitleIT
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
              <HashLink to="/#contacts" smooth>
                <ContactBtn startIcon={<FiSend />}>
                  {headerData.contactBtn}
                </ContactBtn>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
