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
    slug: "comment-bien-preparer-sa-omra",
    title: "Comment bien préparer sa Omra : le guide complet",
    excerpt:
      "De l'inscription à l'arrivée aux Lieux Saints, toutes les étapes pour préparer votre Omra dans les meilleures conditions.",
    category: "Préparation",
    date: "Juin 2026",
    readTime: "7 min",
    seoTitle: "Comment bien préparer sa Omra — Guide complet | SYANOR VOYAGES",
    seoDescription:
      "Découvrez comment préparer votre Omra étape par étape : documents, visa, formation, valise et conseils spirituels pour un pèlerinage serein.",
    relatedOfferCategories: ["Omra", "Omra Plus"],
    content: [
      { type: "p", content: "La Omra est un voyage spirituel d'une importance capitale. Bien la préparer, c'est s'assurer de vivre chaque moment avec sérénité, concentration et gratitude. Ce guide vous accompagne de la décision jusqu'au retour." },
      { type: "h2", content: "1. Choisir la bonne période et la bonne formule" },
      { type: "p", content: "La Omra peut s'accomplir tout au long de l'année. Chaque période a ses avantages : l'été est plus calme, le Ramadan est spirituellement intense mais très fréquenté, et les mois d'automne et d'hiver offrent un excellent équilibre entre affluence modérée et conditions climatiques agréables." },
      { type: "ul", content: ["Octobre à décembre : idéal pour un premier voyage, températures douces", "Janvier à mars : moins fréquenté, ambiance recueillie", "Ramadan : expérience spirituelle unique, à réserver bien à l'avance", "Été : moins cher mais chaleur intense en Arabie Saoudite"] },
      { type: "h2", content: "2. Les documents obligatoires" },
      { type: "p", content: "Avant toute démarche, vérifiez que votre passeport est valide au moins 6 mois après la date de retour. Pour la Omra, un visa spécifique est requis. Depuis 2019, le visa Omra électronique simplifie les démarches pour les ressortissants de nombreux pays." },
      { type: "ul", content: ["Passeport biométrique valide minimum 6 mois", "Photos d'identité récentes (fond blanc, normes spécifiques)", "Carnet de vaccination à jour selon les exigences en vigueur", "Visa Omra (assistance incluse dans nos formules)"] },
      { type: "h2", content: "3. Se préparer spirituellement avant le départ" },
      { type: "p", content: "La préparation spirituelle est aussi importante que la préparation logistique. SYANOR propose une formation avant départ pour vous aider à comprendre les rites, les prières spécifiques et la signification de chaque étape de la Omra." },
      { type: "ul", content: ["Apprendre les du'as essentiels (Talbiya, du'a du tawaf)", "Comprendre les conditions de l'ihrâm", "Connaître les étapes : tawaf, sa'y, taqsir ou halq", "Se préparer mentalement à la présence des Lieux Saints"] },
      { type: "h2", content: "4. Organisation pratique : billets, hôtel et transferts" },
      { type: "p", content: "Nos formules Omra incluent les vols internationaux, l'hébergement à Médine et Makkah, les transferts internes et la Ziyarat. Tout est coordonné pour que vous vous concentriez sur l'essentiel : votre dévotion." },
      { type: "tip", content: "Conseil SYANOR : Réservez au moins 3 à 4 mois à l'avance pour les départs d'octobre à décembre 2026. Les places sont limitées." },
      { type: "h2", content: "5. Santé et hygiène" },
      { type: "p", content: "Assurez-vous d'être en bonne condition physique avant le départ. La Omra implique de nombreuses marches, parfois sous la chaleur. Consultez votre médecin si vous avez des conditions médicales particulières." },
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
    seoTitle: "Que mettre dans sa valise pour la Omra ? Liste complète | SYANOR VOYAGES",
    seoDescription:
      "Liste complète pour votre valise Omra : vêtements, ihrâm, documents, médicaments et conseils pratiques pour un pèlerinage serein.",
    relatedOfferCategories: ["Omra", "Omra Plus"],
    content: [
      { type: "p", content: "Bien préparer sa valise pour la Omra, c'est voyager l'esprit tranquille. Ni trop chargé, ni oublieux de l'essentiel. Voici la liste complète recommandée par SYANOR VOYAGES." },
      { type: "h2", content: "Les vêtements pour la Omra" },
      { type: "p", content: "Pour les hommes, l'ihrâm est obligatoire : deux pièces de tissu blanc non cousu. Pour les femmes, la tenue doit être modeste et couverte, en évitant le voile qui couvre le visage lors de l'ihrâm." },
      { type: "ul", content: ["Hommes : 2 jeux d'ihrâm, ceinture, sandales légères", "Femmes : robes longues amples, plusieurs voiles, tenues adaptées à la chaleur", "3 à 4 tenues légères pour le reste du séjour", "Un manteau ou pull léger (les mosquées sont climatisées)", "Chaussures ou sandales confortables, faciles à enlever"] },
      { type: "h2", content: "Les documents essentiels" },
      { type: "ul", content: ["Passeport original + photocopie", "Visa Omra (document imprimé ou électronique)", "Carnet de vaccination", "Numéro de contact SYANOR 24/7", "Billets d'avion imprimés ou sur téléphone", "Numéro de votre hôtel à Médine et Makkah"] },
      { type: "h2", content: "Hygiène et santé" },
      { type: "ul", content: ["Savon non parfumé (obligatoire pendant l'ihrâm)", "Dentifrice non parfumé", "Médicaments personnels avec ordonnance", "Anti-douleur, antihistaminique, pansements", "Crème solaire indice élevé", "Spray hydratant nasal (air très sec)", "Masque de protection (recommandé)"] },
      { type: "h2", content: "Accessoires pratiques" },
      { type: "ul", content: ["Adaptateur de prise électrique (type G en Arabie Saoudite)", "Téléphone chargé avec applications utiles (qibla, du'as)", "Petit carnet pour noter vos du'as et intentions", "Sac à dos léger pour les journées aux Lieux Saints", "Bouteille d'eau réutilisable"] },
      { type: "tip", content: "Conseil SYANOR : Limitez votre bagage à 20–23 kg en soute. Des vêtements légers et lavables facilitent le séjour. Médine et Makkah ont de nombreuses boutiques si vous avez oublié quelque chose." },
    ],
  },
  {
    slug: "comprendre-les-etapes-essentielles-de-la-omra",
    title: "Comprendre les étapes essentielles de la Omra",
    excerpt:
      "De l'ihrâm au tawaf de sortie, découvrez chaque rite de la Omra expliqué avec clarté pour vous préparer sereinement.",
    category: "Spiritualité",
    date: "Mai 2026",
    readTime: "8 min",
    seoTitle: "Les étapes de la Omra expliquées | SYANOR VOYAGES",
    seoDescription:
      "Guide complet des rites de la Omra : ihrâm, tawaf, sa'y, taqsir. Chaque étape expliquée clairement pour accomplir votre pèlerinage sereinement.",
    relatedOfferCategories: ["Omra", "Omra Plus", "Ramadan"],
    content: [
      { type: "p", content: "La Omra est composée de rites précis qui s'enchaînent dans un ordre défini. Comprendre leur signification avant le départ permet de les accomplir avec plus de présence et de recueillement." },
      { type: "h2", content: "Étape 1 : L'ihrâm — l'état de sacralisation" },
      { type: "p", content: "L'ihrâm marque l'entrée dans un état sacré. Pour les hommes, il s'agit de revêtir deux pièces de tissu blanc non cousu. Pour les femmes, de se couvrir modestement en laissant le visage et les mains à découvert. À partir de ce moment, certains actes sont interdits (parfum, relations conjugales, taille des ongles et cheveux)." },
      { type: "h2", content: "Étape 2 : La Talbiya" },
      { type: "p", content: "Dès l'entrée en état d'ihrâm, le pèlerin prononce la Talbiya : « Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, inna l-hamda wa-n-ni'mata laka wa-l-mulk, la sharika lak. » Cette invocation est répétée tout au long du voyage jusqu'au début du tawaf." },
      { type: "h2", content: "Étape 3 : Le Tawaf — les 7 tours autour de la Ka'ba" },
      { type: "p", content: "Arrivé à la Grande Mosquée de Makkah, le pèlerin effectue 7 tours autour de la Ka'ba dans le sens contraire des aiguilles d'une montre. Chaque tour commence et se termine au niveau de la Pierre Noire. Des invocations spécifiques sont récitées à chaque tour." },
      { type: "h2", content: "Étape 4 : La prière derrière le Maqam Ibrahim" },
      { type: "p", content: "Après le tawaf, le pèlerin accomplit deux rak'as derrière le Maqam Ibrahim, en récitant la sourate Al-Kafiroun et Al-Ikhlas." },
      { type: "h2", content: "Étape 5 : Le Sa'y — les 7 allées-retours entre Safa et Marwa" },
      { type: "p", content: "Le Sa'y consiste à parcourir 7 fois le trajet entre les monts Safa et Marwa. Ce rite commémore la course de Hajar à la recherche d'eau pour son fils Ismaïl. Il commence à Safa et se termine à Marwa." },
      { type: "h2", content: "Étape 6 : Le Taqsir ou Halq — couper ou raser les cheveux" },
      { type: "p", content: "Pour sortir de l'état d'ihrâm, les hommes coupent ou rasent l'intégralité des cheveux (halq est préférable). Les femmes coupent seulement quelques centimètres de l'extrémité de leurs cheveux (taqsir)." },
      { type: "tip", content: "SYANOR vous accompagne dans chaque étape avec des guides expérimentés. Notre formation avant départ vous permet d'arriver aux Lieux Saints avec confiance et sérénité." },
    ],
  },
  {
    slug: "choisir-entre-omra-classique-omra-plus-et-ramadan",
    title: "Omra classique, Omra Plus ou Ramadan : comment choisir ?",
    excerpt:
      "Vous hésitez entre une Omra classique, une formule premium ou un départ pendant le Ramadan ? Voici les différences essentielles.",
    category: "Conseils",
    date: "Avril 2026",
    readTime: "6 min",
    seoTitle: "Omra classique vs Omra Plus vs Ramadan — Comment choisir | SYANOR VOYAGES",
    seoDescription:
      "Différences entre l'Omra classique, l'Omra Plus premium et l'Omra Ramadan. Nos conseils pour choisir la formule qui correspond à votre projet.",
    relatedOfferCategories: ["Omra", "Omra Plus", "Ramadan"],
    content: [
      { type: "p", content: "SYANOR VOYAGES propose plusieurs formules pour accomplir la Omra. Chacune répond à des besoins différents en termes de budget, de confort et d'expérience spirituelle souhaitée." },
      { type: "h2", content: "L'Omra classique : accessible et bien encadrée" },
      { type: "p", content: "La formule classique est idéale pour un premier voyage spirituel ou pour ceux qui souhaitent une organisation simple et efficace. Elle inclut les vols, l'hébergement, les transferts et l'accompagnement essentiel." },
      { type: "ul", content: ["Hôtels 3★ à 4★ selon disponibilité", "Accompagnement de groupe", "Ziyarat incluant les principaux sites", "Programme de 10 à 12 jours", "Idéal pour un premier voyage"] },
      { type: "h2", content: "L'Omra Plus : l'expérience premium ou VIP" },
      { type: "p", content: "Pour ceux qui souhaitent un accompagnement renforcé et des conditions de confort supérieures, l'Omra Plus offre des hôtels plus proches des Lieux Saints, des transferts privés et une formation approfondie avant départ." },
      { type: "ul", content: ["Hôtels 5★ très proches du Haram", "Transferts privés", "Formation spirituelle approfondie avant départ", "Ziyarat complète avec guide spécialisé", "Suivi personnalisé avant, pendant et après"] },
      { type: "h2", content: "L'Omra pendant le Ramadan : une expérience unique" },
      { type: "p", content: "Accomplir la Omra pendant le Ramadan est d'une récompense exceptionnelle. L'atmosphère est unique, la concentration spirituelle intense et la fraternité entre pèlerins remarquable. Cependant, l'affluence est très importante : réservez plusieurs mois à l'avance." },
      { type: "ul", content: ["Ambiance spirituelle hors du commun", "Itikaf possible en dernière décade", "Réservation indispensable 4 à 6 mois avant", "Places très limitées — contacter SYANOR dès maintenant"] },
      { type: "tip", content: "Notre conseil : pour un premier voyage, commencez par l'Omra classique de novembre ou décembre. Si vous avez déjà accompli la Omra et cherchez une expérience plus profonde, l'Omra Plus ou le Ramadan est fait pour vous." },
    ],
  },
  {
    slug: "billet-avion-ou-pack-complet-comment-choisir",
    title: "Billet avion seul ou pack complet : comment choisir ?",
    excerpt:
      "Vous réfléchissez à organiser votre voyage vous-même ou à passer par un pack complet ? Voici les avantages et inconvénients de chaque option.",
    category: "Conseils",
    date: "Mars 2026",
    readTime: "5 min",
    seoTitle: "Billet avion seul ou pack Omra complet — Comment choisir | SYANOR VOYAGES",
    seoDescription:
      "Avantages et inconvénients du billet avion seul vs le pack Omra complet. Nos conseils pour faire le meilleur choix selon votre profil.",
    relatedOfferCategories: ["Billet avion", "Omra", "Omra Plus"],
    content: [
      { type: "p", content: "Certains voyageurs souhaitent gérer leur itinéraire de façon autonome. D'autres préfèrent déléguer toute l'organisation. SYANOR vous accompagne dans les deux cas." },
      { type: "h2", content: "Le billet avion seul : pour qui ?" },
      { type: "p", content: "Si vous avez déjà accompli la Omra, si vous avez de la famille sur place ou si vous souhaitez construire votre programme librement, la réservation de billet seul peut être la solution." },
      { type: "ul", content: ["Liberté totale dans l'organisation", "Idéal pour les voyageurs expérimentés", "Possibilité de prolonger le séjour", "Gestion personnelle de l'hébergement et des transferts"] },
      { type: "h2", content: "Le pack complet : pourquoi c'est souvent le meilleur choix" },
      { type: "p", content: "Pour un premier voyage ou pour ceux qui souhaitent se concentrer sur le spirituel sans gérer la logistique, le pack complet offre une tranquillité d'esprit inégalable." },
      { type: "ul", content: ["Tout est inclus : vol, hôtel, transferts, accompagnement", "Assistance visa incluse", "Guide et accompagnateur sur place", "Numéro d'urgence 24/7", "Programme Ziyarat organisé", "Pas de mauvaise surprise sur les prix"] },
      { type: "h2", content: "Notre recommandation" },
      { type: "p", content: "Pour un premier voyage aux Lieux Saints, nous recommandons vivement le pack complet. La Omra demande une préparation spirituelle intense — avoir la logistique gérée vous permet de vous concentrer entièrement sur votre pèlerinage." },
      { type: "tip", content: "SYANOR propose également des billets avion seuls si vous souhaitez organiser votre voyage en autonomie. Contactez-nous pour une recherche personnalisée." },
    ],
  },
  {
    slug: "visa-arabie-saoudite-documents-et-conseils",
    title: "Visa Arabie Saoudite : documents requis et conseils pratiques",
    excerpt:
      "Tout ce que vous devez savoir sur le visa Omra et le visa touristique pour l'Arabie Saoudite : démarches, documents et délais.",
    category: "Visa & Administratif",
    date: "Février 2026",
    readTime: "6 min",
    seoTitle: "Visa Arabie Saoudite pour la Omra — Documents et conseils | SYANOR VOYAGES",
    seoDescription:
      "Guide visa Arabie Saoudite pour la Omra : documents requis, démarches, délais et erreurs à éviter. Assistance incluse dans nos formules.",
    relatedOfferCategories: ["Omra", "Omra Plus"],
    content: [
      { type: "p", content: "Depuis la réforme des visas saoudiens en 2019, les démarches pour la Omra ont été simplifiées pour de nombreux ressortissants. Voici ce qu'il faut savoir." },
      { type: "h2", content: "Le visa Omra : qu'est-ce que c'est ?" },
      { type: "p", content: "Le visa Omra est un visa spécifique délivré uniquement pour accomplir la Omra. Il est valable pour la durée du séjour et ne permet pas d'autres activités touristiques. Il est généralement obtenu via une agence de voyage agréée." },
      { type: "h2", content: "Documents requis pour le visa Omra" },
      { type: "ul", content: ["Passeport biométrique valide 6 mois après la date de retour", "Photos d'identité récentes (fond blanc, 35×45 mm)", "Formulaire de demande de visa dûment rempli", "Justificatif de vaccination méningococcique", "Pour les femmes de moins de 45 ans : accompagnement d'un mahram ou groupe organisé"] },
      { type: "h2", content: "Délais et procédure" },
      { type: "p", content: "Le visa Omra est généralement obtenu en 5 à 10 jours ouvrés. SYANOR prend en charge l'intégralité du dossier visa dans le cadre de nos formules Omra." },
      { type: "h2", content: "Erreurs courantes à éviter" },
      { type: "ul", content: ["Passeport expirant dans moins de 6 mois", "Photos non conformes aux normes saoudiennes", "Carnet de vaccination périmé ou incomplet", "Demande déposée trop tard (moins de 3 semaines avant le départ)"] },
      { type: "h2", content: "Visa touristique vs visa Omra" },
      { type: "p", content: "Depuis 2019, l'Arabie Saoudite propose également un visa touristique électronique (eVisa) qui permet de visiter le pays et d'accomplir la Omra. Ce visa est plus souple mais ne remplace pas toujours le visa Omra traditionnel selon les agences." },
      { type: "tip", content: "SYANOR gère l'ensemble du dossier visa pour vous dans le cadre de nos formules Omra. Pas de démarches administratives à gérer de votre côté." },
    ],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter((a) => a.category === category);
}
