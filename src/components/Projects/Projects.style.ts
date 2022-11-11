import { styled } from '@mui/material/styles'

import { themeData } from 'data/themeData'
import { HiArrowRight } from 'react-icons/hi'

const { theme } = themeData

export const ViewAllBtn = styled('button')(() => ({
  color: theme.tertiary,
  backgroundColor: theme.primary,
  transition: 'color 0.2s',
  '&:hover': {
    color: theme.secondary,
    backgroundColor: theme.primary,
  },
}))

export const ViewArr = styled(HiArrowRight)(() => ({
  color: theme.tertiary,
  backgroundColor: theme.secondary70,
  width: '40px',
  height: '40px',
  padding: '0.5rem',
  fontSize: '1.05rem',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  '&:hover': {
    color: theme.tertiary,
    backgroundColor: theme.secondary,
  },
}))
