"use client";

import { useState } from "react";
import Link from "@/components/Link";

const PANELS = [
  {
    id: "voyages",
    href: "/agence",
    eyebrow: "Agence de Voyages",
    title: "SYANOR\nVOYAGES",
    description: "Billets · Séjours · Croisières · Hôtels · VIP",
    cta: "Découvrir l'Agence",
    accent: "#D8B56A",
    tint: "rgba(11,30,61,0.48)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
        style={{ width: 18, height: 18, flexShrink: 0 }}
      >
        <circle cx="12" cy="12" r="10" />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "omra",
    href: "/omra-factory",
    eyebrow: "Voyages Spirituels",
    title: "OMRA\nFACTORY",
    description: "Omra · Hajj · Ramadan · Ziyarat · Accompagnement",
    cta: "Découvrir Omra Factory",
    accent: "#D8B56A",
    tint: "rgba(2,43,36,0.50)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        style={{ width: 18, height: 18, flexShrink: 0 }}
      >
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
] as const;

export default function PortalSplit() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      id="portal-split-root"
      style={{
        display: "flex",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── SHARED BACKGROUND IMAGE (one photo across both panels) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/hero-renaissance.png"
          alt=""
          loading="eager"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      {/* ── PANELS ── */}
      {PANELS.map((panel) => {
        const isHovered = hovered === panel.id;
        const otherHovered = hovered !== null && !isHovered;

        return (
          <div
            key={panel.id}
            onMouseEnter={() => setHovered(panel.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              zIndex: 1,
              flex: otherHovered ? "0.65" : isHovered ? "1.35" : "1",
              transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {/* Color tint overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: panel.tint,
                opacity: isHovered ? 0.72 : 0.85,
                transition: "opacity 0.55s ease",
              }}
            />

            {/* Bottom gradient */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.12) 45%, transparent 100%)",
              }}
            />

            {/* Gold divider line on right panel's left edge */}
            {panel.id === "omra" && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 1,
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(216,181,106,0.55) 25%, rgba(216,181,106,0.55) 75%, transparent 100%)",
                  zIndex: 5,
                }}
              />
            )}

            {/* Content link */}
            <Link
              href={panel.href}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "clamp(28px, 5vw, 56px)",
                textDecoration: "none",
              }}
            >
              {/* Eyebrow */}
              <p
                style={{
                  fontSize: "0.58rem",
                  fontWeight: 700,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: panel.accent,
                  marginBottom: 10,
                  opacity: isHovered ? 1 : 0.80,
                  transform: isHovered ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {panel.eyebrow}
              </p>

              {/* Gold rule */}
              <div
                aria-hidden="true"
                style={{
                  width: isHovered ? 48 : 28,
                  height: 1,
                  background: `linear-gradient(to right, ${panel.accent}, transparent)`,
                  marginBottom: 14,
                  transition: "width 0.4s ease",
                }}
              />

              {/* Title */}
              <h2
                className="font-playfair"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 1.0,
                  color: "#F8F4EE",
                  whiteSpace: "pre-line",
                  textShadow: "0 2px 20px rgba(0,0,0,0.45)",
                  marginBottom: 14,
                  letterSpacing: "-0.01em",
                }}
              >
                {panel.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(248,244,238,0.62)",
                  marginBottom: 28,
                  opacity: isHovered ? 1 : 0.7,
                  transition: "opacity 0.4s ease",
                }}
              >
                {panel.description}
              </p>

              {/* CTA button */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  height: 50,
                  paddingLeft: 26,
                  paddingRight: 26,
                  borderRadius: 999,
                  border: `1px solid ${panel.accent}`,
                  background: isHovered
                    ? panel.accent
                    : "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: isHovered ? "#0B1E3D" : "#F8F4EE",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  transition:
                    "background 0.35s ease, color 0.35s ease, transform 0.25s ease, box-shadow 0.35s ease",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 10px 28px rgba(216,181,106,0.30)"
                    : "none",
                  alignSelf: "flex-start",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                <span style={{ color: isHovered ? "#0B1E3D" : panel.accent }}>
                  {panel.icon}
                </span>
                {panel.cta}
              </div>
            </Link>

            {/* Top-corner label */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "clamp(20px, 4vw, 40px)",
                left: "clamp(20px, 4vw, 40px)",
                zIndex: 10,
                opacity: isHovered ? 1 : 0.45,
                transition: "opacity 0.35s ease",
                pointerEvents: "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.52rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: panel.accent,
                }}
              >
                SYANOR VOYAGES
              </p>
            </div>
          </div>
        );
      })}

      {/* Center divider badge */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "rgba(248,244,238,0.10)",
          border: "1px solid rgba(216,181,106,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 1,
            height: 20,
            background: "rgba(216,181,106,0.70)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 639px) {
          #portal-split-root { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
