interface IconProps {
  name: string;
  className?: string;
}

/**
 * Minimal stroke icon set (gold/emerald friendly). Decorative by default.
 */
export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "airplane":
      return (
        <svg {...common}>
          <path d="M10.5 13.5 3 12l.5-2 8 1.5 4-6.5c.5-.8 1.7-1 2.4-.3.6.6.5 1.6-.1 2.3L14 13l1.5 6.5-1.8.5-3-5-3 1.2-.2 2.3-1.3.3-.5-3 .5-2 4.3.9z" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v13M5 13a7 7 0 0 0 14 0M5 13H3m16 0h2" />
        </svg>
      );
    case "crescent":
      return (
        <svg {...common}>
          <path d="M16 3a9 9 0 1 0 4 14 7 7 0 0 1-4-13z" />
          <path d="M19 5l.6 1.4L21 7l-1.4.6L19 9l-.6-1.4L17 7l1.4-.6z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M8 6h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
          <circle cx="16" cy="7" r="2.2" />
          <circle cx="8" cy="17" r="2.2" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common}>
          <path d="M6 3h12l3 5-9 13L3 8z" />
          <path d="M3 8h18M9 3l-3 5 6 13 6-13-3-5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "hand-heart":
      return (
        <svg {...common}>
          <path d="M3 14l5 5 8-2 4-6c.5-1-.5-2.2-1.6-1.7L13 12" />
          <path d="M13 6.5c-1-1.4-3.3-1-3.3.9 0 1.6 3.3 3.6 3.3 3.6s3.3-2 3.3-3.6c0-1.9-2.3-2.3-3.3-.9z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5z" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
          <path d="M4 19a2 2 0 0 1 2-2h12" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l4 4 10-10" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.6 5.5 6 .8-4.3 4.1 1 6L12 16.8 6.7 19.4l1-6L3.4 9.3l6-.8z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
