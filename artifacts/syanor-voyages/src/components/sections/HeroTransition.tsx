import { useEffect, useRef, useState } from "react";

export default function HeroTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(section);

    const onScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const raw = 1 - rect.top / windowH;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* SVG path for the travel route line */
  const W = 600;
  const H = 100;
  const path = `M 30,${H * 0.72} C 140,${H * 0.2} 320,${H * 0.85} 470,${H * 0.28} S 570,${H * 0.55} ${W - 30},${H * 0.45}`;

  /* Dot position along the path at current progress */
  const dotX = 30 + progress * (W - 60);
  const dotY = H * 0.5 + Math.sin(progress * Math.PI * 2.5) * H * 0.22;

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        height: "clamp(120px, 15vw, 180px)",
        background: "linear-gradient(180deg, #F2EBE0 0%, #EDE3CC 38%, #F0E8D8 68%, #EAE0CE 100%)",
        zIndex: 1,
      }}
      aria-hidden="true"
    >
      {/* Top fade — blends with Hero 1 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{
          height: "50%",
          background: "linear-gradient(to bottom, rgba(15,12,10,0.72) 0%, transparent 100%)",
        }}
      />

      {/* Bottom fade — blends into Hero 2 */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{
          height: "44%",
          background: "linear-gradient(to top, rgba(14,11,9,0.65) 0%, transparent 100%)",
        }}
      />

      {/* Subtle blur veil */}
      <div
        className="pointer-events-none absolute inset-x-0 z-[5]"
        style={{
          top: "30%",
          height: "40%",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          background: "rgba(240,232,216,0.18)",
          maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 70%, transparent)",
        }}
      />

      {/* Marble texture veins — SVG */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,60 Q200,30 400,80 T800,55 T1200,70" fill="none" stroke="#C9A24A" strokeWidth="0.8" />
        <path d="M0,110 Q300,85 550,120 T900,95 T1200,115" fill="none" stroke="#C9A24A" strokeWidth="0.5" />
        <path d="M100,0 Q180,90 220,180" fill="none" stroke="#063F33" strokeWidth="0.4" />
        <path d="M750,0 Q820,90 780,180" fill="none" stroke="#063F33" strokeWidth="0.3" />
      </svg>

      {/* Travel route line + glowing dot — centred horizontally */}
      <div
        className="absolute inset-x-0 z-20 flex justify-center"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full max-w-[600px]"
          style={{ height: "clamp(56px, 8vw, 100px)", overflow: "visible" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(201,162,74,0)" />
              <stop offset="20%" stopColor="rgba(201,162,74,0.55)" />
              <stop offset="80%" stopColor="rgba(201,162,74,0.55)" />
              <stop offset="100%" stopColor="rgba(201,162,74,0)" />
            </linearGradient>

            {/* Clip path to reveal line as progress increases */}
            <clipPath id="lineReveal">
              <rect x="0" y="0" width={W * progress} height={H} />
            </clipPath>
          </defs>

          {/* Ghost track */}
          <path
            d={path}
            fill="none"
            stroke="rgba(201,162,74,0.12)"
            strokeWidth="1.2"
            strokeDasharray="4 5"
          />

          {/* Revealed line */}
          <path
            d={path}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="1.5"
            filter="url(#glow)"
            clipPath="url(#lineReveal)"
          />

          {/* Origin dot */}
          <circle cx="30" cy={H * 0.72} r="3" fill="rgba(201,162,74,0.45)" />
          <circle cx="30" cy={H * 0.72} r="1.5" fill="#C9A24A" />

          {/* Destination dot */}
          <circle
            cx={W - 30}
            cy={H * 0.45}
            r="3"
            fill="rgba(201,162,74,0.45)"
            opacity={progress > 0.85 ? 1 : 0}
            style={{ transition: "opacity 0.4s" }}
          />
          <circle
            cx={W - 30}
            cy={H * 0.45}
            r="1.5"
            fill="#C9A24A"
            opacity={progress > 0.85 ? 1 : 0}
            style={{ transition: "opacity 0.4s" }}
          />

          {/* Moving glowing dot */}
          {progress > 0.02 && (
            <>
              <circle
                cx={dotX}
                cy={dotY}
                r="8"
                fill="rgba(201,162,74,0.18)"
                filter="url(#dotGlow)"
              />
              <circle
                cx={dotX}
                cy={dotY}
                r="4"
                fill="rgba(201,162,74,0.55)"
                filter="url(#dotGlow)"
              />
              <circle cx={dotX} cy={dotY} r="2" fill="#D8B56A" />
            </>
          )}
        </svg>
      </div>

      {/* Centre text */}
      <div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-1.5"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s, transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s",
        }}
      >
        <p
          className="text-center font-inter text-[0.55rem] font-semibold tracking-[0.25em] uppercase sm:text-[0.62rem]"
          style={{ color: "#D8B56A", textShadow: "0 1px 12px rgba(216,181,106,0.45)" }}
        >
          Deux univers. Une même signature.
        </p>
        <p
          className="text-center font-inter text-[0.5rem] tracking-[0.12em] sm:text-[0.55rem]"
          style={{ color: "rgba(6,63,51,0.75)" }}
        >
          Voyage premium&nbsp;&nbsp;•&nbsp;&nbsp;Spiritualité&nbsp;&nbsp;•&nbsp;&nbsp;Accompagnement
        </p>
      </div>
    </div>
  );
}
