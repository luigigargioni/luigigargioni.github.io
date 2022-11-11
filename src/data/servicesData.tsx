import React from 'react'
import { BiShoppingBag, BiPencil, BiWorld } from 'react-icons/bi'
import { BsCodeSlash, BsClipboardData, BsGear } from 'react-icons/bs'
import { AiOutlineMail, AiFillAudio } from 'react-icons/ai'
import {
  FaInternetExplorer,
  FaChalkboardTeacher,
  FaCameraRetro,
  FaPinterest,
  FaVideo,
  FaTabletAlt,
  FaRegNewspaper,
  FaPeopleCarry,
} from 'react-icons/fa'

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
