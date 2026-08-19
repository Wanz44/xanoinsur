import type { ReactNode } from "react";

const P: Record<string, ReactNode> = {
  sante: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 8.2v7.6M8.2 12h7.6" />
    </>
  ),
  vie: (
    <>
      <path d="M12 20.5v-8" />
      <path d="M12 12.5c0-4.2 3.1-7.3 7.3-7.3 0 4.2-3.1 7.3-7.3 7.3z" />
      <path d="M12 12.5c0-4.2-3.1-7.3-7.3-7.3 0 4.2 3.1 7.3 7.3 7.3z" />
      <path d="M7.5 20.5h9" />
    </>
  ),
  biens: (
    <>
      <path d="M4 11.2 12 4.5l8 6.7" />
      <path d="M6.2 10v9.5h11.6V10" />
      <path d="M10.3 19.5v-5h3.4v5" />
    </>
  ),
  auto: (
    <>
      <path d="M5 13.4 6.5 8.9a2 2 0 0 1 1.9-1.4h7.2a2 2 0 0 1 1.9 1.4L19 13.4" />
      <path d="M4 13.4h16v4.8h-2.6M4 18.2h2.6M9.4 18.2h5.2" />
      <circle cx="7.4" cy="18.2" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="16.6" cy="18.2" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  rc: (
    <>
      <path d="M12 4v13.5M8 20.5h8M12 6.5 6.5 8.5m5.5-2 5.5 2" />
      <path d="M3.8 13.2a2.7 2.7 0 0 0 5.4 0L6.5 8.5l-2.7 4.7z" />
      <path d="M14.8 13.2a2.7 2.7 0 0 0 5.4 0L17.5 8.5l-2.7 4.7z" />
    </>
  ),
  cyber: (
    <>
      <rect x="6.5" y="10.2" width="11" height="9.3" rx="1.6" />
      <path d="M9 10.2V7.6a3 3 0 0 1 6 0v2.6" />
      <path d="M12 13.6v2.6" />
    </>
  ),
  param: (
    <>
      <path d="M13 3 6 13.2h4.6L9.4 21l7.6-10.2h-4.6L13 3z" />
    </>
  ),
  maritime: (
    <>
      <circle cx="12" cy="5.4" r="2" />
      <path d="M12 7.4V20M12 20a7 7 0 0 1-7-6.6h3.2M12 20a7 7 0 0 0 7-6.6h-3.2M8.8 10.4h6.4" />
    </>
  ),
  credit: (
    <>
      <ellipse cx="12" cy="6.2" rx="6" ry="2.6" />
      <path d="M6 6.2v5.6c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6V6.2" />
      <path d="M6 11.8v5.6c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-5.6" />
    </>
  ),
  agri: (
    <>
      <path d="M12 21V8.5" />
      <path d="M12 8.5c-2.9 0-5-2.1-5-5 2.9 0 5 2.1 5 5z" />
      <path d="M12 8.5c2.9 0 5-2.1 5-5-2.9 0-5 2.1-5 5z" />
      <path d="M12 15c-2.9 0-5-2.1-5-5 2.9 0 5 2.1 5 5z" />
      <path d="M12 15c2.9 0 5-2.1 5-5-2.9 0-5 2.1-5 5z" />
    </>
  ),
  crypto: (
    <>
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4z" />
      <circle cx="12" cy="10.6" r="1.9" />
      <path d="M12 12.5v3.3" />
    </>
  ),
  embedded: (
    <>
      <path d="M8 7.5 3.5 12 8 16.5M16 7.5l4.5 4.5L16 16.5" />
      <path d="m13.2 4.5-2.4 15" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4.2M12 16.8V21M3 12h4.2M16.8 12H21M5.8 5.8l3 3M15.2 15.2l3 3M18.2 5.8l-3 3M8.8 15.2l-3 3" />
    </>
  ),
  pulse: <path d="M3 12h3.6l2-4.6 3.6 9.2 2.4-6.2 1.4 1.6H21" />,
  shield: (
    <>
      <path d="M12 3.5 5 6v5.4c0 4.4 3 7.6 7 9.1 4-1.5 7-4.7 7-9.1V6l-7-2.5z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </>
  ),
  radar: (
    <>
      <path d="M12 12 18 6M12 12a6.5 6.5 0 1 0 6.5 6.5" />
      <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5" opacity="0.55" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  face: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.6 10.2h.01M15.4 10.2h.01" strokeWidth="2.2" />
      <path d="M8.8 14.6c1 .9 2 1.3 3.2 1.3s2.2-.4 3.2-1.3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3.5 8 4-8 4-8-4 8-4z" />
      <path d="m4 12 8 4 8-4M4 16.5l8 4 8-4" opacity="0.7" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M3.8 12h16.4M12 3.8c2.6 2.2 3.9 4.9 3.9 8.2S14.6 18 12 20.2C9.4 18 8.1 15.3 8.1 12S9.4 6 12 3.8z" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8.5" r="4" />
      <path d="m11 11.5 8.5 8.5M16.5 17l2.5-2.5M14 14.5l2-2" />
    </>
  ),
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9.5" rx="1.6" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.2v2.4" />
    </>
  ),
  db: (
    <>
      <ellipse cx="12" cy="5.8" rx="7" ry="2.6" />
      <path d="M5 5.8v12.4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5.8" />
      <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18.5a4 4 0 0 1-.6-7.9 5.5 5.5 0 0 1 10.7-1.3A4.2 4.2 0 0 1 17 18.5H7z" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M7 12a5 5 0 0 1 10 0c0 3-.5 5.5-1.5 7.5" />
      <path d="M12 12c0 2.8-.7 5-2 7M12 7.2A4.8 4.8 0 0 0 7.4 10" opacity="0.7" />
      <path d="M4.5 9.5A8.5 8.5 0 0 1 12 4.5c3 0 5.6 1.4 7.2 3.6" opacity="0.45" />
    </>
  ),
  eyeoff: (
    <>
      <path d="M4 4l16 16" />
      <path d="M9.9 5.2A9.6 9.6 0 0 1 12 5c4.5 0 7.8 2.6 9.5 7-.5 1.3-1.2 2.4-2 3.4M6.1 7.5C4.6 8.7 3.4 10.3 2.5 12c1.7 4.4 5 7 9.5 7 1.3 0 2.5-.2 3.6-.6" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12C4.2 7.6 7.5 5 12 5s7.8 2.6 9.5 7c-1.7 4.4-5 7-9.5 7s-7.8-2.6-9.5-7z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  list: (
    <>
      <path d="M9 6.5h11M9 12h11M9 17.5h11" />
      <path d="m4 6.3 1 1 2-2M4 11.8l1 1 2-2M4 17.3l1 1 2-2" />
    </>
  ),
  cycle: (
    <>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.1M19.5 12a7.5 7.5 0 0 1-13 5.1" />
      <path d="M17.5 3.5v3.6h-3.6M6.5 20.5v-3.6h3.6" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.5 16.5a8 8 0 1 1 15 0" />
      <path d="M12 15.5 15.8 9" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  swap: (
    <>
      <path d="M7 4.5 3.5 8 7 11.5M3.5 8h13M17 12.5l3.5 3.5L17 19.5M20.5 16h-13" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4.5v15M8.5 19.5h7M12 6.5 6 8.5m6-2 6 2" />
      <path d="M3.5 13.5a2.5 2.5 0 0 0 5 0L6 8.5l-2.5 5zM15.5 13.5a2.5 2.5 0 0 0 5 0L18 8.5l-2.5 5z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5.5 18.5C5.5 10 12 5.5 19.5 5.5c0 8.5-5.5 13-14 13z" />
      <path d="M5.5 18.5C9 15 12 12 16 9" />
    </>
  ),
  bolt: <path d="M13 3 6 13.2h4.6L9.4 21l7.6-10.2h-4.6L13 3z" />,
  brain: (
    <>
      <path d="M12 4.5a3.2 3.2 0 0 0-5.8 1.2A3.4 3.4 0 0 0 4.5 9c0 .9.3 1.7.9 2.3A3.5 3.5 0 0 0 7 17.5c.6 1.8 2.1 3 4 3h1c1.9 0 3.4-1.2 4-3a3.5 3.5 0 0 0 1.5-6.2c.6-.6.9-1.4.9-2.3a3.4 3.4 0 0 0-1.7-2.9A3.2 3.2 0 0 0 12 4.5z" />
      <path d="M12 4.5v16" opacity="0.55" />
    </>
  ),
  stack: (
    <>
      <rect x="4" y="14.5" width="16" height="4.5" rx="1" />
      <rect x="6" y="9.5" width="12" height="4" rx="1" opacity="0.75" />
      <rect x="8" y="4.5" width="8" height="4" rx="1" opacity="0.5" />
    </>
  ),
  flow: (
    <>
      <path d="M4 7.5c5 0 5 4.5 10 4.5h6M4 16.5c5 0 5-4.5 10-4.5" opacity="0.7" />
      <path d="m17 5 3 2.5-3 2.5M17 14l3 2.5-3 2.5" />
    </>
  ),
  market: (
    <>
      <path d="M4 9.5 5.5 4.5h13L20 9.5M4 9.5v10h16v-10M4 9.5h16" />
      <path d="M9.5 19.5v-5.5h5v5.5" />
    </>
  ),
  plug: (
    <>
      <path d="M9 4v5M15 4v5M7 9h10v3a5 5 0 0 1-10 0V9z" />
      <path d="M12 17v3.5" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  down: <path d="M12 4v15m-6-6 6 6 6-6" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  dot: <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />,
  lockSmall: (
    <>
      <rect x="6" y="10.5" width="12" height="9" rx="1.6" />
      <path d="M9 10.5V8a3 3 0 0 1 6 0v2.5" />
    </>
  ),
  play: <path d="M8 5.5v13l10-6.5-10-6.5z" />,
  pause: <path d="M8.5 5.5v13M15.5 5.5v13" />,
};

export type IconName = keyof typeof P;

export function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {P[name] ?? P.dot}
    </svg>
  );
}
