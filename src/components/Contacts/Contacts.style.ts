import { styled } from '@mui/material/styles'
import { customTheme } from 'style/theme'

export const SocialIcon = styled('a')(() => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '21px',
  backgroundColor: customTheme.primary,
  color: customTheme.secondary,
  transition: '250ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: customTheme.secondary,
    backgroundColor: customTheme.tertiary,
  },
}))

export const DetailsIcon = styled('div')(() => ({
  backgroundColor: customTheme.primary,
  color: customTheme.secondary,
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
    color: customTheme.secondary,
    backgroundColor: customTheme.tertiary,
  },
}))
