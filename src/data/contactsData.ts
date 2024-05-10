export const contactsTitleEN = 'Contacts'
export const contactsTitleIT = 'Contatti'

type ContactsType = {
  email: string
  phone: string
  address: string
  iva: string
}

export const contactsDataEmail = 'luigi.gargioni@gmail.com'
export const contactsDataPhone = '+39 3343404482'

export const contactsDataEN: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Brescia, Italy',
  iva: 'VAT number: 04492100989',
}

export const contactsDataIT: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Brescia, Italia',
  iva: 'Partita IVA: 04492100989',
}
