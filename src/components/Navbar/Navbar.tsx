import React, { useContext, useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Fade } from 'react-awesome-reveal'
import { BiUser } from 'react-icons/bi'
import { BsCodeSlash, BsGear } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { IoSchoolOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'

import './Navbar.css'
import { customTheme } from 'style/theme'
import { headerDataEN, headerDataIT } from 'data/headerData'
import { CustomContext } from 'context'
import { aboutDataEN, aboutDataIT } from 'data/aboutData'
import { skillsTitleEN, skillsTitleIT } from 'data/skillsData'
import { experienceTitleEN, experienceTitleIT } from 'data/experienceData'
import { educationTitleEN, educationTitleIT } from 'data/educationData'
import { servicesTitleEN, servicesTitleIT } from 'data/servicesData'
import { contactsTitleEN, contactsTitleIT } from 'data/contactsData'
import { LanguageEnum } from 'utils/language'
import {
  ClosebtnIcon,
  DrawerItem,
  DrawerLinks,
  MuiDrawer,
  NavMenu,
} from './Navbar.style'

export const Navbar = () => {
  const { setDrawerOpen, drawerOpen, lang } = useContext(CustomContext)
  const [open, setOpen] = useState(false)
  const headerData = lang === LanguageEnum.EN ? headerDataEN : headerDataIT
  const aboutTitle =
    lang === LanguageEnum.EN ? aboutDataEN.title : aboutDataIT.title
  const skillsTitle = lang === LanguageEnum.EN ? skillsTitleEN : skillsTitleIT
  const experienceTitle =
    lang === LanguageEnum.EN ? experienceTitleEN : experienceTitleIT
  const educationTitle =
    lang === LanguageEnum.EN ? educationTitleEN : educationTitleIT
  const servicesTitle =
    lang === LanguageEnum.EN ? servicesTitleEN : servicesTitleIT
  const contactsTitle =
    lang === LanguageEnum.EN ? contactsTitleEN : contactsTitleIT

  const handleDrawerOpen = (value: boolean) => {
    setOpen(value)
    setDrawerOpen(!drawerOpen)
  }

  useEffect(() => {
    if (open && drawerOpen) document.body.style.overflowY = 'hidden'
    if (!open && !drawerOpen) document.body.style.removeProperty('overflow-y')
  }, [open, drawerOpen])

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: customTheme.secondary }}>{headerData.name}</h1>
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
                <DrawerLinks>{aboutTitle}</DrawerLinks>
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
                <DrawerLinks>{skillsTitle}</DrawerLinks>
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
                <DrawerLinks>{experienceTitle}</DrawerLinks>
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
                <DrawerLinks>{educationTitle}</DrawerLinks>
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
                <DrawerLinks>{servicesTitle}</DrawerLinks>
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
                <DrawerLinks>{contactsTitle}</DrawerLinks>
              </DrawerItem>
            </HashLink>
          </Fade>
        </div>
      </MuiDrawer>
    </div>
  )
}
