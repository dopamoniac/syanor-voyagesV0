import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls the window to the top on every route change.
 * If the new URL contains a hash, smoothly scrolls to that anchor instead.
 * Mount once inside <WouterRouter>.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      // Small delay so the page content has rendered before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);

  return null;
}
