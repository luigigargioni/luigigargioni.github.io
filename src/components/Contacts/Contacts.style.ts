import { styled } from '@mui/material/styles'
import { themeData } from 'data/themeData'

const { theme } = themeData

export const SocialIcon = styled('a')(() => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '21px',
  backgroundColor: theme.primary,
  color: theme.secondary,
  transition: '250ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
}))

export const DetailsIcon = styled('div')(() => ({
  backgroundColor: theme.primary,
  color: theme.secondary,
  borderRadius: '50%',
  width: '45px',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '23px',
  transition: '250ms ease-in-out',
  flexShrink: 0,
  '&:hover': {
    transform: 'scale(1.1)',
    color: theme.secondary,
    backgroundColor: theme.tertiary,
  },
}))
