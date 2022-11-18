import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsCodeSlash, BsGear } from 'react-icons/bs'
import { FaChalkboardTeacher, FaPeopleCarry } from 'react-icons/fa'

export const servicesTitleEN = 'Services'
export const servicesTitleIT = 'Servizi'
export const servicesDescriptionEN =
  'These are some of the services I offer. Reach out to me if I can help you with any!'
export const servicesDescriptionIT =
  'Questi sono alcuni dei servizi che offro. Contattami se posso aiutarti in qualche modo!'

export type ServiceType = {
  id: number
  title: string
  icon: React.ReactNode
}

export const servicesDataEN: ServiceType[] = [
  {
    id: 1,
    title: 'Web Application',
    icon: <BiWorld />,
  },
  {
    id: 2,
    title: 'BackEnd Development',
    icon: <BsCodeSlash />,
  },
  {
    id: 3,
    title: 'Consulting',
    icon: <FaPeopleCarry />,
  },
  {
    id: 4,
    title: 'Technical Support',
    icon: <BsGear />,
  },
  {
    id: 5,
    title: 'Tutoring',
    icon: <FaChalkboardTeacher />,
  },
]

export const servicesDataIT: ServiceType[] = [
  {
    id: 1,
    title: 'Applicazioni Web',
    icon: <BiWorld />,
  },
  {
    id: 2,
    title: 'Sviluppo BackEnd',
    icon: <BsCodeSlash />,
  },
  {
    id: 3,
    title: 'Consulenza',
    icon: <FaPeopleCarry />,
  },
  {
    id: 4,
    title: 'Supporto Tecnico',
    icon: <BsGear />,
  },
  {
    id: 5,
    title: 'Tutoraggio',
    icon: <FaChalkboardTeacher />,
  },
]
