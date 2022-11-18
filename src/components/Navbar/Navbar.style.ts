import { Drawer } from '@mui/material'
import { styled } from '@mui/material/styles'
import { AiOutlineClose } from 'react-icons/ai'
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5'

import { customTheme } from 'style/theme'
import { FaFolderOpen, FaUser } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'
import { BsFillGearFill } from 'react-icons/bs'
import { MdPhone } from 'react-icons/md'

export const NavMenu = styled(IoMenuSharp)(() => ({
  fontSize: '2.5rem',
  color: customTheme.tertiary,
  cursor: 'pointer',
  transform: 'translateY(-10px)',
  transition: 'color 0.3s',
  position: 'fixed',
  top: '30px',
  right: '30px',
  '&:hover': {
    color: customTheme.primary,
  },
}))

export const MuiDrawer = styled(Drawer)(({ theme: t }) => ({
  '.paper': {
    padding: '0em 1.8em',
    width: '16em',
    fontFamily: ' var(--primaryFont)',
    fontStyle: ' normal',
    fontWeight: ' normal',
    fontSize: ' 24px',
    background: customTheme.secondary,
    // overflow: 'hidden',
    overflowY: 'auto',
    borderTopRightRadius: '40px',
    borderBottomRightRadius: '40px',
    [t.breakpoints.down('sm')]: {
      width: '12em',
    },
  },
}))

export const ClosebtnIcon = styled(AiOutlineClose)(({ theme: t }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  color: customTheme.primary,
  position: 'absolute',
  right: 40,
  top: 40,
  transition: 'color 0.2s',
  '&:hover': {
    color: customTheme.tertiary,
  },
  [t.breakpoints.down('sm')]: {
    right: 20,
    top: 20,
  },
}))

export const DrawerItem = styled('div')(({ theme: t }) => ({
  margin: '1.5rem auto',
  borderRadius: '78.8418px',
  background: customTheme.secondary,
  color: customTheme.primary,
  width: '85%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 30px',
  boxSizing: 'border-box',
  border: '2px solid',
  borderColor: customTheme.primary,
  transition: 'background-color 0.2s, color 0.2s',
  '&:hover': {
    background: customTheme.primary,
    color: customTheme.secondary,
  },
  [t.breakpoints.down('sm')]: {
    width: '100%',
    padding: '0 25px',
    height: '55px',
  },
}))

export const DrawerLinks = styled('span')(({ theme: t }) => ({
  fontFamily: 'var(--primaryFont)',
  width: '100%',
  fontSize: '1.3rem',
  fontWeight: 600,
  marginLeft: '1rem',
  [t.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
  },
}))

export const DrawerIconIoHomeSharp = styled(IoHomeSharp)(({ theme: t }) => ({
  fontSize: '1.6rem',
  [t.breakpoints.down('sm')]: {
    fontSize: '1.385rem',
  },
}))

export const DrawerIconFaUser = styled(FaUser)(({ theme: t }) => ({
  fontSize: '1.6rem',
  [t.breakpoints.down('sm')]: {
    fontSize: '1.385rem',
  },
}))

export const DrawerIconHiDocumentText = styled(HiDocumentText)(
  ({ theme: t }) => ({
    fontSize: '1.6rem',
    [t.breakpoints.down('sm')]: {
      fontSize: '1.385rem',
    },
  })
)

export const DrawerIconBsFillGearFill = styled(BsFillGearFill)(
  ({ theme: t }) => ({
    fontSize: '1.6rem',
    [t.breakpoints.down('sm')]: {
      fontSize: '1.385rem',
    },
  })
)

export const DrawerIconFaFolderOpen = styled(FaFolderOpen)(({ theme: t }) => ({
  fontSize: '1.6rem',
  [t.breakpoints.down('sm')]: {
    fontSize: '1.385rem',
  },
}))

export const DrawerIconMdPhone = styled(MdPhone)(({ theme: t }) => ({
  fontSize: '1.6rem',
  [t.breakpoints.down('sm')]: {
    fontSize: '1.385rem',
  },
}))
