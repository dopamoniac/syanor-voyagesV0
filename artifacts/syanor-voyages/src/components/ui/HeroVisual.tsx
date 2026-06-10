export default function HeroVisual() {
  return (
    <div
      className="relative h-[500px] w-full max-w-[560px]"
      role="presentation"
      aria-hidden="true"
    >
      {/* Gold dashed route lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 560 500"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 400 C 180 300, 360 370, 510 210"
          stroke="#C9A24A"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity="0.45"
        />
        <path
          d="M140 85 C 270 48, 420 125, 530 72"
          stroke="#C9A24A"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.38"
        />
        <circle cx="320" cy="68" r="2.5" fill="#C9A24A" opacity="0.55" />
        <circle cx="450" cy="100" r="2"   fill="#C9A24A" opacity="0.42" />
        <circle cx="200" cy="92" r="2"   fill="#C9A24A" opacity="0.35" />
        <circle cx="410" cy="330" r="2.5" fill="#C9A24A" opacity="0.4" />
      </svg>
    </div>
  );
}
