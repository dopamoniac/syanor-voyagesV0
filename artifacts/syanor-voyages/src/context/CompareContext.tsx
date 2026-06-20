import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { TravelOffer } from "@/types";
import { offers as allOffers } from "@/data/offers";

export interface CompareContextValue {
  selected: TravelOffer[];
  isSelected: (id: string) => boolean;
  canAdd: boolean;
  toggle: (offer: TravelOffer) => void;
  clear: () => void;
}

const SESSION_KEY = "syanor_compare_v1";

function loadFromSession(): TravelOffer[] {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return [];
    const ids: string[] = JSON.parse(raw);
    return ids
      .map((id) => allOffers.find((o) => o.id === id))
      .filter((o): o is TravelOffer => !!o)
      .slice(0, 2);
  } catch {
    return [];
  }
}

function saveToSession(offers: TravelOffer[]) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(offers.map((o) => o.id)));
  } catch {}
}

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<TravelOffer[]>(() => loadFromSession());

  useEffect(() => {
    saveToSession(selected);
  }, [selected]);

  const isSelected = (id: string) => selected.some((o) => o.id === id);
  const canAdd = selected.length < 2;

  const toggle = (offer: TravelOffer) => {
    setSelected((prev) => {
      if (prev.some((o) => o.id === offer.id)) {
        return prev.filter((o) => o.id !== offer.id);
      }
      if (prev.length >= 2) return prev;
      return [...prev, offer];
    });
  };

  const clear = () => setSelected([]);

  return (
    <CompareContext.Provider value={{ selected, isSelected, canAdd, toggle, clear }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare(): CompareContextValue | null {
  return useContext(CompareContext);
}
