import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

export const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        @ {headerData.name} {new Date().getFullYear()}
      </p>
    </div>
  )
}
