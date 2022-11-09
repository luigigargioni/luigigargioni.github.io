import { styled } from '@mui/material/styles'
import { themeData } from 'data/themeData'
import { FaCode, FaPlay } from 'react-icons/fa'

const { theme } = themeData

export const IconBtn = styled('a')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: 50,
  border: `2px solid ${theme.tertiary}`,
  color: theme.tertiary,
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: theme.secondary,
    color: theme.primary,
    transform: 'scale(1.1)',
    border: `2px solid ${theme.secondary}`,
  },
}))

export const IconFaPlay = styled(FaPlay)(() => ({
  fontSize: '1.1rem',
  transition: 'all 0.2s',
  '&:hover': {},
}))

export const IconFaCode = styled(FaCode)(() => ({
  fontSize: '1.1rem',
  transition: 'all 0.2s',
  '&:hover': {},
}))
