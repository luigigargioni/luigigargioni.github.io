import React, { useState } from 'react'
import { IoIosArrowDropupCircle } from 'react-icons/io'
import { styled } from '@mui/material/styles'

import { useCustomTheme } from 'style/themeProvider'
import './BackToTop.css'

const IconStyled = styled(IoIosArrowDropupCircle)(() => {
  const customTheme = useCustomTheme()
  return {
    fontSize: '2.5rem',
    color: customTheme.tertiary,
  }
})

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

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
      <button type="button" onClick={scrollToTop} aria-label="Back to top">
        <IconStyled />
      </button>
    </div>
  )
}
