export interface Service {
  slug: string
  title: string
  shortTitle: string
  headline: string
  intro: string
  image: string
  scope: { title: string; description: string }[]
  faq: { q: string; a: string }[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'komplettsanierung',
    title: 'Komplettsanierung',
    shortTitle: 'Komplettsanierung',
    headline: 'Ihre Wohnung.\nVollständig erneuert.',
    intro:
      'Eine Komplettsanierung in Berlin bedeutet mehr als das Erneuern von Oberflächen. Wir übernehmen die vollständige Koordination aller Gewerke - von der Elektrik bis zum Parkett - und übergeben Ihre Wohnung termingerecht und zum Festpreis. Ob Altbauwohnung in Prenzlauer Berg oder Neubau in Mitte: Wir sanieren mit dem Anspruch, den jede Berliner Immobilie verdient.',
    image: '/assets/services/komplettsanierung.png',
    scope: [
      {
        title: 'Gesamtkoordination',
        description:
          'Ein Ansprechpartner für alle Gewerke - Elektrik, Sanitär, Trockenbau, Boden, Oberflächen.',
      },
      {
        title: 'Vor-Ort-Planung',
        description:
          'Detaillierte Bestandsaufnahme und Leistungsbeschreibung vor Angebotserstellung.',
      },
      {
        title: 'Festpreisgarantie',
        description:
          'Kein Stundensatz. Kein offenes Ende. Ein verbindlicher Preis vor Baubeginn.',
      },
      {
        title: 'Altbaugerechtigkeit',
        description:
          'Spezielle Erfahrung mit Berliner Gründerzeithäusern, Dielenböden und Stuckfassaden.',
      },
      {
        title: 'Schlüsselfertige Übergabe',
        description:
          'Vollständige Reinigung und besenreine Übergabe zum vereinbarten Termin.',
      },
    ],
    faq: [
      {
        q: 'Was kostet eine Komplettsanierung in Berlin?',
        a: 'Die Kosten hängen von Zustand, Größe und Ausstattungsniveau ab. Nach unserem kostenlosen Vor-Ort-Termin erhalten Sie ein detailliertes Festpreisangebot - ohne versteckte Kosten.',
      },
      {
        q: 'Wie lange dauert eine Komplettsanierung?',
        a: 'Eine Standardwohnung (60–100 m²) sanieren wir typischerweise in 4–8 Wochen. Größere Einheiten oder Altbauten mit Substanzschäden können länger dauern - das klären wir transparent im Vorfeld.',
      },
      {
        q: 'Können Sie auch während der Bewohnung sanieren?',
        a: 'In der Regel empfehlen wir eine kurzzeitige Auslagerung für eine Komplettsanierung. Für Teilsanierungen finden wir Lösungen, die Ihren Alltag so wenig wie möglich beeinträchtigen.',
      },
      {
        q: 'Koordinieren Sie auch Küche und Bad?',
        a: 'Ja. Wir übernehmen die Koordination aller Gewerke inklusive Sanitär, Fliesenleger, Elektrik und Möbelplanung auf Wunsch.',
      },
    ],
    metaTitle: 'Komplettsanierung Berlin | Spreewerk Sanierung - Festpreis & Qualität',
    metaDescription:
      'Komplettsanierung in Berlin zum Festpreis. Altbauwohnungen, Neubauten, Büros. Schlüsselfertig, termingerecht. Jetzt Vor-Ort-Termin vereinbaren.',
  },
  {
    slug: 'bad-und-kuchensanierung',
    title: 'Bad- & Küchensanierung',
    shortTitle: 'Bad & Küche',
    headline: 'Räume, die täglich\nüberzeugen.',
    intro:
      'Bäder und Küchen sind die anspruchsvollsten Räume einer Wohnung - technisch, handwerklich und gestalterisch. Wir sanieren Ihr Bad und Ihre Küche in Berlin mit handverlesenen Materialien, präziser Ausführung und einem Festpreis, der vor Baubeginn vereinbart wird. Das Ergebnis: Räume, die funktionieren, die dauerhaft halten und die Sie täglich genießen.',
    image: '/assets/services/bad-kueche.png',
    scope: [
      {
        title: 'Kompletter Badumbau',
        description:
          'Von der Entkernung bis zur Endmontage - Fliesen, Sanitär, Elektrik, Beleuchtung.',
      },
      {
        title: 'Küchensanierung',
        description:
          'Neuverlegung Boden, Wände, Elektrik und Wasseranschlüsse für Ihre Küchenplanung.',
      },
      {
        title: 'Hochwertige Materialien',
        description:
          'Feinsteinzeug, Naturstein, Mikrozement - wir beraten Sie zur optimalen Materialwahl.',
      },
      {
        title: 'Barrierefreiheit',
        description:
          'Bodengleiche Duschen, verbreiterte Zugänge und altersgerechte Umbaulösungen.',
      },
      {
        title: 'Schimmelschutz',
        description:
          'Professionelle Abdichtung aller Nassbereichsanschlüsse und dauerhafter Fugenabdichtung.',
      },
    ],
    faq: [
      {
        q: 'Wie lange dauert eine Badsanierung in Berlin?',
        a: 'Ein Standardbad (5–10 m²) sanieren wir in 2–3 Wochen. Größere oder besonders aufwändige Bäder können 3–5 Wochen in Anspruch nehmen.',
      },
      {
        q: 'Muss ich mein altes Bad komplett entkernen lassen?',
        a: 'Nicht immer. In manchen Fällen können wir auf bestehende Fliesen überarbeiten oder einzelne Elemente erhalten. Das klären wir beim Vor-Ort-Termin.',
      },
      {
        q: 'Kümmern Sie sich auch um die Küchenanschlüsse?',
        a: 'Ja. Wir legen Wasseranschlüsse, Abflüsse und Elektroanschlüsse fachgerecht - abgestimmt auf Ihre Küchenplanung.',
      },
      {
        q: 'Können Sie auch bei einer laufenden Küchenmontage unterstützen?',
        a: 'Absolut. Viele Kunden koordinieren ihre Küchen über einen Möbelhändler und übergeben uns die Rohbauarbeiten. Diese Schnittstelle managen wir professionell.',
      },
    ],
    metaTitle: 'Badsanierung Berlin | Küchensanierung Berlin - Spreewerk Sanierung',
    metaDescription:
      'Professionelle Bad- und Küchensanierung in Berlin. Festpreis, hochwertige Materialien, 2–3 Wochen Ausführungszeit. Kostenloser Vor-Ort-Termin.',
  },
  {
    slug: 'wasserschaden-schimmelsanierung',
    title: 'Wasserschäden & Schimmelsanierung',
    shortTitle: 'Wasserschäden & Schimmel',
    headline: 'Schäden beheben.\nUrsachen lösen.',
    intro:
      'Ein Wasserschaden oder Schimmelbefall in Berlin erfordert schnelles, fachkundiges Handeln. Wir beseitigen nicht nur das Sichtbare - wir gehen der Ursache auf den Grund, sanieren die Bausubstanz dauerhaft und dokumentieren alle Maßnahmen lückenlos für Versicherungen und Hausverwaltungen.',
    image: '/assets/services/wasserschaden.png',
    scope: [
      {
        title: 'Soforteinsatz',
        description:
          'Schnelle Reaktionszeiten bei akuten Wasserschäden in Berlin und Brandenburg.',
      },
      {
        title: 'Ursachenbehebung',
        description:
          'Leckortung, Rohrprüfung und Behebung der Schadensursache - nicht nur Symptombehandlung.',
      },
      {
        title: 'Schimmelsanierung',
        description:
          'Fachgerechte Entfernung, Untergrundbehandlung und dauerhafte Abdichtung.',
      },
      {
        title: 'Trocknungsmanagement',
        description:
          'Professionelle Bauteilaustrocknungen mit protokollierter Dokumentation.',
      },
      {
        title: 'Versicherungsdokumentation',
        description:
          'Vollständige Schadensdokumentation und Abstimmung mit Ihrer Versicherung.',
      },
    ],
    faq: [
      {
        q: 'Wie schnell können Sie bei einem Wasserschaden reagieren?',
        a: 'Wir sind in der Regel innerhalb von 24–48 Stunden vor Ort für eine erste Bestandsaufnahme in Berlin.',
      },
      {
        q: 'Übernimmt die Versicherung die Kosten?',
        a: 'Das hängt von Ihrer Police und der Schadensursache ab. Wir dokumentieren alle Maßnahmen versicherungskonform und können die Schadensabwicklung begleiten.',
      },
      {
        q: 'Ist Schimmel in der Wohnung gesundheitsgefährlich?',
        a: 'Ja, bei größeren Befällen sind Schimmelpilze gesundheitsschädlich. Professionelle Sanierung ist zwingend erforderlich - keine Eigenbehandlung mit Haushaltsmitteln.',
      },
      {
        q: 'Können Sie auch in bewohnten Räumen sanieren?',
        a: 'Je nach Ausmaß des Schadens ist das möglich. Wir treffen alle notwendigen Schutzmaßnahmen und informieren Sie transparent.',
      },
    ],
    metaTitle: 'Wasserschaden Sanierung Berlin | Schimmelsanierung - Spreewerk',
    metaDescription:
      'Wasserschaden und Schimmelsanierung in Berlin. Schnelle Reaktion, dauerhafte Lösung, Versicherungsdokumentation. Jetzt Termin anfragen.',
  },
  {
    slug: 'innenausbau-oberflachen',
    title: 'Innenausbau & Oberflächen',
    shortTitle: 'Innenausbau & Oberflächen',
    headline: 'Präzision\nin jedem Detail.',
    intro:
      'Trockenbau, Putz, Estrich, Parkett, Lackierungen - der Innenausbau entscheidet über Qualität und Langlebigkeit jeder Sanierung. Spreewerk setzt in Berlin auf handwerkliche Präzision und Materialien, die halten. Ob historischer Stuckputz im Altbau oder moderner Mikrozement im Neubau: Wir arbeiten mit dem nötigen Sachverstand für das Material und den Bestand.',
    image: '/assets/services/innenausbau.png',
    scope: [
      {
        title: 'Trockenbau',
        description:
          'Raumaufteilung, Verkleidungen, abgehängte Decken - präzise ausgeführt.',
      },
      {
        title: 'Putz & Spachtel',
        description:
          'Kalk-, Gips- und Renovierputz. Stuckreparatur im Berliner Altbau.',
      },
      {
        title: 'Bodenbeläge',
        description:
          'Parkett verlegen und schleifen, Dielen sanieren, Estrich, Fliesen.',
      },
      {
        title: 'Malerarbeiten',
        description:
          'Deckend, lasierend, Tapetenarbeiten - sauber und termingerecht.',
      },
      {
        title: 'Türen & Zargen',
        description:
          'Einbau, Anpassung und Lackierung von Innentüren und Zargen.',
      },
    ],
    faq: [
      {
        q: 'Können Sie historischen Stuck im Altbau reparieren?',
        a: 'Ja. Stuckreparatur und -ergänzung im Berliner Altbau ist eine unserer Kernkompetenzen. Wir arbeiten mit kalkhaltigen Materialien, die historisch verträglich sind.',
      },
      {
        q: 'Schleifen Sie auch alten Parkettboden?',
        a: 'Ja. Alten Echtholzparkett und Dielen schleifen, versiegeln oder ölen wir fachgerecht auf. In vielen Fällen lässt sich altes Parkett vollständig revitalisieren.',
      },
      {
        q: 'Welche Wandoberflächen bieten Sie an?',
        a: 'Glattstrich, Kalkputz, Filzputz, Tapeten, Mikrozement, Strukturputze - wir beraten Sie zur passenden Oberfläche für Ihren Raum.',
      },
    ],
    metaTitle: 'Innenausbau Berlin | Stuck, Parkett, Oberflächen - Spreewerk Sanierung',
    metaDescription:
      'Innenausbau in Berlin: Trockenbau, Putz, Parkett, Stuckreparatur, Malerarbeiten. Handwerkliche Präzision für Altbau und Neubau.',
  },
  {
    slug: 'dachgeschossausbau-berlin',
    title: 'Dachgeschossausbau Berlin',
    shortTitle: 'Dachgeschossausbau',
    headline: 'Berlin von oben.\nNeu gedacht.',
    intro:
      'Ein Dachgeschossausbau in Berlin schafft einzigartigen Wohnraum - unter Dachschrägen, mit Blick auf Dächer und Höfe, mit dem Charme des Besonderen. Wir realisieren Dachgeschossausbauten von der Genehmigungsplanung bis zur schlüsselfertigen Übergabe. Mit fundierten Kenntnissen der Berliner Bauordnung, handwerklichem Können und einem Festpreis, dem Sie vertrauen können.',
    image: '/assets/services/dachgeschoss.png',
    scope: [
      {
        title: 'Genehmigungsplanung',
        description:
          'Abstimmung mit Berliner Bauamt, Einholung der Baugenehmigung, Statik.',
      },
      {
        title: 'Dämmung & Klimaanforderungen',
        description:
          'GEG-gerechte Dämmung, sommerlicher Wärmeschutz, Lüftungskonzept.',
      },
      {
        title: 'Dachflächenfenster & Gauben',
        description:
          'Planung und Einbau von Dachflächenfenstern, Dachausstiegen und Gauben.',
      },
      {
        title: 'Innenausbau',
        description:
          'Trockenbau, Böden, Elektrik, Sanitär - alles aus einer Hand.',
      },
      {
        title: 'Schlüsselfertige Übergabe',
        description:
          'Vollständige Fertigstellung und Abnahme durch den Bauherrn.',
      },
    ],
    faq: [
      {
        q: 'Braucht man für einen Dachgeschossausbau in Berlin eine Baugenehmigung?',
        a: 'In den meisten Fällen ja - insbesondere wenn strukturelle Veränderungen geplant sind. Wir begleiten Sie durch den Genehmigungsprozess.',
      },
      {
        q: 'Wie lange dauert ein Dachgeschossausbau in Berlin?',
        a: 'Je nach Größe und Zustand des Dachraums zwischen 3 und 6 Monaten. Die Genehmigungsphase kommt zusätzlich hinzu.',
      },
      {
        q: 'Können Sie auch mit einem vorhandenen Architekten zusammenarbeiten?',
        a: 'Ja, wir arbeiten regelmäßig mit Berliner Architekturbüros zusammen und übernehmen die ausführende Rolle als Generalunternehmer.',
      },
    ],
    metaTitle: 'Dachgeschossausbau Berlin | Spreewerk - Genehmigung & Ausbau',
    metaDescription:
      'Dachgeschossausbau in Berlin - von der Baugenehmigung bis zur schlüsselfertigen Übergabe. Berliner Bauordnung, Festpreis. Jetzt beraten lassen.',
  },
  {
    slug: 'technische-gewerke',
    title: 'Technische Gewerke',
    shortTitle: 'Technische Gewerke',
    headline: 'Die Technik,\ndie alles trägt.',
    intro:
      'Elektroinstallation, Sanitär, Heizung, Lüftung - technische Gewerke bilden das unsichtbare Fundament jeder Sanierung. Spreewerk koordiniert und führt alle technischen Arbeiten in Berlin nach aktuellen Normen aus. Für eine dauerhafte, sichere und energieeffiziente Grundlage Ihrer Immobilie.',
    image: '/assets/services/technische.png',
    scope: [
      {
        title: 'Elektroinstallation',
        description:
          'Neue Leitungen, Unterverteilung, Smart-Home-Vorbereitung, normgerechte Ausführung.',
      },
      {
        title: 'Sanitär',
        description:
          'Trinkwasser- und Abwasserleitungen, Boileranlagen, Armaturen.',
      },
      {
        title: 'Heizung',
        description:
          'Heizkörpertausch, Flächenheizung, Thermostatventile und Hydraulischer Abgleich.',
      },
      {
        title: 'Lüftung',
        description:
          'Wohnungslüftung, Abluftanlagen in Bad und Küche, Dichtheitstest.',
      },
      {
        title: 'Dokumentation',
        description:
          'Vollständige Leitungsdokumentation und Übergabe an den Eigentümer.',
      },
    ],
    faq: [
      {
        q: 'Führen Sie auch Smart-Home-Vorbereitungen durch?',
        a: 'Ja. Beim Verlegen neuer Elektroleitungen berücksichtigen wir auf Wunsch Busleitung und Strukturierung für KNX- oder andere Smart-Home-Systeme.',
      },
      {
        q: 'Müssen bei einer Sanierung alle Rohre erneuert werden?',
        a: 'Das hängt vom Leitungszustand und Baujahr ab. Nach einer Bestandsprüfung empfehlen wir nur, was technisch notwendig ist.',
      },
      {
        q: 'Führen Sie die Elektroarbeiten selbst aus?',
        a: 'Wir arbeiten mit festen Fachpartnern für Elektroinstallation zusammen - langjährig und geprüft. Koordination und Gewährleistung liegen bei Spreewerk.',
      },
    ],
    metaTitle: 'Technische Gewerke Berlin | Elektro, Sanitär, Heizung - Spreewerk',
    metaDescription:
      'Elektroinstallation, Sanitär und Heizung in Berlin. Normgerecht, dokumentiert, aus einer Hand. Jetzt kostenlos beraten lassen.',
  },
]
