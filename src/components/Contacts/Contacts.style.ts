import { styled } from '@mui/material/styles'
// Theme colors will be passed as props

export const SocialIcon = styled('a')(() => ({
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '21px',
  backgroundColor: 'var(--primary)',
  color: 'var(--secondary)',
  transition: '250ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: 'var(--secondary)',
    backgroundColor: 'var(--tertiary)',
  },
}))

export const DetailsIcon = styled('div')(() => ({
  backgroundColor: 'var(--primary)',
  color: 'var(--secondary)',
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
    color: 'var(--secondary)',
    backgroundColor: 'var(--tertiary)',
  },
}))
