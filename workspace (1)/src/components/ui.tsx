import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../lib/hooks";

export const TONE_TEXT: Record<string, string> = {
  teal: "text-teal",
  amber: "text-amber",
  coral: "text-coral",
  sky: "text-sky",
  mut: "text-mut",
};

export const TONE_BG: Record<string, string> = {
  teal: "bg-teal",
  amber: "bg-amber",
  coral: "bg-coral",
  sky: "bg-sky",
  mut: "bg-mut",
};

export const TONE_BORDER: Record<string, string> = {
  teal: "border-teal/40",
  amber: "border-amber/40",
  coral: "border-coral/40",
  sky: "border-sky/40",
  mut: "border-mut/40",
};

export function Reveal({
  children,
  className = "",
  variant = "",
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  variant?: "" | "rv-l" | "rv-r" | "rv-s";
  delay?: number;
  style?: CSSProperties;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={`rv ${variant} ${inView ? "rv-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Kicker({ children, tone = "teal" }: { children: ReactNode; tone?: string }) {
  return (
    <p className={`font-mono text-[11px] md:text-xs tracking-[0.28em] uppercase ${TONE_TEXT[tone] ?? "text-teal"}`}>
      {children}
    </p>
  );
}

export function SectionHead({
  no,
  kicker,
  title,
  lead,
  tone = "teal",
}: {
  no: string;
  kicker: string;
  title: string;
  lead?: string;
  tone?: string;
}) {
  return (
    <div className="max-w-4xl mb-12 md:mb-16">
      <Reveal>
        <Kicker tone={tone}>
          {no} — {kicker}
        </Kicker>
      </Reveal>
      <Reveal variant="" className="lm mt-4">
        <h2 className="font-display font-bold text-[clamp(1.6rem,4.2vw,3.1rem)] leading-[1.08] tracking-tight">
          <span>{title}</span>
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={140}>
          <p className="mt-5 text-mut text-base md:text-lg leading-relaxed max-w-2xl">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Chip({ children, tone = "teal" }: { children: ReactNode; tone?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border ${TONE_BORDER[tone] ?? TONE_BORDER.teal} ${TONE_TEXT[tone] ?? "text-teal"} px-2.5 py-1 font-mono text-[10px] md:text-[11px] uppercase tracking-wider bg-panel/60`}
    >
      {children}
    </span>
  );
}

export function SectionWrap({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}
