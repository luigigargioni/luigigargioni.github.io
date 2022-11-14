import React, { useContext, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Fade } from 'react-awesome-reveal'
import { BiUser } from 'react-icons/bi'
import { BsCodeSlash, BsGear } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'

import './Navbar.css'
import { headerData } from '../../data/headerData'
import { ThemeContext } from '../../contexts/ThemeContext'
import {
  ClosebtnIcon,
  DrawerItem,
  DrawerLinks,
  MuiDrawer,
  NavMenu,
} from './Navbar.styled'

export const Navbar = () => {
  const { theme, setHandleDrawer } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = (value: boolean) => {
    setOpen(value)
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
        disableScrollLock
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

        <div className="navLink--container">
          <Fade direction="left" style={{ width: '100%' }}>
            <HashLink
              to="/#about"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <BiUser />
                <DrawerLinks>About</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>

          <Fade direction="left" style={{ width: '100%' }}>
            <HashLink
              to="/#skills"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <BsCodeSlash />
                <DrawerLinks>Skills</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>

          <Fade direction="left" style={{ width: '100%' }}>
            <HashLink
              to="/#experience"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <MdWorkOutline />
                <DrawerLinks>Experience</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>

          <Fade direction="left" style={{ width: '100%' }}>
            <HashLink
              to="/#education"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <IoSchoolOutline />
                <DrawerLinks>Education</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>

          <Fade direction="left" style={{ width: '100%' }}>
            <HashLink
              to="/#services"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <BsGear />
                <DrawerLinks>Services</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>

          <Fade direction="left">
            <HashLink
              to="/#contacts"
              smooth
              onClick={() => handleDrawerOpen(false)}
            >
              <DrawerItem>
                <AiOutlinePhone />
                <DrawerLinks>Contact</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>
        </div>
      </MuiDrawer>
    </div>
  )
}
