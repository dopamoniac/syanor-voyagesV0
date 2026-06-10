import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import { useLocation } from "wouter";

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: ReactNode;
  prefetch?: boolean;
}

const EXTERNAL = /^(https?:|mailto:|tel:|sms:|wa\.me)/i;

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  const id = hash.replace(/^#/, "");
  const tryScroll = (attempt: number) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (attempt < 10) {
      requestAnimationFrame(() => tryScroll(attempt + 1));
    }
  };
  requestAnimationFrame(() => tryScroll(0));
}

/**
 * Drop-in replacement for next/link backed by wouter.
 * Renders a real <a> for accessibility, handles client-side navigation,
 * external links, query strings and in-page hash scrolling.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, onClick, target, prefetch: _prefetch, ...rest },
  ref,
) {
  const [, navigate] = useLocation();
  const isExternal =
    EXTERNAL.test(href) || href.startsWith("//") || target === "_blank";

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (onClick) onClick(e);
    if (isExternal || e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();

    const hashIndex = href.indexOf("#");
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
    const pathWithQuery = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
    const currentPath = window.location.pathname + window.location.search;

    if (pathWithQuery === "" || pathWithQuery === currentPath) {
      // Same page — just update hash and scroll.
      if (hash) window.history.replaceState(null, "", currentPath + hash);
      scrollToHash(hash);
      return;
    }

    navigate(href);
    scrollToHash(hash);
  }

  return (
    <a href={href} onClick={handleClick} target={target} ref={ref} {...rest}>
      {children}
    </a>
  );
});

export default Link;
