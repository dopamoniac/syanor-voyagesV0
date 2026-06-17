export interface OmraBlogSection {
  type: "h2" | "h3" | "p" | "ul" | "tip";
  content: string | string[];
}

export interface OmraBlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: OmraBlogSection[];
  seoTitle: string;
  seoDescription: string;
}

export const omraBlogArticles: OmraBlogArticle[] = [
  {
    slug: "comment-bien-preparer-sa-omra",
    title: "Comment bien préparer sa Omra : le guide complet",
    excerpt:
      "De l'inscription à l'arrivée aux Lieux Saints, toutes les étapes pour préparer votre Omra dans les meilleures conditions.",
    category: "Préparation",
    date: "Juin 2026",
    readTime: "7 min",
    seoTitle: "Comment bien préparer sa Omra — Guide complet | Omra Factory",
    seoDescription:
      "Découvrez comment préparer votre Omra étape par étape : documents, visa, formation, valise et conseils spirituels pour un pèlerinage serein.",
    content: [
      { type: "p", content: "La Omra est un voyage spirituel d'une importance capitale. Bien la préparer, c'est s'assurer de vivre chaque moment avec sérénité, concentration et gratitude. Ce guide vous accompagne de la décision jusqu'au retour." },
      { type: "h2", content: "1. Choisir la bonne période et la bonne formule" },
      { type: "p", content: "La Omra peut s'accomplir tout au long de l'année. Chaque période a ses avantages : l'été est plus calme, le Ramadan est spirituellement intense mais très fréquenté, et les mois d'automne et d'hiver offrent un excellent équilibre entre affluence modérée et conditions climatiques agréables." },
      { type: "ul", content: ["Octobre à décembre : idéal pour un premier voyage, températures douces", "Janvier à mars : moins fréquenté, ambiance recueillie", "Ramadan : expérience spirituelle unique, à réserver bien à l'avance", "Été : moins cher mais chaleur intense en Arabie Saoudite"] },
      { type: "h2", content: "2. Les documents obligatoires" },
      { type: "p", content: "Avant toute démarche, vérifiez que votre passeport est valide au moins 6 mois après la date de retour. Pour la Omra, un visa spécifique est requis. Depuis 2019, le visa Omra électronique simplifie les démarches pour les ressortissants de nombreux pays." },
      { type: "ul", content: ["Passeport biométrique valide minimum 6 mois", "Photos d'identité récentes (fond blanc, normes spécifiques)", "Carnet de vaccination à jour selon les exigences en vigueur", "Visa Omra (assistance incluse dans nos formules)"] },
      { type: "h2", content: "3. Se préparer spirituellement avant le départ" },
      { type: "p", content: "La préparation spirituelle est aussi importante que la préparation logistique. Omra Factory propose une formation avant départ pour vous aider à comprendre les rites, les prières spécifiques et la signification de chaque étape de la Omra." },
      { type: "ul", content: ["Apprendre les du'as essentiels (Talbiya, du'a du tawaf)", "Comprendre les conditions de l'ihrâm", "Connaître les étapes : tawaf, sa'y, taqsir ou halq", "Se préparer mentalement à la présence des Lieux Saints"] },
      { type: "h2", content: "4. Organisation pratique : billets, hôtel et transferts" },
      { type: "p", content: "Nos formules Omra incluent les vols internationaux, l'hébergement à Médine et Makkah, les transferts internes et la Ziyarat. Tout est coordonné pour que vous vous concentriez sur l'essentiel : votre dévotion." },
      { type: "tip", content: "Conseil Omra Factory : réservez au moins 3 à 4 mois à l'avance pour les départs d'octobre à décembre 2026. Les places sont limitées." },
      { type: "h2", content: "5. Santé et hygiène" },
      { type: "ul", content: ["Vaccination contre la méningite (souvent obligatoire)", "Médicaments personnels avec ordonnance et notice traduite", "Chaussures de marche confortables", "Protection solaire et crème hydratante"] },
    ],
  },
  {
    slug: "que-mettre-dans-sa-valise-pour-la-omra",
    title: "Que mettre dans sa valise pour la Omra ?",
    excerpt:
      "La liste complète de ce qu'il faut emporter pour votre Omra : vêtements, hygiène, documents et objets du quotidien.",
    category: "Préparation",
    date: "Juin 2026",
    readTime: "5 min",
    seoTitle: "Que mettre dans sa valise pour la Omra ? Liste complète | Omra Factory",
    seoDescription:
      "Liste complète pour votre valise Omra : vêtements, ihrâm, documents, médicaments et conseils pratiques pour un pèlerinage serein.",
    content: [
      { type: "p", content: "Bien préparer sa valise pour la Omra, c'est voyager l'esprit tranquille. Ni trop chargé, ni oublieux de l'essentiel. Voici la liste complète recommandée par Omra Factory." },
      { type: "h2", content: "Les vêtements pour la Omra" },
      { type: "ul", content: ["Hommes : 2 jeux d'ihrâm, ceinture, sandales légères", "Femmes : robes longues amples, plusieurs voiles, tenues adaptées à la chaleur", "3 à 4 tenues légères pour le reste du séjour", "Un manteau ou pull léger (les mosquées sont climatisées)", "Chaussures ou sandales confortables, faciles à enlever"] },
      { type: "h2", content: "Les documents essentiels" },
      { type: "ul", content: ["Passeport original + photocopie", "Visa Omra (document imprimé ou électronique)", "Carnet de vaccination", "Numéro de contact Omra Factory 24/7", "Billets d'avion imprimés ou sur téléphone"] },
      { type: "h2", content: "Hygiène et santé" },
      { type: "ul", content: ["Savon non parfumé (obligatoire pendant l'ihrâm)", "Dentifrice non parfumé", "Médicaments personnels avec ordonnance", "Anti-douleur, antihistaminique, pansements", "Crème solaire indice élevé", "Spray hydratant nasal (air très sec)"] },
      { type: "tip", content: "Conseil Omra Factory : limitez votre bagage à 20–23 kg en soute. Des vêtements légers et lavables facilitent le séjour." },
    ],
  },
  {
    slug: "etapes-essentielles-de-la-omra",
    title: "Comprendre les étapes essentielles de la Omra",
    excerpt:
      "De l'ihrâm au tawaf de sortie, découvrez chaque rite de la Omra expliqué avec clarté pour vous préparer sereinement.",
    category: "Spiritualité",
    date: "Mai 2026",
    readTime: "8 min",
    seoTitle: "Les étapes de la Omra expliquées | Omra Factory",
    seoDescription:
      "Guide complet des rites de la Omra : ihrâm, tawaf, sa'y, taqsir. Chaque étape expliquée clairement pour accomplir votre pèlerinage sereinement.",
    content: [
      { type: "p", content: "La Omra est composée de rites précis qui s'enchaînent dans un ordre défini. Comprendre leur signification avant le départ permet de les accomplir avec plus de présence et de recueillement." },
      { type: "h2", content: "Étape 1 : L'ihrâm — l'état de sacralisation" },
      { type: "p", content: "L'ihrâm marque l'entrée dans un état sacré. Pour les hommes, il s'agit de revêtir deux pièces de tissu blanc non cousu. Pour les femmes, de se couvrir modestement en laissant le visage et les mains à découvert." },
      { type: "h2", content: "Étape 2 : La Talbiya" },
      { type: "p", content: "Dès l'entrée en état d'ihrâm, le pèlerin prononce la Talbiya. Cette invocation est répétée tout au long du voyage jusqu'au début du tawaf." },
      { type: "h2", content: "Étape 3 : Le Tawaf — les 7 tours autour de la Ka'ba" },
      { type: "p", content: "Arrivé à la Grande Mosquée de Makkah, le pèlerin effectue 7 tours autour de la Ka'ba dans le sens contraire des aiguilles d'une montre." },
      { type: "h2", content: "Étape 4 : Le Sa'y — les 7 allées-retours entre Safa et Marwa" },
      { type: "p", content: "Le Sa'y consiste à parcourir 7 fois le trajet entre les monts Safa et Marwa. Ce rite commémore la course de Hajar à la recherche d'eau pour son fils Ismaïl." },
      { type: "h2", content: "Étape 5 : Le Taqsir ou Halq" },
      { type: "p", content: "Pour sortir de l'état d'ihrâm, les hommes coupent ou rasent l'intégralité des cheveux. Les femmes coupent seulement quelques centimètres de l'extrémité de leurs cheveux." },
      { type: "tip", content: "Omra Factory vous accompagne dans chaque étape avec des guides expérimentés. Notre formation avant départ vous permet d'arriver aux Lieux Saints avec confiance et sérénité." },
    ],
  },
  {
    slug: "choisir-omra-classique-plus-ramadan",
    title: "Omra classique, Omra Plus ou Ramadan : comment choisir ?",
    excerpt:
      "Vous hésitez entre une Omra classique, une formule premium ou un départ pendant le Ramadan ? Voici les différences essentielles.",
    category: "Conseils",
    date: "Avril 2026",
    readTime: "6 min",
    seoTitle: "Omra classique vs Omra Plus vs Ramadan | Omra Factory",
    seoDescription:
      "Différences entre l'Omra classique, l'Omra Plus premium et l'Omra Ramadan. Nos conseils pour choisir la formule qui correspond à votre projet.",
    content: [
      { type: "p", content: "Omra Factory propose plusieurs formules pour accomplir la Omra. Chacune répond à des besoins différents en termes de budget, de confort et d'expérience spirituelle souhaitée." },
      { type: "h2", content: "L'Omra classique : accessible et bien encadrée" },
      { type: "ul", content: ["Hôtels 3★ à 4★ selon disponibilité", "Accompagnement de groupe", "Ziyarat incluant les principaux sites", "Programme de 10 à 12 jours", "Idéal pour un premier voyage"] },
      { type: "h2", content: "L'Omra Plus : l'expérience premium ou VIP" },
      { type: "ul", content: ["Hôtels 5★ très proches du Haram", "Transferts privés", "Formation spirituelle approfondie avant départ", "Ziyarat complète avec guide spécialisé", "Suivi personnalisé avant, pendant et après"] },
      { type: "h2", content: "L'Omra pendant le Ramadan : une expérience unique" },
      { type: "ul", content: ["Ambiance spirituelle hors du commun", "Itikaf possible en dernière décade", "Réservation indispensable 4 à 6 mois avant", "Places très limitées — contacter Omra Factory dès maintenant"] },
      { type: "tip", content: "Notre conseil : pour un premier voyage, commencez par l'Omra classique. Si vous avez déjà accompli la Omra et cherchez une expérience plus profonde, l'Omra Plus ou le Ramadan est fait pour vous." },
    ],
  },
  {
    slug: "omra-2027-dates-programmes",
    title: "Omra 2027 : dates, programmes et préinscriptions",
    excerpt:
      "Les premières dates Omra 2027 sont disponibles. Découvrez les programmes, les villes de départ et comment préréserver votre place.",
    category: "Actualité",
    date: "Juin 2026",
    readTime: "5 min",
    seoTitle: "Omra 2027 — Dates, programmes et préinscriptions | Omra Factory",
    seoDescription:
      "Découvrez les départs Omra 2027 d'Omra Factory : dates confirmées, programmes, villes de départ (Nice, Marseille, Lyon, Paris) et comment réserver votre place.",
    content: [
      { type: "p", content: "Les départs Omra 2027 sont déjà en cours de planification. Plusieurs dates sont disponibles à la réservation ou en préinscription. Voici ce que nous savons à ce stade." },
      { type: "h2", content: "Périodes disponibles pour la saison Omra 2027" },
      { type: "ul", content: ["Novembre 2026 – Janvier 2027 : période creuse, affluence modérée", "Février – Avril 2027 : période recommandée pour les premiers voyages", "Ramadan 2027 (mars) : places très limitées, réservation urgente", "Été 2027 (juin-août) : disponible, chaleur intense à prévoir"] },
      { type: "h2", content: "Villes de départ confirmées" },
      { type: "ul", content: ["Nice (aéroport Nice Côte d'Azur)", "Marseille (aéroport Marseille Provence)", "Lyon (aéroport Lyon-Saint Exupéry)", "Paris (aéroports CDG et Orly)", "Toulouse (selon demande)", "Bruxelles (selon demande)"] },
      { type: "h2", content: "Les formules disponibles pour 2027" },
      { type: "p", content: "Comme pour la saison 2026, nous proposons trois niveaux de formules : Omra classique (10-12 jours), Omra Plus (21-34 jours, hôtels 5★) et des formules personnalisées selon vos dates et préférences." },
      { type: "h2", content: "Comment préréserver ?" },
      { type: "p", content: "Remplissez le formulaire de préinscription sur cette page ou contactez-nous directement par WhatsApp. Vous recevrez une confirmation de réservation dès que les dates sont confirmées, avec une priorité sur les meilleures places et hôtels." },
      { type: "tip", content: "Conseil Omra Factory : les places pour Ramadan 2027 se remplissent très rapidement. Nous recommandons de préinscrire dès maintenant pour garantir votre place dans nos programmes premium." },
    ],
  },
  {
    slug: "hajj-2027-preinscription-quotas",
    title: "Hajj 2027 : tout ce qu'il faut savoir pour s'inscrire",
    excerpt:
      "Quotas officiels, documents, délais et organisation : le guide complet pour réussir votre Hajj 2027 avec Omra Factory.",
    category: "Hajj",
    date: "Mai 2026",
    readTime: "6 min",
    seoTitle: "Hajj 2027 — Préinscription, quotas et organisation | Omra Factory",
    seoDescription:
      "Guide complet Hajj 2027 : quotas officiels par pays, documents requis, délais de réservation et organisation complète avec Omra Factory depuis Nice et Marseille.",
    content: [
      { type: "p", content: "Le Hajj 2027 approche et les préinscriptions sont ouvertes. En raison des quotas officiels stricts imposés par les autorités saoudiennes, il est essentiel de s'inscrire le plus tôt possible pour garantir sa place." },
      { type: "h2", content: "Le système de quotas : comment ça fonctionne ?" },
      { type: "p", content: "L'Arabie Saoudite applique un quota de 1 000 pèlerins pour 1 million de musulmans dans chaque pays. Ce quota est géré par les ministères des Affaires Religieuses. En France, les places sont redistribuées aux agences agréées — dont Omra Factory fait partie." },
      { type: "h2", content: "Documents requis pour le Hajj" },
      { type: "ul", content: ["Passeport biométrique valide au moins 6 mois après le retour", "Carnet de vaccination à jour (méningite obligatoire, polio recommandée)", "Photos d'identité récentes fond blanc", "Visa Hajj (géré intégralement par Omra Factory)", "Pour les femmes de moins de 45 ans : mahram ou groupe féminin organisé"] },
      { type: "h2", content: "Délais importants à respecter" },
      { type: "p", content: "Les inscriptions officielles ouvrent généralement 10 à 12 mois avant le Hajj. Une fois les places allouées à notre agence, les délais sont serrés. Il est fortement conseillé de s'inscrire dès l'ouverture." },
      { type: "h2", content: "Ce que comprend notre forfait Hajj 2027" },
      { type: "ul", content: ["Vols directs depuis Nice, Marseille, Lyon ou Paris", "Hébergement 4★/5★ à Médine, La Mecque, Mina et Arafat", "Transferts privés entre tous les sites", "Accompagnateur spirituel francophone dédié", "Assistance visa et administrative complète", "Numéro d'urgence 24/7 pendant tout le séjour"] },
      { type: "tip", content: "Omra Factory assure un accompagnement spirituel complet de la préparation jusqu'au retour. Ne tardez pas : les places pour Hajj 2027 sont très limitées. Contactez-nous dès maintenant pour votre préinscription." },
    ],
  },
  {
    slug: "departs-omra-nice-marseille-lyon",
    title: "Départs Omra depuis Nice, Marseille, Lyon et Paris",
    excerpt:
      "Trouvez facilement votre vol Omra au départ de votre ville. Calendrier des départs, compagnies desservant les Lieux Saints et conseils pratiques.",
    category: "Logistique",
    date: "Avril 2026",
    readTime: "4 min",
    seoTitle: "Départs Omra Nice, Marseille, Lyon, Paris 2026–2027 | Omra Factory",
    seoDescription:
      "Trouvez votre départ Omra depuis Nice, Marseille, Lyon ou Paris. Calendrier, compagnies aériennes et conseils pour choisir le meilleur aéroport de départ.",
    content: [
      { type: "p", content: "Omra Factory organise des départs Omra depuis 6 villes en France et Belgique. Voici tout ce que vous devez savoir pour choisir votre point de départ." },
      { type: "h2", content: "Départs depuis Nice (NCE)" },
      { type: "p", content: "Nice est notre ville principale de départ. Des vols directs ou avec escale à Médine sont régulièrement disponibles via Transavia, Air Arabia Maroc et Saudi Airlines. Vol direct : environ 5h30." },
      { type: "h2", content: "Départs depuis Marseille (MRS)" },
      { type: "p", content: "Marseille dispose de nombreuses liaisons vers Djeddah et Médine, notamment via les compagnies low-cost. Nous proposons des départs groupés depuis Marseille tout au long de la saison." },
      { type: "h2", content: "Départs depuis Lyon, Paris, Toulouse et Bruxelles" },
      { type: "ul", content: ["Lyon (LYS) : vols via CDG ou directs selon la saison", "Paris CDG : hub principal avec de nombreuses liaisons directes vers Djeddah et Médine", "Paris Orly : vols charter spéciaux Omra disponibles", "Toulouse (TLS) : sur demande selon les groupes", "Bruxelles (BRU) : départs disponibles pour nos clients belges"] },
      { type: "h2", content: "Conseil : arriver à Médine ou à Djeddah ?" },
      { type: "p", content: "Nos programmes démarrent généralement par Médine (visite de la Mosquée du Prophète) puis se terminent par La Mecque avec retour depuis Djeddah. Certains programmes inversent l'ordre selon les disponibilités de vols." },
      { type: "tip", content: "Conseil Omra Factory : si vous partez de Nice ou Marseille et que des vols directs ne sont pas disponibles à vos dates, nous optimisons les correspondances pour minimiser les temps d'attente. Votre confort est notre priorité." },
    ],
  },
];

export function getOmraArticleBySlug(slug: string): OmraBlogArticle | undefined {
  return omraBlogArticles.find((a) => a.slug === slug);
}

export function getOmraArticlesByCategory(category: string): OmraBlogArticle[] {
  return omraBlogArticles.filter((a) => a.category === category);
}
