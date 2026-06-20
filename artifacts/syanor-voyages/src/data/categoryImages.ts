export const CATEGORY_IMAGE: Record<string, string> = {
  "Omra":               "/services/religieux/omra.png",
  "Omra Plus":          "/services/religieux/omra-plus.png",
  "Hajj":               "/services/religieux/hajj.png",
  "Ramadan":            "/services/religieux/omra-ramadan.png",
  "Billet avion":       "/services/billets-avion.png",
  "Billet bateau":      "/services/billets-bateau.png",
  "Voyage organisé":    "/services/sur-mesure/voyages-organises.png",
  "Séjour sur mesure":  "/services/sur-mesure/sejour-sur-mesure.png",
  "Pack personnalisé":  "/services/sur-mesure/pack-premium-vip.png",
  "Hôtel & Transferts": "/img/hotel-view.jpg",
  "Visa":               "/img/kaaba-family.jpg",
  "Formation":          "/services/religieux/omra-plus.png",
  "Assurance":          "/img/hotel-view.jpg",
};

export const CATEGORY_SRCSET: Record<string, string> = {
  "Omra":
    "/services/religieux/omra-400w.webp 400w, /services/religieux/omra-800w.webp 800w, /services/religieux/omra-1200w.webp 1200w",
  "Omra Plus":
    "/services/religieux/omra-plus-400w.webp 400w, /services/religieux/omra-plus-800w.webp 800w, /services/religieux/omra-plus-1200w.webp 1200w",
  "Hajj":
    "/services/religieux/hajj-400w.webp 400w, /services/religieux/hajj-800w.webp 800w, /services/religieux/hajj-1200w.webp 1200w",
  "Ramadan":
    "/services/religieux/omra-ramadan-400w.webp 400w, /services/religieux/omra-ramadan-800w.webp 800w, /services/religieux/omra-ramadan-1200w.webp 1200w",
  "Billet avion":
    "/services/billets-avion-400w.webp 400w, /services/billets-avion-800w.webp 800w, /services/billets-avion-1200w.webp 1200w",
  "Billet bateau":
    "/services/billets-bateau-400w.webp 400w, /services/billets-bateau-800w.webp 800w, /services/billets-bateau-1200w.webp 1200w",
  "Voyage organisé":
    "/services/sur-mesure/voyages-organises-400w.webp 400w, /services/sur-mesure/voyages-organises-800w.webp 800w, /services/sur-mesure/voyages-organises-1200w.webp 1200w",
  "Séjour sur mesure":
    "/services/sur-mesure/sejour-sur-mesure-400w.webp 400w, /services/sur-mesure/sejour-sur-mesure-800w.webp 800w, /services/sur-mesure/sejour-sur-mesure-1200w.webp 1200w",
  "Pack personnalisé":
    "/services/sur-mesure/pack-premium-vip-400w.webp 400w, /services/sur-mesure/pack-premium-vip-800w.webp 800w, /services/sur-mesure/pack-premium-vip-1200w.webp 1200w",
  "Formation":
    "/services/religieux/omra-plus-400w.webp 400w, /services/religieux/omra-plus-800w.webp 800w, /services/religieux/omra-plus-1200w.webp 1200w",
};

export const CATEGORY_SIZES: Record<string, string> = {
  "Omra":              "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Omra Plus":         "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Hajj":              "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Ramadan":           "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Billet avion":      "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Billet bateau":     "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Voyage organisé":   "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Séjour sur mesure": "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Pack personnalisé": "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
  "Formation":         "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px",
};

export const FLOATING_CATEGORIES = new Set([
  "Billet avion",
  "Billet bateau",
  "Voyage organisé",
  "Séjour sur mesure",
]);

export const DEFAULT_CATEGORY_IMAGE = "/services/religieux/omra.png";
