export interface Project {
  slug: string
  title: string
  location: string
  type: string
  year: string
  description: string
  images: string[]
  beforeImage?: string
  afterImage?: string
  hasDetailPage: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'altbau-bogenfenster-berlin',
    title: 'Altbauwohnung mit Bogenfenster',
    location: 'Berlin',
    type: 'Komplettsanierung',
    year: '2024',
    description:
      'Vollständige Sanierung einer Berliner Altbauwohnung mit charakteristischem Bogenfenster aus der Gründerzeit. Restaurierung der Originalsubstanz mit zeitgemäßer Innengestaltung.',
    images: ['/assets/projects/p01-after1.png', '/assets/projects/p01-after2.png'],
    beforeImage: '/assets/projects/p01-before.png',
    afterImage: '/assets/projects/p01-after2.png',
    hasDetailPage: false,
    tags: ['Komplettsanierung', 'Altbau', 'Berlin'],
  },
  {
    slug: 'kueche-gruenderzeithaus',
    title: 'Küchensanierung Gründerzeithaus',
    location: 'Berlin',
    type: 'Küchensanierung',
    year: '2024',
    description:
      'Komplette Küchensanierung in einem Berliner Gründerzeithaus. Neue Leitungen, Fliesenarbeiten und Vorbereitung für eine maßgefertigte Küche.',
    images: ['/assets/projects/p02-after.png'],
    beforeImage: '/assets/projects/p02-before.png',
    afterImage: '/assets/projects/p02-after.png',
    hasDetailPage: false,
    tags: ['Küchensanierung', 'Altbau'],
  },
  {
    slug: 'badsanierung-mosaik',
    title: 'Badsanierung mit Mosaikfliesen',
    location: 'Berlin',
    type: 'Badsanierung',
    year: '2024',
    description:
      'Transformation eines veralteten Bades in einen zeitgemäßen Wohnraum mit hochwertigen Mosaikfliesen und Travertin-Wanne.',
    images: ['/assets/projects/p03-after.png'],
    beforeImage: '/assets/projects/p03-before.png',
    afterImage: '/assets/projects/p03-after.png',
    hasDetailPage: false,
    tags: ['Badsanierung'],
  },
  {
    slug: 'altbau-stucksanierung',
    title: 'Altbau Stucksanierung & Restaurierung',
    location: 'Berlin',
    type: 'Komplettsanierung',
    year: '2023',
    description:
      'Vollständige Restaurierung einer Berliner Altbauwohnung mit Originalstuck, Fischgrätparkett und Gründerzeitcharakter.',
    images: ['/assets/projects/p04-after.png'],
    beforeImage: '/assets/projects/p04-before.png',
    afterImage: '/assets/projects/p04-after.png',
    hasDetailPage: false,
    tags: ['Komplettsanierung', 'Altbau', 'Stuck'],
  },
  {
    slug: 'bad-dunkelgruen',
    title: 'Bad in Dunkelgrün',
    location: 'Berlin',
    type: 'Badsanierung',
    year: '2024',
    description:
      'Designbad mit dunkelgrünen Mosaikfliesen und wandhängendem Sanitär. Kompaktform mit hohem ästhetischen Anspruch.',
    images: ['/assets/projects/p05.png'],
    hasDetailPage: false,
    tags: ['Badsanierung', 'Design'],
  },
  {
    slug: 'bad-travertin-beton',
    title: 'Bad in Travertin & Beton',
    location: 'Berlin',
    type: 'Badsanierung',
    year: '2024',
    description:
      'Zwei-Raum-Badlösung mit Naturstein und Betonoberflächen. Bodengleiche Dusche und wandhängendes Sanitär.',
    images: ['/assets/projects/p06.png'],
    hasDetailPage: false,
    tags: ['Badsanierung', 'Naturstein'],
  },
]
