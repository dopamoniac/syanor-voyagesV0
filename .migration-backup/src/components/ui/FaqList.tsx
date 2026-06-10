"use client";

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
    <div className="border-b border-syanor-gold/20">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-playfair text-base text-syanor-ink md:text-lg">
            {question}
          </span>
          <svg
            className={`h-5 w-5 shrink-0 text-syanor-gold transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="accordion-content"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : 0 }}
      >
        <div ref={contentRef} className="pb-5 pr-8 font-inter text-sm leading-relaxed text-syanor-ink/70">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-syanor-gold/20 bg-syanor-ivory px-6 md:px-8">
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
