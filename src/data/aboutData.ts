export type AboutType = {
  title: string
  description: string[]
}

export const aboutDataEN: AboutType = {
  title: 'Who I am',
  description: [
    "Hello! My name is Luigi Gargioni. I'm a researcher and computer engineer based in Italy.",
    'My work focuses on human-computer interaction and human-centred artificial intelligence, with the goal of developing innovative solutions that enhance the integration between humans and advanced technologies.',
    'I combine technical and theoretical skills to tackle research challenges, with a particular interest in technology usability, which I believe should serve as a bridge, not a barrier, to achieving goals.',
  ],
}

export const aboutDataIT: AboutType = {
  title: 'Mi presento',
  description: [
    'Ciao! Mi chiamo Luigi Gargioni. Sono un ricercatore e ingegnere informatico residente in Italia.',
    "La mia ricerca si concentra sull'interazione uomo-computer e sull'intelligenza artificiale centrata sull'uomo, con l'obiettivo di sviluppare soluzioni innovative che migliorino l'integrazione tra esseri umani e tecnologie avanzate.",
    "Combino competenze tecniche e teoriche per affrontare le sfide della ricerca, con un particolare interesse per l'usabilità della tecnologia, che ritengo debba essere un ponte e non un ostacolo nel raggiungimento degli obiettivi.",
  ],
}
