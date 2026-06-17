export interface BlogSection {
  type: "h2" | "h3" | "p" | "ul" | "tip";
  content: string | string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: BlogSection[];
  relatedOfferCategories?: string[];
  seoTitle: string;
  seoDescription: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "voyage-istanbul-guide-pratique",
    title: "Voyage à Istanbul : guide pratique et incontournables",
    excerpt:
      "De la Mosquée Bleue au Grand Bazar, en passant par les rives du Bosphore — tout ce qu'il faut savoir pour organiser un séjour parfait à Istanbul.",
    category: "Destinations",
    date: "Juin 2026",
    readTime: "7 min",
    seoTitle: "Voyage à Istanbul : guide pratique et incontournables | SYANOR VOYAGES",
    seoDescription:
      "Organisez votre voyage à Istanbul avec notre guide complet : quoi voir, où dormir, comment se déplacer et nos conseils pratiques pour un séjour réussi.",
    relatedOfferCategories: ["Voyage organisé", "Séjour sur mesure"],
    content: [
      { type: "p", content: "Istanbul est l'une des destinations les plus fascinantes au monde, à la croisée de l'Europe et de l'Asie. Deux heures de vol depuis la France, et vous voilà plongé dans une métropole de 15 millions d'habitants, riche de 3 000 ans d'histoire." },
      { type: "h2", content: "Les incontournables à ne pas manquer" },
      { type: "ul", content: ["La Mosquée Bleue (Sultanahmet) et ses 6 minarets", "Sainte-Sophie — cathédrale, mosquée, musée, mosquée à nouveau", "Le Palais de Topkapi et le trésor ottoman", "Le Grand Bazar : 4 000 boutiques sur 60 rues couvertes", "La Citerne Basilique, mystérieuse et magnifique", "Une croisière sur le Bosphore entre deux continents"] },
      { type: "h2", content: "Quand partir à Istanbul ?" },
      { type: "p", content: "La meilleure période est le printemps (avril-mai) ou l'automne (septembre-octobre) : températures douces, foules moins denses et lumière parfaite pour les photos. L'été est chaud et très fréquenté. L'hiver est frais mais l'atmosphère est unique, avec parfois quelques flocons sur les minarets." },
      { type: "h2", content: "Se déplacer dans Istanbul" },
      { type: "p", content: "Le réseau de transports en commun est efficace. La carte Istanbulkart rechargeable vous donne accès au métro, au tramway, aux bus et aux ferries. Évitez les taxis non officiels et préférez les applications de VTC locales." },
      { type: "ul", content: ["Tramway T1 : relie la plupart des sites historiques", "Métro M2 : vers Taksim et l'aéroport", "Ferry Bosphore : la plus belle façon de traverser la ville", "Marche à pied dans Sultanahmet et Galata"] },
      { type: "h2", content: "Gastronomie : que manger à Istanbul ?" },
      { type: "p", content: "La cuisine turque est l'une des plus riches et variées au monde. Ne repartez pas sans avoir goûté un simit (pain en couronne aux graines de sésame), un balik ekmek (sandwich au poisson), un kebab döner authentique et des baklavas fraîchement préparés." },
      { type: "tip", content: "Conseil SYANOR : réservez votre séjour Istanbul au moins 6 semaines à l'avance pendant les périodes de pointe (avril-mai, juillet-août). Nos packs incluent hôtel, vols et transferts depuis Nice, Marseille ou Paris." },
    ],
  },
  {
    slug: "dubai-guide-5-jours",
    title: "Dubaï en 5 jours : que faire, où loger et comment s'organiser",
    excerpt:
      "Programme complet pour découvrir Dubaï en 5 jours : Burj Khalifa, désert, souks, plages et shopping — sans rien rater de l'essentiel.",
    category: "Destinations",
    date: "Juin 2026",
    readTime: "6 min",
    seoTitle: "Dubaï en 5 jours — Programme et conseils pratiques | SYANOR VOYAGES",
    seoDescription:
      "Découvrez Dubaï en 5 jours avec notre programme détaillé : Burj Khalifa, désert, Palm Jumeirah, souks et shopping. Conseils pratiques et hôtels recommandés.",
    relatedOfferCategories: ["Voyage organisé", "Pack personnalisé"],
    content: [
      { type: "p", content: "Dubaï en 5 jours, c'est suffisant pour découvrir l'essentiel de cette ville fascinante qui ne ressemble à aucune autre. Voici notre programme optimisé, jour par jour." },
      { type: "h2", content: "Jour 1 : Dubaï moderne — Burj Khalifa et Downtown" },
      { type: "p", content: "Commencez par le symbole absolu de Dubaï : le Burj Khalifa (828 m). Achetez votre billet pour le sommet en avance pour éviter les files. En soirée, le spectacle des fontaines devant le Dubai Mall est gratuit et saisissant." },
      { type: "h2", content: "Jour 2 : Ancien Dubaï — Deira et Bur Dubai" },
      { type: "p", content: "Traversez la Dubai Creek en abra (barque traditionnelle) pour découvrir les souks aux épices et à l'or. Le Dubaï Museum dans le Fort Al Fahidi donne une excellente perspective historique sur la transformation de la ville." },
      { type: "h2", content: "Jour 3 : Palm Jumeirah et plages" },
      { type: "ul", content: ["Monogail Palm Jumeirah : panorama inégalable sur la paume", "Atlantis The Palm : parc aquatique et plages", "La Mer ou Jumeirah Beach : plages publiques gratuites", "Coucher de soleil depuis la marina"] },
      { type: "h2", content: "Jour 4 : Safari désert et dunes" },
      { type: "p", content: "Réservez une sortie Safari dans les dunes rouges de l'Erq : dune bashing en 4x4, chameau, sandboard, et dîner barbecue sous les étoiles avec spectacle de danse traditionnelle. Une expérience inoubliable à vivre au moins une fois." },
      { type: "h2", content: "Jour 5 : Shopping et départ" },
      { type: "ul", content: ["Dubai Mall : 1 200 boutiques, patinoire et aquarium intérieur", "Mall of the Emirates : piste de ski couverte", "Gold Souk pour les derniers souvenirs", "Aéroport de Dubaï (DXB) très bien desservi depuis la France"] },
      { type: "tip", content: "Conseil SYANOR : les mois d'octobre à avril sont idéaux (25–35°C). Évitez juillet-août (45°C+). Nos packs Dubaï incluent vols, hôtels 4★/5★ et assistance 24/7." },
    ],
  },
  {
    slug: "sejour-sur-mesure-ou-voyage-organise",
    title: "Séjour sur mesure ou voyage organisé : comment choisir ?",
    excerpt:
      "Vous hésitez entre un voyage tout organisé et une formule sur mesure ? Voici les différences clés pour faire le meilleur choix selon votre profil.",
    category: "Conseils",
    date: "Mai 2026",
    readTime: "5 min",
    seoTitle: "Séjour sur mesure vs voyage organisé — Comment choisir | SYANOR VOYAGES",
    seoDescription:
      "Voyage organisé ou séjour sur mesure ? Nos conseils pour choisir la formule idéale selon votre budget, vos préférences et votre expérience du voyage.",
    relatedOfferCategories: ["Voyage organisé", "Séjour sur mesure"],
    content: [
      { type: "p", content: "Chez SYANOR VOYAGES, nous proposons les deux formules. Chacune a ses avantages selon votre profil, vos dates et votre budget. Voici comment choisir." },
      { type: "h2", content: "Le voyage organisé : pour qui ?" },
      { type: "p", content: "Le voyage organisé est idéal si vous souhaitez tout déléguer sans vous poser de questions. Programme fixe, groupe accompagné, hébergements réservés, transferts inclus. Rien à gérer." },
      { type: "ul", content: ["Premier grand voyage : vous bénéficiez d'un accompagnateur expert", "Budget maîtrisé : prix tout compris, sans mauvaise surprise", "Sécurité : assistance disponible à chaque étape", "Rencontres : ambiance de groupe, partage d'expériences", "Idéal pour les destinations complexes (Asie, Afrique, Moyen-Orient)"] },
      { type: "h2", content: "Le séjour sur mesure : pour qui ?" },
      { type: "p", content: "Si vous aimez voyager à votre rythme, choisir vos hôtels et personnaliser chaque étape, le sur mesure est fait pour vous. Nous gérons la réservation (vols, hôtels, activités) selon vos préférences exactes." },
      { type: "ul", content: ["Voyageurs expérimentés qui connaissent leurs envies", "Familles avec des besoins spécifiques (accès mobilité, régimes alimentaires)", "Couples souhaitant une expérience romantique personnalisée", "Flexibilité : possibilité de modifier jusqu'aux derniers jours", "Combinaisons de destinations originales"] },
      { type: "h2", content: "Le critère décisif : votre niveau de préparation" },
      { type: "p", content: "Si c'est votre premier séjour dans une destination, le voyage organisé vous garantit une expérience sans stress. Si vous avez déjà voyagé dans la région et que vous avez des envies précises, le sur mesure vous offrira une liberté totale avec la sécurité d'un professionnel derrière vous." },
      { type: "tip", content: "Conseil SYANOR : si vous hésitez, appelez-nous. En 10 minutes d'échange, nous comprenons votre profil et vous orientons vers la formule la plus adaptée, pour le même budget." },
    ],
  },
  {
    slug: "marrakech-long-week-end",
    title: "Marrakech le temps d'un long week-end",
    excerpt:
      "4 jours à Marrakech : Jemaa el-Fna, souks, riad, hammam et excursion dans l'Atlas. Le programme parfait pour un séjour court mais intense.",
    category: "Destinations",
    date: "Avril 2026",
    readTime: "5 min",
    seoTitle: "Week-end prolongé à Marrakech — Programme et conseils | SYANOR VOYAGES",
    seoDescription:
      "Découvrez Marrakech en 4 jours : Jemaa el-Fna, souks, jardins, hammam et Atlas. Programme détaillé et conseils pratiques pour un week-end réussi.",
    relatedOfferCategories: ["Séjour sur mesure", "Pack personnalisé"],
    content: [
      { type: "p", content: "Marrakech est la destination idéale pour un long week-end au départ de Nice ou Marseille. Moins de 2h30 de vol, et vous vous retrouvez dans la Médina, l'une des villes les plus envoûtantes d'Afrique." },
      { type: "h2", content: "Jour 1 : Arrivée et première plongée dans la Médina" },
      { type: "p", content: "Installez-vous dans un riad traditionnel — l'hébergement idéal pour s'immerger dans l'atmosphère marrakchie. En soirée, cap sur la place Jemaa el-Fna pour les conteurs, musiciens, acrobates et les étals de nourriture à la tombée du soir." },
      { type: "h2", content: "Jour 2 : Souks, palais et jardins" },
      { type: "ul", content: ["Souks de la Médina : cuir, épices, broderie, babouches", "Palais Bahia et Palais El Badi (ruines somptueuses)", "Jardins de la Majorelle (musée Yves Saint Laurent attenant)", "Musée de la Palmeraie pour une pause contemporaine"] },
      { type: "h2", content: "Jour 3 : Excursion dans les montagnes de l'Atlas" },
      { type: "p", content: "À seulement 1h de Marrakech, les villages berbères et les paysages de l'Atlas offrent un contraste saisissant avec la ville. La cascade d'Ouzoud (3h de route) est également une escapade très appréciée." },
      { type: "h2", content: "Jour 4 : Hammam, shopping et départ" },
      { type: "p", content: "Consacrez votre dernière matinée à un hammam traditionnel puis à vos derniers achats dans les souks. L'aéroport est à 20 minutes — aéroport Menara bien desservi depuis Nice et Marseille." },
      { type: "tip", content: "Conseil SYANOR : mars-avril et octobre-novembre sont les meilleures périodes (20-25°C, lumière dorée). Évitez les mois de juillet-août (40°C+). Nos packs Marrakech 4J/3N incluent vols directs et riad de charme." },
    ],
  },
  {
    slug: "billet-avion-meilleur-prix-astuces",
    title: "Billet d'avion au meilleur prix : nos astuces",
    excerpt:
      "Comment réserver vos billets d'avion au meilleur tarif ? Nos conseils pour choisir les bonnes dates, les bons aéroports et les bonnes compagnies.",
    category: "Conseils",
    date: "Mars 2026",
    readTime: "4 min",
    seoTitle: "Billet d'avion moins cher — Astuces et conseils pratiques | SYANOR VOYAGES",
    seoDescription:
      "Trouvez vos billets d'avion au meilleur prix : conseils sur les dates de réservation, les aéroports alternatifs, les compagnies low-cost et les erreurs à éviter.",
    relatedOfferCategories: ["Billet avion"],
    content: [
      { type: "p", content: "Trouver un billet d'avion au meilleur prix, c'est souvent une question de timing, de flexibilité et de méthode. Voici les conseils que nous partageons quotidiennement avec nos clients." },
      { type: "h2", content: "Le bon moment pour réserver" },
      { type: "ul", content: ["Courts et moyens courriers : 4 à 8 semaines à l'avance est souvent optimal", "Longs courriers (Asie, Amériques) : 2 à 4 mois à l'avance", "Été et vacances scolaires : réservez 3 à 6 mois avant", "Vols de dernière minute : rarement moins chers sur les destinations prisées"] },
      { type: "h2", content: "Flexibilité de dates = économies" },
      { type: "p", content: "Partir un mardi ou un mercredi plutôt qu'un vendredi-dimanche peut faire économiser 30 à 50% sur certaines liaisons. De même, décaler le départ ou le retour d'un jour peut changer significativement le tarif." },
      { type: "h2", content: "Aéroports alternatifs" },
      { type: "p", content: "Depuis Nice, vous pouvez également vérifier les tarifs depuis Marseille ou Toulon — parfois avec des différences importantes sur les mêmes destinations. Lyon, Genève et Barcelone peuvent aussi être envisagés pour certaines lignes." },
      { type: "h2", content: "Faut-il passer par une agence ?" },
      { type: "p", content: "Pour les billets seuls sur des liaisons directes courantes, les comparateurs sont efficaces. En revanche, pour des itinéraires complexes, des correspondances multiples, des billets ouverts ou des familles avec enfants en bas âge, une agence comme SYANOR vous fera souvent gagner du temps et de l'argent." },
      { type: "tip", content: "Conseil SYANOR : nous avons accès à des tarifs consolidateurs (négociés directement avec les compagnies) non disponibles en ligne. Contactez-nous avant de réserver — la comparaison ne vous coûte rien." },
    ],
  },
  {
    slug: "visa-schengen-algerie-maroc-tunisie",
    title: "Visa Schengen depuis l'Algérie, le Maroc et la Tunisie : guide complet",
    excerpt:
      "Tout ce qu'il faut savoir pour obtenir un visa Schengen en 2026 : documents requis, délais, consulats et erreurs à éviter.",
    category: "Visa & Administratif",
    date: "Février 2026",
    readTime: "6 min",
    seoTitle: "Visa Schengen Algérie, Maroc, Tunisie — Guide 2026 | SYANOR VOYAGES",
    seoDescription:
      "Guide complet pour obtenir un visa Schengen en 2026 depuis l'Algérie, le Maroc ou la Tunisie : documents, délais, consulats et conseils pratiques.",
    relatedOfferCategories: ["Visa"],
    content: [
      { type: "p", content: "Le visa Schengen est le sésame pour voyager librement dans 26 pays européens. Voici comment constituer un dossier solide et maximiser vos chances d'obtention." },
      { type: "h2", content: "Documents indispensables" },
      { type: "ul", content: ["Passeport biométrique valide au moins 3 mois après la date de retour prévue", "Formulaire de demande de visa Schengen complété et signé", "2 photos d'identité récentes aux normes", "Assurance voyage couvrant 30 000 € minimum dans l'espace Schengen", "Justificatif d'hébergement (hôtel réservé ou invitation chez l'habitant)", "Billets d'avion aller-retour (ou réservation remboursable)", "Justificatifs financiers : 3 derniers relevés de compte bancaire", "Justificatif de situation professionnelle (contrat de travail, extrait de registre de commerce...)"] },
      { type: "h2", content: "Délais et quand déposer" },
      { type: "p", content: "Les demandes peuvent être déposées 6 mois avant le départ et au plus tard 15 jours avant. Le délai de traitement est généralement de 15 jours ouvrés. Déposez votre dossier au minimum 4 à 6 semaines avant votre voyage." },
      { type: "h2", content: "Choisir le bon consulat" },
      { type: "p", content: "Si vous visitez plusieurs pays Schengen, déposez votre demande auprès du consulat du pays où vous séjournerez le plus longtemps. Si vous ne faites que transiter par un pays pour aller dans un autre, déposez au consulat de votre première entrée." },
      { type: "h2", content: "Les erreurs les plus fréquentes" },
      { type: "ul", content: ["Assurance voyage insuffisante (vérifiez les montants couverts)", "Dossier incomplet ou documents non traduits si requis", "Réservations d'hôtel non remboursables sans visa confirmé — préférez les réservations flexibles", "Justificatifs financiers insuffisants ou récents de moins de 3 mois"] },
      { type: "tip", content: "SYANOR VOYAGES vous accompagne dans la constitution de votre dossier visa Schengen. Nous vérifions chaque document et vous alertons en cas de manque avant le dépôt en consulat." },
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((a) => a.category === category);
}
