import resume from 'assets/pdf/CV_LUIGI_GARGIONI.pdf'
import profile from 'assets/jpg/profile.jpg'

type HeaderType = {
  name: string
  title: string
  description: string
  image: string
  resumePdf: string
}

export const headerData: HeaderType = {
  name: 'Luigi Gargioni',
  title: 'Computer Engineer',
  description: '"There is beauty when something works and works intuitively"',
  image: profile,
  resumePdf: resume,
}
