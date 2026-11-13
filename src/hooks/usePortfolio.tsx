import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaGithub,
  FaLinkedinIn,
  FaOrcid,
  FaResearchgate,
  FaStackOverflow,
} from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'

import profile from 'assets/jpg/profile.jpg'
import { contactsDataEN, contactsDataIT } from 'data/contactsData'
import { educationDataEN, educationDataIT } from 'data/educationData'
import { experienceDataEN, experienceDataIT } from 'data/experienceData'
import { servicesDataEN, servicesDataIT } from 'data/servicesData'
import { skillsAIRobotics, skillsWebSoftware } from 'data/skillsData'
import { socialsData } from 'data/socialsData'

export type TimelineEntry = {
  key: string
  title: string
  titleUrl: string
  place: string
  placeUrl: string
  start: string
  end: string
  description: React.ReactNode
  /** Still ongoing: the end is a word ("Present") rather than a MM/YYYY date. */
  current: boolean
}

const YEAR = new Date().getFullYear()
const MAPS_URL = 'https://maps.app.goo.gl/BgjmGpkdn1vyqh6x7'

const isDate = (value: string) => /^\d{2}\/\d{4}$/.test(value)

/**
 * Everything the page shows, in the current language: short texts come from
 * the i18n files, structured content (timeline, skills, links) from src/data.
 */
export const usePortfolio = () => {
  const { t, i18n } = useTranslation()
  const italian = i18n.resolvedLanguage === 'it'
  const contacts = italian ? contactsDataIT : contactsDataEN

  // most recent first, as in the data files' ids
  const experience: TimelineEntry[] = [
    ...(italian ? experienceDataIT : experienceDataEN),
  ]
    .sort((a, b) => b.id - a.id)
    .map((e) => ({
      key: `experience-${e.id}`,
      title: e.jobtitle,
      titleUrl: '',
      place: e.company,
      placeUrl: e.companyUrl,
      start: e.startYear,
      end: e.endYear,
      description: e.description,
      current: !isDate(e.endYear),
    }))

  const education: TimelineEntry[] = [
    ...(italian ? educationDataIT : educationDataEN),
  ]
    .sort((a, b) => b.id - a.id)
    .map((e) => ({
      key: `education-${e.id}`,
      title: e.course,
      titleUrl: e.courseUrl,
      place: e.institution,
      placeUrl: e.institutionUrl,
      start: e.startYear,
      end: e.endYear,
      description: e.description,
      current: false,
    }))

  return {
    italian,
    setLanguage: (language: 'en' | 'it') => i18n.changeLanguage(language),
    documentTitle: t('documentTitle'),
    profile,
    name: t('header.name'),
    role: t('header.title'),
    quote: t('header.quote'),
    quoteAuthor: t('header.quoteAuthor'),
    contactButton: t('header.contactBtn'),
    home: t('nav.home'),
    about: {
      title: t('about.title'),
      lead: t('about.lead'),
      body: t('about.body'),
    },
    skills: {
      title: t('skills.title'),
      groups: [
        { title: t('skills.groups.ai'), items: skillsAIRobotics },
        { title: t('skills.groups.web'), items: skillsWebSoftware },
      ],
    },
    experience: { title: t('experience.title'), items: experience },
    education: { title: t('education.title'), items: education },
    services: {
      title: t('services.title'),
      items: italian ? servicesDataIT : servicesDataEN,
    },
    contacts: {
      title: t('contacts.title'),
      email: contacts.email,
      address: contacts.address,
      mapsUrl: MAPS_URL,
    },
    socials: [
      { name: 'LinkedIn', url: socialsData.linkedIn, icon: <FaLinkedinIn /> },
      {
        name: 'Google Scholar',
        url: socialsData.scholar,
        icon: <IoMdSchool />,
      },
      {
        name: 'ResearchGate',
        url: socialsData.researchGate,
        icon: <FaResearchgate />,
      },
      { name: 'ORCID', url: socialsData.orcId, icon: <FaOrcid /> },
      { name: 'GitHub', url: socialsData.github, icon: <FaGithub /> },
      {
        name: 'Stack Overflow',
        url: socialsData.stackOverflow,
        icon: <FaStackOverflow />,
      },
    ],
    copyright: `© ${t('header.name')} ${YEAR}`,
  }
}

export type Portfolio = ReturnType<typeof usePortfolio>
