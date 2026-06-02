export interface Stadtteil {
  slug: string
  name: string
  bezirk: string
  headline: string
  description: string
  seoKeyword: string
  metaTitle: string
  metaDescription: string
  active: boolean
}

export const stadtteile: Stadtteil[] = [
  {
    slug: 'prenzlauer-berg',
    name: 'Prenzlauer Berg',
    bezirk: 'Pankow',
    headline: 'Sanierung in Prenzlauer Berg',
    description:
      'Prenzlauer Berg ist eines der dichtesten Altbaugebiete Berlins. Gründerzeithäuser, Stuck, Dielen und charaktervolle Grundrisse — wir kennen diesen Bestand und sanieren ihn mit dem nötigen Respekt.',
    seoKeyword: 'Sanierung Prenzlauer Berg',
    metaTitle: 'Sanierung Prenzlauer Berg | Spreewerk — Altbau & Komplettsanierung',
    metaDescription:
      'Professionelle Sanierung in Prenzlauer Berg. Altbauwohnungen, Komplettsanierung, Badsanierung. Festpreisangebot. Spreewerk Sanierung Berlin.',
    active: false,
  },
  {
    slug: 'mitte',
    name: 'Mitte',
    bezirk: 'Mitte',
    headline: 'Sanierung in Berlin Mitte',
    description:
      'Berlin Mitte vereint historische Bausubstanz mit modernen Anforderungen. Wir sanieren in Mitte mit dem Verständnis für den besonderen Charakter dieser Berliner Lagen.',
    seoKeyword: 'Sanierung Berlin Mitte',
    metaTitle: 'Sanierung Berlin Mitte | Spreewerk — Komplettsanierung & Renovierung',
    metaDescription:
      'Sanierung in Berlin Mitte. Komplettsanierung, Altbau, Büros. Festpreisangebot. Spreewerk Sanierung Berlin.',
    active: false,
  },
  {
    slug: 'friedrichshain',
    name: 'Friedrichshain',
    bezirk: 'Friedrichshain-Kreuzberg',
    headline: 'Sanierung in Friedrichshain',
    description:
      'Friedrichshain bietet ein heterogenes Bild: Gründerzeit, DDR-Platte, Neubau. Wir kennen alle Bestandstypen und bieten für jeden die passende Sanierungslösung.',
    seoKeyword: 'Sanierung Friedrichshain',
    metaTitle: 'Sanierung Friedrichshain | Spreewerk — Wohnungssanierung Berlin',
    metaDescription:
      'Sanierung in Friedrichshain Berlin. Altbau, Plattenbau, Neubau. Festpreis, schnelle Umsetzung. Spreewerk Sanierung.',
    active: false,
  },
  {
    slug: 'kreuzberg',
    name: 'Kreuzberg',
    bezirk: 'Friedrichshain-Kreuzberg',
    headline: 'Sanierung in Kreuzberg',
    description:
      'Kreuzberger Altbauten gehören zu den markantesten Berlins. Wir sanieren hier mit Erfahrung, Präzision und einem tiefen Verständnis für den Bestand.',
    seoKeyword: 'Sanierung Kreuzberg',
    metaTitle: 'Sanierung Kreuzberg Berlin | Spreewerk — Altbau & Wohnungssanierung',
    metaDescription:
      'Sanierung in Kreuzberg Berlin. Altbauwohnungen, Komplettsanierung, Badsanierung. Festpreis. Spreewerk Sanierung Berlin.',
    active: false,
  },
  {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    bezirk: 'Charlottenburg-Wilmersdorf',
    headline: 'Sanierung in Charlottenburg',
    description:
      'Charlottenburg steht für großbürgerliche Altbausubstanz, hohe Deckenhöhen und repräsentative Grundrisse. Unsere Sanierungsleistungen werden diesem Anspruch gerecht.',
    seoKeyword: 'Sanierung Charlottenburg',
    metaTitle: 'Sanierung Charlottenburg | Spreewerk — Premium Wohnungssanierung',
    metaDescription:
      'Sanierung in Charlottenburg Berlin. Großbürgerliche Altbauten, Komplettsanierung, Stuck, Parkett. Festpreisangebot. Spreewerk.',
    active: false,
  },
]
