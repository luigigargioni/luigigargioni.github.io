import React, { useContext } from 'react'
import './Footer.css'
import { useCustomTheme } from 'style/themeProvider'
import { headerDataEN, headerDataIT } from 'data/headerData'
import { AiOutlineCopyrightCircle, AiOutlineHighlight } from 'react-icons/ai'
import { CustomContext } from 'context'
import { LanguageEnum } from 'utils/language'

export const Footer = () => {
  const { lang } = useContext(CustomContext)
  const customTheme = useCustomTheme()
  const headerData = lang === LanguageEnum.EN ? headerDataEN : headerDataIT

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
        {headerData.name} {new Date().getFullYear()}
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
