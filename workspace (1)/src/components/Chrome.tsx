import { useEffect, useState } from "react";
import { NAV } from "../lib/data";
import { Icon } from "./Icons";
import { useNow, useScrollProgress } from "../lib/hooks";

export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-44 -top-44 h-[560px] w-[560px] rounded-full bg-teal/6 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-amber/5 blur-[130px]" />
      <div className="absolute left-1/2 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-sky/4 blur-[120px]" />
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[75] h-[2px] bg-gradient-to-r from-teal via-sky to-amber"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
          scrolled || open ? "border-b border-line bg-abyss/88 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#top" className="group flex items-center gap-2.5" aria-label="XANO.insur — retour en haut">
            <span className="dot-live inline-block h-2 w-2 rounded-full bg-teal" />
            <span className="font-display text-base md:text-lg font-extrabold tracking-tight text-ink">
              XANO<span className="text-teal transition-colors group-hover:text-amber">.insur</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="group relative font-mono text-[10.5px] uppercase tracking-[0.18em] text-mut transition-colors hover:text-teal"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 border border-line bg-panel/60 px-3 py-1.5 lg:flex">
            <span className="blink h-1.5 w-1.5 rounded-full bg-teal" />
            <span className="font-mono text-[10px] tracking-wider text-teal">SLA 99,999 %</span>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-teal/50 hover:text-teal lg:hidden"
          >
            {open ? <Icon name="x" className="h-5 w-5" /> : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h10" />
              </svg>
            )}
          </button>
        </nav>

        {open && (
          <div className="border-t border-line bg-abyss/95 px-5 py-4 lg:hidden">
            <div className="grid gap-1">
              {NAV.map((n, i) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-linesoft py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-teal"
                >
                  {n.label}
                  <span className="text-dim">0{i + 1}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  const now = useNow();
  return (
    <footer className="relative border-t border-line bg-abyss">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              XANO<span className="text-teal">.insur</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mut">
              Le système nerveux mondial de l'assurance — un OS horizontal, auto-évolutif, qui invente ses propres
              produits selon les risques du monde.
            </p>
            <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-dim">KIN · LAG · PAR · SIN · SAO</p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.24em] text-dim">EXPLORER</p>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="font-mono text-[11px] uppercase tracking-[0.16em] text-mut transition-colors hover:text-teal"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.24em] text-dim">SYSTÈME</p>
            <ul className="mt-4 space-y-2.5">
              {["SLA 99,999 %", "RTO < 15 min · RPO = 0", "5 régions actives", "38 devises en clearing", "Chiffrement ML-KEM", "0 brèche — 1 204 j"].map((l) => (
                <li key={l} className="flex items-center gap-2.5 font-mono text-[11px] text-mut">
                  <span className="h-1 w-1 bg-teal" />
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.24em] text-dim">HORLOGE MONDIALE</p>
            <p className="mt-4 font-display text-2xl font-bold tabular-nums text-ink md:text-3xl">
              {now.toLocaleTimeString("fr-FR", { hour12: false })}
            </p>
            <p className="mt-1 font-mono text-[11px] text-mut">
              {now.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] text-teal">
              <span className="dot-live h-1.5 w-1.5 rounded-full bg-teal" />
              SIGNAL : NOMINAL
            </p>
            <p className="mt-2 font-mono text-[10px] text-dim">04°19′S 15°18′E — nœud Kinshasa</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-[10px] leading-relaxed text-dim">
            © 2026 XANO.insur — Prototype conceptuel. Aucune donnée réelle n'est traitée. Les chiffres sont une vision, pas un bilan.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mut transition-colors hover:text-teal"
          >
            Remonter le signal
            <Icon name="down" className="h-3.5 w-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
