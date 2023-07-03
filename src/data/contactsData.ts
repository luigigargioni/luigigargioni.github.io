export const contactsTitleEN = 'Contacts'
export const contactsTitleIT = 'Contatti'

type ContactsType = {
  email: string
  phone: string
  address: string
  iva: string
}

export const contactsDataEmail = 'luigi.gargioni@gmail.com'
export const contactsDataPhone = '***REMOVED***'

export const contactsDataEN: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Gottolengo, Brescia, Italy',
  iva: 'VAT number: ***REMOVED***',
}

export const contactsDataIT: ContactsType = {
  email: contactsDataEmail,
  phone: contactsDataPhone,
  address: 'Gottolengo, Brescia, Italia',
  iva: 'Partita IVA: ***REMOVED***',
}
