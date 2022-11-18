export type AboutType = {
  title: string
  description: string[]
}

export const aboutDataEN: AboutType = {
  title: 'Who I am',
  description: [
    "Hello! My name is Luigi Gargioni. I'm a computer engineer and aspiring researcher based in Italy.",
    'I like to apply the different technical and theoretical skills I have acquired to achieve goals with perseverance and staying up-to-date with new technologies.',
    "I have a special interest in the usability of technology: the latter should not be an obstacle, but a help to achieve one's goals.",
  ],
}

export const aboutDataIT: AboutType = {
  title: 'Mi presento',
  description: [
    'Ciao! Mi chiamo Luigi Gargioni. Sono un ingegnere informatico e aspirante ricercatore residente in Italia.',
    'Mi piace applicare le diverse competenze tecniche e teoriche acquisite per raggiungere obiettivi con perseveranza e rimanendo aggiornato sulle nuove tecnologie.',
    'Ho un particolare interesse per l’usabilità della tecnologia: questa non deve essere un ostacolo, ma un aiuto per raggiungere obiettivi.',
  ],
}
