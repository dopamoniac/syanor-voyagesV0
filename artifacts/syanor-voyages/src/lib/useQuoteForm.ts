
import { useEffect, useState } from "react";
import { useSearch } from "wouter";
import { useQuote } from "@/components/providers/QuoteContext";
import type { ComfortLevel, QuoteFormData, ServiceCategory, TransportType } from "@/types";

export type SubmitState = "idle" | "loading" | "success" | "error";

const SERVICE_VALUES: ServiceCategory[] = [
  "Billet avion",
  "Billet bateau",
  "Omra",
  "Hajj",
  "Omra Plus",
  "Ramadan",
  "Voyage organisé",
  "Séjour sur mesure",
  "Pack personnalisé",
];

const initialData: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  selectedOffer: "",
  departureDate: "",
  returnDate: "",
  departureCity: "",
  destination: "",
  transport: undefined,
  travelers: 1,
  comfort: undefined,
  message: "",
};

/**
 * Portable quote-form hook. Business logic decoupled from the web UI layer
 * (reusable from a future React Native client with a different view).
 * Prefill order: URL query params (cross-page CTAs) → QuoteContext (same-page CTAs).
 */
export function useQuoteForm() {
  const { selectedService, selectedOffer, prefill } = useQuote();
  const search = useSearch();
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // 1) Read prefill from URL query params (cross-page navigation CTAs).
  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const service = searchParams.get("service");
    const offer = searchParams.get("offer");
    const destination = searchParams.get("destination");
    const transport = searchParams.get("transport");
    const comfort = searchParams.get("comfort");

    setData((d) => ({
      ...d,
      serviceType:
        service && SERVICE_VALUES.includes(service as ServiceCategory)
          ? (service as ServiceCategory)
          : d.serviceType,
      selectedOffer: offer ?? d.selectedOffer,
      destination: destination ?? d.destination,
      transport: (transport as TransportType) ?? d.transport,
      comfort: (comfort as ComfortLevel) ?? d.comfort,
    }));
  }, [search]);

  // 2) Sync preselections coming from same-page CTAs / configurator (context).
  useEffect(() => {
    if (selectedService) {
      setData((d) => ({ ...d, serviceType: selectedService as ServiceCategory }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedOffer) {
      setData((d) => ({ ...d, selectedOffer }));
    }
  }, [selectedOffer]);

  useEffect(() => {
    setData((d) => ({
      ...d,
      destination: prefill.destination ?? d.destination,
      transport: prefill.transport ?? d.transport,
      comfort: prefill.comfort ?? d.comfort,
      travelers: prefill.travelers ?? d.travelers,
    }));
  }, [prefill]);

  const update = <K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Erreur inconnue");
      }
      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Erreur");
      setState("error");
    }
  };

  return { data, update, state, errorMsg, submit, setState };
}
