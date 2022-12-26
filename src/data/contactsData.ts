export const contactsTitleEN = 'Contacts'
export const contactsTitleIT = 'Contatti'

type ContactsType = {
  email: string
  phone: string
  address: string
}

export const contactsDataEmail = 'luigi.gargioni@gmail.com'
export const contactsDataPhone = '+39 3343404482'

export const contactsDataEN: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Gottolengo, Brescia, Italy',
}

export const contactsDataIT: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Gottolengo, Brescia, Italia',
}
