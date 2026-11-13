import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'
import { FaChalkboardTeacher, FaPeopleCarry } from 'react-icons/fa'

export type ServiceType = {
  id: number
  title: string
  icon: React.ReactNode
}

export const servicesDataEN: ServiceType[] = [
  { id: 1, title: 'Web Applications', icon: <BiWorld /> },
  { id: 2, title: 'Backend Development', icon: <BsCodeSlash /> },
  { id: 3, title: 'Consulting', icon: <FaPeopleCarry /> },
  { id: 4, title: 'Tutoring', icon: <FaChalkboardTeacher /> },
]

export const servicesDataIT: ServiceType[] = [
  { id: 1, title: 'Applicazioni Web', icon: <BiWorld /> },
  { id: 2, title: 'Sviluppo Backend', icon: <BsCodeSlash /> },
  { id: 3, title: 'Consulenza', icon: <FaPeopleCarry /> },
  { id: 4, title: 'Tutoraggio', icon: <FaChalkboardTeacher /> },
]
