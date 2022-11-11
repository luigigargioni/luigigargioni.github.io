import React, { useContext, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Fade } from 'react-awesome-reveal'

import './Navbar.css'
import { headerData } from '../../data/headerData'
import { ThemeContext } from '../../contexts/ThemeContext'
import {
  ClosebtnIcon,
  DrawerIconBsFillGearFill,
  DrawerIconFaFolderOpen,
  DrawerIconFaUser,
  DrawerIconHiDocumentText,
  DrawerIconIoHomeSharp,
  DrawerIconMdPhone,
  DrawerItem,
  DrawerLinks,
  MuiDrawer,
  NavMenu,
} from './Navbar.styled'

export const Navbar = () => {
  const { theme, setHandleDrawer } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = (open: boolean) => {
    setOpen(open)
    setHandleDrawer()
  }

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{headerData.name}</h1>
        <NavMenu
          onClick={() => handleDrawerOpen(true)}
          aria-label="Menu"
          id="navicon"
        />
      </div>
      <MuiDrawer
        variant="temporary"
        onClose={() => {
          handleDrawerOpen(false)
        }}
        anchor="left"
        open={open}
        classes={{ paper: 'paper' }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <ClosebtnIcon
            onClick={() => handleDrawerOpen(false)}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault()
                handleDrawerOpen(false)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close"
          />
        </div>
        <br />

        <div onClick={() => handleDrawerOpen(false)}>
          <div className="navLink--container">
            <Fade direction="left" style={{ width: '100%' }}>
              <HashLink to="/" smooth={true}>
                <DrawerItem>
                  <DrawerIconIoHomeSharp />
                  <DrawerLinks>Home</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade>

            <Fade direction="left" style={{ width: '100%' }}>
              <HashLink to="/#about" smooth={true}>
                <DrawerItem>
                  <DrawerIconFaUser />
                  <DrawerLinks>About</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade>

            <Fade direction="left" style={{ width: '100%' }}>
              <HashLink to="/#education" smooth={true}>
                <DrawerItem>
                  <DrawerIconHiDocumentText />
                  <DrawerLinks>Education</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade>

            <Fade direction="left" style={{ width: '100%' }}>
              <HashLink to="/#skills" smooth={true}>
                <DrawerItem>
                  <DrawerIconBsFillGearFill />
                  <DrawerLinks>Skills</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade>

            {/*             <Fade direction="left" style={{ width: '100%' }}>
              <HashLink to="/#projects" smooth={true}>
                <DrawerItem>
                  <DrawerIconFaFolderOpen />
                  <DrawerLinks>Projects</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade> */}

            <Fade direction="left">
              <HashLink to="/#contacts" smooth={true}>
                <DrawerItem>
                  <DrawerIconMdPhone />
                  <DrawerLinks>Contact</DrawerLinks>
                </DrawerItem>
              </HashLink>
            </Fade>
          </div>
        </div>
      </MuiDrawer>
    </div>
  )
}
