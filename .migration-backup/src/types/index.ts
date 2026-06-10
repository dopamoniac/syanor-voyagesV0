export type ServiceCategory =
  | "Billet avion"
  | "Billet bateau"
  | "Omra"
  | "Hajj"
  | "Omra Plus"
  | "Ramadan"
  | "Voyage organisé"
  | "Séjour sur mesure"
  | "Pack personnalisé";

export type TransportType = "Avion" | "Bateau" | "Mixte" | "Sur mesure";
export type ComfortLevel = "Standard" | "Premium" | "VIP";
export type AvailabilityStatus =
  | "Disponible"
  | "Places limitées"
  | "Sur demande"
  | "Complet";

export interface ProgramDay {
  day: string;
  title: string;
  description: string;
}

export interface TravelOffer {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  summary?: string;
  departureDate?: string;
  returnDate?: string;
  duration?: string;
  departureCity?: string;
  arrivalCity?: string;
  outboundRoute?: string;
  inboundRoute?: string;
  transportType?: TransportType;
  airlineOrCompany?: string;
  comfortLevel?: ComfortLevel;
  hotelLevel?: string;
  includedServices: string[];
  notIncluded?: string[];
  program?: ProgramDay[];
  documents?: string[];
  notes?: string[];
  priceFrom?: string;
  availabilityStatus?: AvailabilityStatus;
  featured?: boolean;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: ServiceCategory | "";
  selectedOffer?: string;
  departureDate?: string;
  returnDate?: string;
  departureCity?: string;
  destination?: string;
  transport?: TransportType;
  travelers?: number;
  comfort?: ComfortLevel;
  message?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  serviceType: ServiceCategory;
  /** Link to the dedicated page for this service ("En savoir plus"). */
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  initials: string;
  context: string;
  quote: string;
}
