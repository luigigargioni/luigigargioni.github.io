import React from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import { useCustomTheme } from 'style/themeProvider'
import { AiOutlineCopyrightCircle, AiOutlineHighlight } from 'react-icons/ai'

export const Footer = () => {
  const { t } = useTranslation()
  const customTheme = useCustomTheme()

  return (
    <div className="footer" style={{ backgroundColor: customTheme.secondary }}>
      <p
        style={{
          color: customTheme.tertiary,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AiOutlineCopyrightCircle style={{ marginRight: '0.5rem' }} />{' '}
        {t('header.name')} {new Date().getFullYear()}
        {' - '}
        <a
          href="https://reactjsexample.com/developer-portfolio-built-with-the-help-of-a-react-template/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="React Portfolio Template"
        >
          <AiOutlineHighlight style={{ marginLeft: '0.5rem' }} />
          {' Template'}
        </a>
      </p>
    </div>
  )
}
