import React from 'react'
import './Footer.css'
import { customTheme } from 'style/theme'
import { headerData } from 'data/headerData'

export const Footer = () => (
  <div className="footer" style={{ backgroundColor: customTheme.secondary }}>
    <p style={{ color: customTheme.tertiary }}>
      @ {headerData.name} {new Date().getFullYear()}
    </p>
  </div>
)
