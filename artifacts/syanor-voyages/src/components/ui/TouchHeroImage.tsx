import { useEffect, useRef, useState } from "react";
import { CATEGORY_IMAGE, FLOATING_CATEGORIES, DEFAULT_CATEGORY_IMAGE } from "@/data/categoryImages";

export interface TouchHeroImageProps {
  category: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
  entranceMode?: "mount" | "intersect";
  entranceTranslate?: string;
  entranceDuration?: string;
  overlayGradient?: string;
}

export default function TouchHeroImage({
  category,
  className = "",
  imgClassName = "",
  children,
  entranceMode = "intersect",
  entranceTranslate = "10px",
  entranceDuration = "0.45s",
  overlayGradient = "linear-gradient(180deg, rgba(2,8,6,0) 0%, rgba(2,8,6,0.08) 32%, rgba(2,8,6,0.55) 65%, rgba(2,8,6,0.88) 88%, rgba(2,8,6,0.94) 100%)",
}: TouchHeroImageProps) {
  const img = CATEGORY_IMAGE[category] ?? DEFAULT_CATEGORY_IMAGE;
  const isFloating = FLOATING_CATEGORIES.has(category);

  /* ── Reduced-motion preference ── */
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Entrance animation ── */
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;

    if (entranceMode === "mount") {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(raf2);
      });
      return () => cancelAnimationFrame(raf1);
    }

    const node = wrapRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [entranceMode, reducedMotion]);

  /* ── Tap-to-zoom on mobile ── */
  const [tapped, setTapped] = useState(false);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleTouchStart() {
    if (reducedMotion) return;
    if (tapTimer.current) clearTimeout(tapTimer.current);
    setTapped(true);
    tapTimer.current = setTimeout(() => setTapped(false), 420);
  }

  useEffect(() => {
    return () => {
      if (tapTimer.current) clearTimeout(tapTimer.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        ...(isFloating
          ? { background: "linear-gradient(145deg, #F5EFE0 0%, #EDE3CC 60%, #E3D5B5 100%)" }
          : {}),
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${entranceTranslate})`,
        transition: reducedMotion ? undefined : `opacity ${entranceDuration} ease, transform ${entranceDuration} ease`,
      }}
      onTouchStart={handleTouchStart}
    >
      <img
        src={img}
        alt={category}
        className={`h-full w-full ${isFloating ? "object-contain object-center" : "object-cover"} ${imgClassName}`}
        style={{
          ...(isFloating
            ? { filter: "drop-shadow(0 16px 32px rgba(6,63,51,0.38)) drop-shadow(0 5px 10px rgba(0,0,0,0.22))" }
            : {}),
          ...(reducedMotion ? {} : {
            transform: tapped ? "scale(1.07)" : "scale(1)",
            transition: tapped
              ? "transform 0.22s cubic-bezier(0.34,1.56,0.64,1)"
              : "transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94)",
          }),
        }}
        loading="lazy"
      />

      {!isFloating && (
        <div
          className="absolute inset-0"
          style={{ background: overlayGradient }}
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
}
