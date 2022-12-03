import resumeEN from 'assets/pdf/CV_LUIGI_GARGIONI_EN.pdf'
import resumeIT from 'assets/pdf/CV_LUIGI_GARGIONI_IT.pdf'
import profile from 'assets/jpg/profile.jpg'
import { contactsTitleEN, contactsTitleIT } from './contactsData'

type HeaderType = {
  name: string
  title: string
  description: string
  image: string
  resumePdf: string
  resumeBtn: string
  contactBtn: string
}

export const headerDataEN: HeaderType = {
  name: 'Luigi Gargioni',
  title: 'Computer Engineer',
  description: '"There is beauty when something works and works intuitively"',
  image: profile,
  resumePdf: resumeEN,
  resumeBtn: 'Resume',
  contactBtn: contactsTitleEN,
}

export const headerDataIT: HeaderType = {
  name: 'Luigi Gargioni',
  title: 'Ingegnere Informatico',
  description: '"There is beauty when something works and works intuitively"',
  image: profile,
  resumePdf: resumeIT,
  resumeBtn: 'Curriculum',
  contactBtn: contactsTitleIT,
}
