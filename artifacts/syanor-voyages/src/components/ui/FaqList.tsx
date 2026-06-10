
import { useRef, useState } from "react";
import type { FaqItem } from "@/types";

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-button-${index}`;

  return (
    <div
      className={`border-b border-syanor-gold/15 last:border-b-0 transition-colors duration-200 ${
        isOpen ? "bg-syanor-champagne/20" : ""
      }`}
    >
      {/* Left gold accent when open */}
      <div className="relative">
        <div
          className={`absolute inset-y-0 left-0 w-[3px] rounded-full bg-syanor-gold transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <h3>
          <button
            id={btnId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={onToggle}
            className="flex w-full items-start justify-between gap-4 py-5 pl-5 pr-5 text-left transition-colors duration-200 focus-visible:outline-none"
          >
            <span
              className={`font-playfair text-base leading-snug transition-colors duration-200 md:text-lg ${
                isOpen ? "text-syanor-emerald" : "text-syanor-ink"
              }`}
            >
              {question}
            </span>
            {/* Animated +/- icon */}
            <span
              className={`relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "border-syanor-gold/50 bg-syanor-gold/10 text-syanor-gold"
                  : "border-syanor-gold/25 bg-transparent text-syanor-ink/40"
              }`}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-3.5 w-3.5"
              >
                <path d="M8 3v10M3 8h10" className={`transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <path d="M3 8h10" className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"} absolute`} />
              </svg>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={`absolute h-3.5 w-3.5 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}
              >
                <path d="M3 8h10" />
              </svg>
            </span>
          </button>
        </h3>
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="accordion-content"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : 0 }}
      >
        <div
          ref={contentRef}
          className="pb-5 pl-5 pr-10 text-sm leading-relaxed text-syanor-ink/65"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="overflow-hidden rounded-2xl border border-syanor-gold/20 bg-syanor-ivory shadow-card">
      {items.map((item, i) => (
        <FaqRow
          key={item.question}
          index={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
