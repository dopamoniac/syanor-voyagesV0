"use client";

import { useState, useEffect } from "react";
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
    side: "left",
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
    side: "right",
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
  const [tapped, setTapped] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleTouchStart(id: string) {
    setTapped(id);
    setTimeout(() => setTapped(null), 420);
  }

  return (
    <div
      id="portal-split-root"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100svh",
        minHeight: isMobile ? "unset" : 600,
        overflow: "hidden",
        position: "relative",
        overflowX: "hidden",
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
        const isActive = isMobile ? tapped === panel.id : hovered === panel.id;
        const otherActive = isMobile
          ? false
          : hovered !== null && !isActive;
        const isLeft = panel.side === "left";

        return (
          <div
            key={panel.id}
            onMouseEnter={isMobile ? undefined : () => setHovered(panel.id)}
            onMouseLeave={isMobile ? undefined : () => setHovered(null)}
            onTouchStart={isMobile ? () => handleTouchStart(panel.id) : undefined}
            style={{
              position: "relative",
              zIndex: 1,
              flex: isMobile ? "none" : (otherActive ? "0.65" : isActive ? "1.35" : "1"),
              height: isMobile ? "50svh" : "auto",
              transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              overflow: "hidden",
              cursor: "pointer",
              animation: isLeft
                ? "ps-slide-left 0.9s cubic-bezier(0.22, 1, 0.36, 1) both"
                : "ps-slide-right 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            {/* Color tint overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: panel.tint,
                opacity: isActive ? 0.72 : 0.85,
                transition: "opacity 0.55s ease",
              }}
            />

            {/* Tap flash highlight (mobile only) */}
            {isMobile && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(ellipse at center, ${panel.accent}22 0%, transparent 70%)`,
                  opacity: tapped === panel.id ? 1 : 0,
                  transition: "opacity 0.42s ease",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
            )}

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

            {/* Gold divider line — right edge on desktop, bottom edge on mobile (omra panel) */}
            {panel.id === "omra" && (
              <div
                aria-hidden="true"
                style={
                  isMobile
                    ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 1,
                        background:
                          "linear-gradient(to right, transparent 0%, rgba(216,181,106,0.55) 25%, rgba(216,181,106,0.55) 75%, transparent 100%)",
                        zIndex: 5,
                      }
                    : {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 1,
                        height: "100%",
                        background:
                          "linear-gradient(to bottom, transparent 0%, rgba(216,181,106,0.55) 25%, rgba(216,181,106,0.55) 75%, transparent 100%)",
                        zIndex: 5,
                      }
                }
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
                justifyContent: isMobile ? "center" : "flex-end",
                alignItems: isMobile ? "center" : "flex-start",
                padding: isMobile
                  ? "clamp(20px, 5vw, 32px) clamp(24px, 6vw, 40px)"
                  : "clamp(28px, 5vw, 56px)",
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
                  opacity: isActive ? 1 : 0.80,
                  transform: isActive ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  animation: "ps-up 0.7s 0.75s both",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {panel.eyebrow}
              </p>

              {/* Gold rule */}
              <div
                aria-hidden="true"
                style={{
                  width: isActive ? 48 : 28,
                  height: 1,
                  background: `linear-gradient(to right, ${panel.accent}, transparent)`,
                  marginBottom: 14,
                  transition: "width 0.4s ease",
                  animation: "ps-fadein 0.7s 0.85s both",
                  alignSelf: isMobile ? "center" : "auto",
                }}
              />

              {/* Title */}
              <h2
                className="font-playfair"
                style={{
                  fontSize: isMobile
                    ? "clamp(34px, 10vw, 52px)"
                    : "clamp(36px, 5.5vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 1.0,
                  color: "#F8F4EE",
                  whiteSpace: "pre-line",
                  textShadow: "0 2px 20px rgba(0,0,0,0.45)",
                  marginBottom: 14,
                  letterSpacing: "-0.01em",
                  animation: "ps-up 0.8s 0.90s both",
                  textAlign: isMobile ? "center" : "left",
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
                  opacity: isActive ? 1 : 0.7,
                  transition: "opacity 0.4s ease",
                  animation: "ps-up 0.8s 1.05s both",
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: isMobile ? "90%" : "none",
                  lineHeight: isMobile ? 1.7 : "normal",
                }}
              >
                {panel.description}
              </p>

              {/* CTA button */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  height: 50,
                  paddingLeft: 26,
                  paddingRight: 26,
                  borderRadius: 999,
                  border: `1px solid ${panel.accent}`,
                  background: isActive
                    ? panel.accent
                    : "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: isActive ? "#0B1E3D" : "#F8F4EE",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  transition:
                    "background 0.35s ease, color 0.35s ease, transform 0.25s ease, box-shadow 0.35s ease",
                  transform: isActive ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: isActive
                    ? "0 10px 28px rgba(216,181,106,0.30)"
                    : "none",
                  alignSelf: isMobile ? "stretch" : "flex-start",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  animation: "ps-up 0.9s 1.20s both",
                  maxWidth: isMobile ? 320 : "none",
                  width: isMobile ? "100%" : "auto",
                  boxSizing: "border-box",
                }}
              >
                <span style={{ color: isActive ? "#0B1E3D" : panel.accent }}>
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
                opacity: isActive ? 1 : 0.45,
                transition: "opacity 0.35s ease",
                pointerEvents: "none",
                animation: "ps-fadein 0.8s 1.0s both",
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

      {/* Center divider badge — hidden on mobile (replaced by the gold line) */}
      {!isMobile && (
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
            animation: "ps-badge 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1.0s both",
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
      )}

      <style>{`
        @keyframes ps-slide-left {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes ps-slide-right {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes ps-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes ps-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ps-badge {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.4); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1);   }
        }
        @media (max-width: 639px) {
          #portal-split-root { flex-direction: column !important; }
          @keyframes ps-slide-left {
            from { transform: translateY(-60%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          @keyframes ps-slide-right {
            from { transform: translateY(60%); opacity: 0; }
            to   { transform: translateY(0);   opacity: 1; }
          }
        }
      `}</style>
    </div>
  );
}
