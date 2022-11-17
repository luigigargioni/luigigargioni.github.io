import React from 'react'
import './Footer.css'
import { customTheme } from 'style/theme'
import { headerData } from 'data/headerData'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export const Footer = () => (
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
    </p>
  </div>
)
