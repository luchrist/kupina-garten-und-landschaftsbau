export interface Referenz {
  id: string;
  /** Short project title, e.g. "Hanggarten mit Sitzmauer". */
  title: string;
  /** Real place name. Never invent one. */
  ort: string;
  /** Must match one of the `label` values in lib/galabau.ts services. */
  leistung: string;
  jahr?: string;
  text: string;
  /** Finished state. Required. */
  afterImage: string;
  /**
   * Before state. OPTIONAL and only ever a genuine before shot of the SAME
   * project. Without it the card renders as a single image instead of a
   * before/after slider, which is the honest fallback.
   */
  beforeImage?: string;
  alt: string;
}

export const referenzen: Referenz[] = [
  {
    id: "moderne-gartenanlage-kunstrasen",
    title: "Moderne Gartenanlage mit Terrasse und Kunstrasen",
    ort: "Schifferstadt",
    leistung: "Gartenneugestaltung",
    text: "Aus einer Baustelle mit Terrassenplatten, Betonstufen und Hochbeeten im Rohbau wurde eine klar gegliederte Anlage. Terrasse, Trittsteine im Kunstrasen und Höhensprünge sind aufeinander abgestimmt.",
    afterImage: "/assets/acquisition/projekte/moderner-garten-mit-kunstrasen-und-terrasse-01.jpg",
    beforeImage: "/assets/acquisition/baustellen/moderne-gartenanlage-im-bau-01.jpg",
    alt: "Vorher-Nachher: Moderne Gartenanlage mit Terrasse, Betonstufen und Kunstrasen"
  },
  {
    id: "garten-mit-pool",
    title: "Garten mit Pool, Betontreppen und Kunstrasen",
    ort: "Schifferstadt",
    leistung: "Gartenneugestaltung",
    text: "Der Poolbereich wurde von der Rohbaustelle bis zur fertigen Anlage begleitet: Betontreppen setzen, Pool anschließen, Kunstrasen verlegen und den geschwungenen Pflasterweg als Abschluss einbauen.",
    afterImage: "/assets/acquisition/projekte/garten-mit-pool-und-kunstrasen-01.jpg",
    beforeImage: "/assets/acquisition/baustellen/gartenbaustelle-mit-treppe-und-pool-01.jpg",
    alt: "Vorher-Nachher: Garten mit Pool, neuen Betontreppen und Kunstrasenfläche"
  },
  {
    id: "einfahrt-pflaster",
    title: "Gepflasterte Einfahrt mit neuem Tor",
    ort: "Schifferstadt",
    leistung: "Pflasterarbeiten",
    text: "Zufahrt und Vorplatz für zwei Garagen: tragfähiger Unterbau für PKW-Belastung, gerade Randeinfassungen und ein neuer Metallzaun mit Toranlage als Abschluss.",
    afterImage: "/assets/acquisition/projekte/gepflasterte-einfahrt-mit-zaun-01.jpg",
    alt: "Gepflasterte Einfahrt mit Metallzaun und geöffneten Toren"
  },
  {
    id: "wpc-terrasse",
    title: "WPC-Terrasse mit dunkler Randbegrenzung",
    ort: "Schifferstadt",
    leistung: "Terrassenbau",
    text: "Neue WPC-Terrasse auf geplanter Unterkonstruktion, mit dunkler Randbegrenzung als sauberer Abschluss zum Rasen. Die Fläche bleibt auch bei Regen rutschsicher und pflegeleicht.",
    afterImage: "/assets/acquisition/projekte/nasse-wpc-terrasse-01.jpg",
    alt: "Regennasse WPC-Terrasse mit dunkler Randbegrenzung im Garten"
  },
  {
    id: "sichtschutzzaun",
    title: "Sichtschutzzaun mit dekorativem Muster",
    ort: "Schifferstadt",
    leistung: "Zaun & Sichtschutz",
    text: "Sichtschutzwand mit gefrästem Muster zwischen Terrasse und Gartenseite. Höhe und Grenzverlauf wurden vor der Montage mit dem Bauherrn abgestimmt.",
    afterImage: "/assets/acquisition/projekte/moderner-sichtschutzzaun-01.jpg",
    alt: "Moderner Sichtschutzzaun mit dekorativem Muster als Abtrennung zur Terrasse"
  },
  {
    id: "aussenbereich-steinmauer",
    title: "Außenbereich mit Steinmauer und Spülbecken",
    ort: "Schifferstadt",
    leistung: "Pflasterarbeiten",
    text: "Gepflasterter Aufenthaltsbereich mit einer aufgesetzten Steinmauer und eingelassenem Spülbecken. Wasseranschluss und Ablauf wurden vor dem Pflaster mit verlegt.",
    afterImage: "/assets/acquisition/projekte/gepflasterter-auenbereich-mit-steinmauer-01.jpg",
    alt: "Gepflasterter Außenbereich mit dekorativer Steinmauer und integriertem Spülbecken"
  }
];
