import React from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from 'hooks/useTheme'
import './ThemeToggle.css'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-icon">
        {theme === 'light' ? (
          <BsMoon className="icon" />
        ) : (
          <BsSun className="icon" />
        )}
      </div>
    </button>
  )
}
