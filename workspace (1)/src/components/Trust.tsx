import { useState } from "react";
import { JURIS, PILIERS, SEC_STATS, ZT_BLOCKS } from "../lib/data";
import { Icon } from "./Icons";
import { Chip, Reveal, SectionHead, SectionWrap } from "./ui";

export default function Trust() {
  const [region, setRegion] = useState(JURIS[0]);

  return (
    <SectionWrap id="confiance" className="border-t border-linesoft bg-deep/40">
      <SectionHead
        no="06"
        kicker="SÉCURITÉ & FIABILITÉ MONDIALE"
        title="La confiance est une couche du système, pas une option"
        lead="Zero-trust par défaut, chiffrement post-quantique, souveraineté des données automatique : chaque requête est authentifiée, chaque transaction est signée, chaque règle est prouvable."
        tone="coral"
      />

      <div className="mb-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {SEC_STATS.map((s, i) => (
          <Reveal key={s.v} delay={i * 90}>
            <div className="group border border-line bg-panel/50 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40">
              <p className="font-display text-2xl md:text-[1.9rem] font-extrabold tracking-tight text-coral tabular-nums">
                {s.v}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase leading-relaxed tracking-wider text-mut">{s.k}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        {/* Zero trust */}
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-coral uppercase">Architecture zero-trust</p>
          </Reveal>
          <div className="space-y-3">
            {ZT_BLOCKS.map((b, i) => (
              <Reveal key={b.title} delay={i * 90} variant="rv-l">
                <div className="group flex gap-4 border border-line bg-panel/50 p-5 transition-all duration-300 hover:border-coral/40 hover:bg-panel/80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-coral/30 bg-coral/5 text-coral transition-transform duration-300 group-hover:scale-110">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold tracking-tight text-ink">{b.title}</p>
                    <ul className="mt-2 space-y-1">
                      {b.lines.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-[13px] leading-relaxed text-mut">
                          <span className="mt-[7px] h-1 w-1 shrink-0 bg-coral/70" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-4 font-mono text-[11px] tracking-wider text-dim">
              // ON CASSE VOLONTAIREMENT LE SYSTÈME EN PRODUCTION — LE CHAOS ENGINEERING EST NOTRE ASSURANCE À NOUS.
            </p>
          </Reveal>
        </div>

        {/* 10 piliers */}
        <div>
          <Reveal>
            <p className="mb-4 font-mono text-[11px] tracking-[0.24em] text-teal uppercase">Les 10 piliers de fiabilité</p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {PILIERS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 70 + Math.floor(i / 2) * 40}>
                <div className="group h-full border border-line bg-panel/40 p-4 transition-all duration-300 hover:border-teal/40 hover:bg-panel/70">
                  <div className="flex items-center gap-3">
                    <span className="text-teal transition-transform duration-300 group-hover:-rotate-6">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <p className="font-display text-[13px] font-bold tracking-tight text-ink">{p.title}</p>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-mut">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Conformité multi-juridiction */}
      <div className="mt-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.24em] text-amber uppercase">Conformité multi-juridiction</p>
              <h3 className="mt-3 font-display text-xl md:text-3xl font-bold tracking-tight text-ink">
                Un moteur de conformité universel, six zones natives
              </h3>
            </div>
            <Chip tone="amber">LE RÉGULATEUR EST UN UTILISATEUR</Chip>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {JURIS.map((j) => (
            <button
              key={j.id}
              onClick={() => setRegion(j)}
              aria-pressed={region.id === j.id}
              className={`border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
                region.id === j.id
                  ? "border-amber/70 bg-amber/10 text-amber shadow-[0_0_24px_rgba(255,182,72,0.15)]"
                  : "border-line text-mut hover:border-amber/40 hover:text-ink"
              }`}
            >
              {j.region}
            </button>
          ))}
        </div>

        <div key={region.id} className="fuse-in mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-line bg-abyss/80 p-6">
            <p className="font-mono text-[10px] tracking-[0.22em] text-dim">RÈGLE AUTO-APPLIQUÉE — {region.region.toUpperCase()}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/90">
              <span className="text-amber">▸</span> {region.demo}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {region.frameworks.map((f) => (
                <span key={f} className="border border-amber/30 bg-amber/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-amber/25 bg-panel/60 p-6">
            <p className="font-mono text-[10px] tracking-[0.22em] text-amber">5ᵉ PORTAIL — RÉGULATEUR</p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Accès lecture + audit pour les autorités",
                "Reporting automatique dans leur format",
                "Alertes temps réel sur la sinistralité du marché",
                "API d'inspection à la demande",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-[13px] leading-relaxed text-mut">
                  <span className="mt-0.5 text-amber">
                    <Icon name="shield" className="h-4 w-4" />
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] leading-relaxed text-dim">
              // PORTAIL RÉGULATEUR — INSPECTION CONTINUE PLUTÔT QU'AUDIT ANNUEL.
            </p>
          </div>
        </div>
      </div>
    </SectionWrap>
  );
}
