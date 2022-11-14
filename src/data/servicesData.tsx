import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsCodeSlash, BsGear } from 'react-icons/bs'
import { FaChalkboardTeacher, FaPeopleCarry } from 'react-icons/fa'

export type ServiceType = {
  id: number
  title: string
  icon: React.ReactNode
}

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: 'Web Application',
    icon: <BiWorld />,
  },
  {
    id: 2,
    title: 'Back-end Development',
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
