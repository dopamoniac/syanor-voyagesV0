
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ServiceCategory, TransportType, ComfortLevel } from "@/types";
import { scrollToQuote as scrollToQuoteUtil } from "@/lib/utils";

export interface ConfiguratorPrefill {
  destination?: string;
  transport?: TransportType;
  comfort?: ComfortLevel;
  travelers?: number;
}

interface QuoteContextType {
  selectedService: ServiceCategory | "";
  selectedOffer: string;
  prefill: ConfiguratorPrefill;
  setSelectedService: (s: ServiceCategory | "") => void;
  setSelectedOffer: (o: string) => void;
  setPrefill: (p: ConfiguratorPrefill) => void;
  scrollToQuote: () => void;
  /** Convenience: set service then scroll. */
  requestService: (s: ServiceCategory | "") => void;
  /** Convenience: set offer + service then scroll. */
  requestOffer: (offerTitle: string, category: ServiceCategory) => void;
  /** Convenience: pass full configurator + service then scroll. */
  requestConfigurator: (p: ConfiguratorPrefill) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<ServiceCategory | "">("");
  const [selectedOffer, setSelectedOffer] = useState<string>("");
  const [prefill, setPrefill] = useState<ConfiguratorPrefill>({});

  const scrollToQuote = useCallback(() => {
    scrollToQuoteUtil();
  }, []);

  const requestService = useCallback(
    (s: ServiceCategory | "") => {
      setSelectedService(s);
      setSelectedOffer("");
      // Allow state to flush before scrolling.
      requestAnimationFrame(() => scrollToQuoteUtil());
    },
    []
  );

  const requestOffer = useCallback(
    (offerTitle: string, category: ServiceCategory) => {
      setSelectedOffer(offerTitle);
      setSelectedService(category);
      requestAnimationFrame(() => scrollToQuoteUtil());
    },
    []
  );

  const requestConfigurator = useCallback((p: ConfiguratorPrefill) => {
    setPrefill(p);
    setSelectedService("Séjour sur mesure");
    setSelectedOffer("");
    requestAnimationFrame(() => scrollToQuoteUtil());
  }, []);

  const value = useMemo<QuoteContextType>(
    () => ({
      selectedService,
      selectedOffer,
      prefill,
      setSelectedService,
      setSelectedOffer,
      setPrefill,
      scrollToQuote,
      requestService,
      requestOffer,
      requestConfigurator,
    }),
    [
      selectedService,
      selectedOffer,
      prefill,
      scrollToQuote,
      requestService,
      requestOffer,
      requestConfigurator,
    ]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote(): QuoteContextType {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return ctx;
}
