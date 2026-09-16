export interface GalleryItem {
  src: string;
  alt: string;
}

// Curated for the gallery layout: a finished showcase first, followed by a
// varied mix of work in progress, detail work and specialist services.
export const galleryItems: GalleryItem[] = [
  {
    src: "/assets/acquisition/projekte/garten-mit-pool-und-kunstrasen-02.jpg",
    alt: "Fertiger Garten mit Pool, geschwungenem Pflasterweg, Kunstrasen und Steinmauer"
  },
  {
    src: "/assets/acquisition/baustellen/pflastersteine-verlegen-01.jpg",
    alt: "Landschaftsgärtner beim Verlegen von Pflastersteinen auf der Baustelle"
  },
  {
    src: "/assets/acquisition/baustellen/mauerbau-fur-hochbeet-01.jpg",
    alt: "Mauerbau für ein Hochbeet auf der Baustelle"
  },
  {
    src: "/assets/acquisition/projekte/garten-mit-rollrasen-und-randsteinen-01.jpg",
    alt: "Frisch verlegter Rollrasen mit sauberen Randsteinen und Kiesweg"
  },
  {
    src: "/assets/acquisition/baustellen/moderne-gartenanlage-mit-betonstufen-01.jpg",
    alt: "Moderne Gartenanlage mit Betonstufen und Hochbeeten kurz vor der Fertigstellung"
  }
];
