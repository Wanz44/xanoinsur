import { useState } from "react";
import { LAYERS, MANIFESTO, MOTEURS } from "../lib/data";
import { Icon } from "./Icons";
import { Chip, Kicker, Reveal, SectionHead, SectionWrap, TONE_TEXT } from "./ui";

function Hi({ text, hi }: { text: string; hi: string }) {
  const parts = text.split(hi);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="font-semibold text-teal">{hi}</span>
      {parts[1]}
    </>
  );
}

export function Manifesto() {
  return (
    <SectionWrap id="manifeste">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Kicker>01 — MANIFESTE</Kicker>
          </Reveal>
          <Reveal className="lm mt-4">
            <h2 className="font-display text-[clamp(1.7rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
              <span>
                Ce que XANO <span className="text-coral">n'est pas</span> — et ce qu'il{" "}
                <span className="text-teal">devient</span>.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 border-l-2 border-amber pl-5">
              <p className="font-display text-lg md:text-xl font-medium leading-snug text-ink">
                XANO.insur est à l'assurance ce qu'AWS est à l'informatique.
              </p>
              <p className="mt-3 text-mut leading-relaxed text-[15px]">
                Une infrastructure sur laquelle n'importe qui, n'importe où, peut déployer n'importe quel produit
                d'assurance en <strong className="text-amber font-semibold">48 heures</strong>. Pas un logiciel de plus
                — un système nerveux.
              </p>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap gap-2">
              <Chip tone="teal">OS HORIZONTAL</Chip>
              <Chip tone="amber">IA GÉNÉRATIVE</Chip>
              <Chip tone="sky">200+ PAYS</Chip>
              <Chip tone="coral">AUTO-ÉVOLUTIF</Chip>
            </div>
          </Reveal>
        </div>

        <div>
          {MANIFESTO.map((m, i) => (
            <Reveal key={m.from} delay={i * 90}>
              <div className="group grid gap-4 border-b border-line py-6 transition-colors duration-300 hover:bg-panel/40 md:grid-cols-[1fr_auto_1.25fr] md:items-center md:px-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-coral/40 text-coral">
                    <Icon name="x" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-mut">{m.from}</p>
                </div>
                <span className="hidden text-teal transition-transform duration-300 group-hover:translate-x-1.5 md:block">
                  <Icon name="arrow" className="h-5 w-5" />
                </span>
                <div className="flex items-start gap-3.5 md:pl-2">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-teal/50 bg-teal/10 text-teal">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[15px] font-medium leading-relaxed text-ink">
                    <Hi text={m.to} hi={m.hi} />
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={480}>
            <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wider text-dim">
              // LA PROMESSE — CINQ RENONCIATIONS, UN ORGANISME. RIEN N'EST CODÉ EN DUR, TOUT EST GÉNÉRÉ À LA DEMANDE.
            </p>
          </Reveal>
        </div>
      </div>
    </SectionWrap>
  );
}

export function Layers() {
  const [active, setActive] = useState(1);
  const layer = LAYERS[active];

  return (
    <SectionWrap id="architecture" className="border-t border-linesoft bg-deep/40">
      <SectionHead
        no="02"
        kicker="ARCHITECTURE AUTO-ÉVOLUTIVE"
        title="Cinq couches autonomes. Un organisme."
        lead="Chaque couche vit, respire et se met à jour sans interrompre les autres. Sélectionnez une couche pour l'ouvrir."
      />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          {LAYERS.map((l, i) => {
            const isActive = i === active;
            return (
              <Reveal key={l.n} delay={i * 70}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative mb-2 flex w-full items-center gap-5 border px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-teal/60 bg-raise shadow-[inset_3px_0_0_0_var(--color-teal)]"
                      : "border-line bg-panel/40 hover:translate-x-1.5 hover:border-teal/30 hover:bg-panel/70"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] ${isActive ? "text-teal" : "text-dim"}`}
                  >
                    {l.code}
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-display text-[15px] md:text-base font-bold tracking-tight ${
                        isActive ? "text-ink" : "text-ink/75 group-hover:text-ink"
                      }`}
                    >
                      {l.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-mut">{l.sub}</span>
                  </span>
                  <span
                    className={`ml-auto shrink-0 transition-transform duration-300 ${
                      isActive ? "text-teal" : "text-dim group-hover:translate-x-1"
                    }`}
                  >
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            );
          })}
          <Reveal delay={400}>
            <p className="mt-4 font-mono text-[11px] tracking-wider text-dim">
              // CHAQUE COUCHE EST INDÉPENDANTE — LE CERVEAU PEUT EN RECOMBINER LES API SANS ARRÊT DE SERVICE.
            </p>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div key={layer.n} className="fuse-in relative overflow-hidden border border-line bg-panel/70 p-6 md:p-8">
            <span className="pointer-events-none absolute -right-4 -top-8 font-display text-[9rem] font-extrabold leading-none text-raise/80 select-none">
              {layer.n}
            </span>
            <p className="relative font-mono text-[10px] tracking-[0.24em] text-teal">{layer.code} — DÉTAIL</p>
            <h3 className="relative mt-3 font-display text-xl md:text-2xl font-bold tracking-tight text-ink">
              {layer.name}
            </h3>
            <p className="relative mt-1.5 text-sm text-mut">{layer.sub}</p>
            <ul className="relative mt-6 space-y-3">
              {layer.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-ink/90">
                  <span className="mt-1 text-teal">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
            <div className="relative mt-7 grid grid-cols-2 gap-3 border-t border-line pt-6">
              {layer.stats.map((s) => (
                <div key={s.k} className="border border-linesoft bg-deep/70 px-4 py-3">
                  <p className="font-display text-xl font-bold text-amber tabular-nums">{s.v}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-mut">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}

export function Moteurs() {
  return (
    <SectionWrap id="moteurs" className="border-t border-linesoft">
      <SectionHead
        no="05"
        kicker="MÉCANISMES D'ÉVOLUTION AUTOMATIQUE"
        title="Sept moteurs tournent pendant que le monde dort"
        lead="Ils ne sont pas des features. Ce sont des organes : chacun observe, décide et agit dans son domaine — sous supervision humaine pour tout ce qui est critique."
        tone="amber"
      />
      <div>
        {MOTEURS.map((m, i) => (
          <Reveal key={m.n} delay={(i % 3) * 80}>
            <div className="group grid items-center gap-x-6 gap-y-2 border-t border-line py-6 transition-all duration-300 last:border-b hover:bg-panel/40 md:grid-cols-[90px_56px_1fr_auto] md:px-4">
              <span className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-raise transition-colors duration-300 group-hover:text-teal/80">
                {m.n}
              </span>
              <span className="text-dim transition-all duration-500 group-hover:rotate-6 group-hover:text-amber">
                <Icon name={m.icon} className="h-8 w-8" />
              </span>
              <span>
                <span className="block font-display text-base md:text-lg font-bold tracking-tight text-ink">
                  {m.title}
                </span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-mut">{m.desc}</span>
              </span>
              <span className="hidden text-dim transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-teal md:block">
                <Icon name="arrow" className="h-5 w-5" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrap>
  );
}
