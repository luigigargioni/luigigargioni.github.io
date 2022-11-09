import React, { useState, useContext } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { styled } from '@mui/material/styles'

import { ThemeContext } from '../../contexts/ThemeContext'
import './BackToTop.css'
import { themeData } from 'data/themeData'

const IconStyled = styled(IoIosArrowDropupCircle)(() => ({
  fontSize: '3rem',
  color: themeData.theme.tertiary,
}))

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  const { theme } = useContext(ThemeContext)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <div style={{ display: visible ? 'inline' : 'none' }} className="backToTop">
      <button onClick={scrollToTop} aria-label="Back to top">
        <IconStyled />
      </button>
    </div>
  )
}
