export type ServiceCategory =
  | "Billet avion"
  | "Billet bateau"
  | "Omra"
  | "Hajj"
  | "Omra Plus"
  | "Ramadan"
  | "Voyage organisé"
  | "Séjour sur mesure"
  | "Pack personnalisé"
  | "Visa"
  | "Formation"
  | "Assurance"
  | "Hôtel & Transferts";

export type TransportType = "Avion" | "Bateau" | "Mixte" | "Sur mesure";
export type ComfortLevel = "Standard" | "Premium" | "VIP";
export type AvailabilityStatus =
  | "Disponible"
  | "Places limitées"
  | "Sur demande"
  | "Complet"
  | "À confirmer";

export interface ProgramDay {
  day: string;
  title: string;
  description: string;
}

export interface RoomPrices {
  quad?: string;
  triple?: string;
  double?: string;
  individual?: string;
}

export interface TravelOffer {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  summary?: string;
  year?: "2026" | "2027";
  month?: string;
  monthSlug?: string;
  cityTags?: string[];
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
  roomPrices?: RoomPrices;
  includedServices: string[];
  notIncluded?: string[];
  options?: string[];
  program?: ProgramDay[];
  documents?: string[];
  paymentNotes?: string[];
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
  roomType?: string;
  message?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  serviceType: ServiceCategory;
  href: string;
  group?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  initials: string;
  context: string;
  quote: string;
}
