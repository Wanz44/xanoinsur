import { useState } from "react";
import { PROJ, REVENUES, ROADMAP } from "../lib/data";
import { Icon } from "./Icons";
import { Reveal, SectionHead, SectionWrap, TONE_TEXT } from "./ui";
import { useInView } from "../lib/hooks";

const REV_TONES = ["sky", "teal", "amber", "coral", "teal"];
const REV_BG: Record<string, string> = {
  sky: "bg-sky",
  teal: "bg-teal",
  amber: "bg-amber",
  coral: "bg-coral",
};

const fmtB = (v: number) =>
  v >= 1 ? `${String(v).replace(".", ",")} B$` : `${Math.round(v * 1000)} M$`;

function ProjChart() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  const [hover, setHover] = useState<number | null>(null);

  const W = 620;
  const baseY = 240;
  const plotH = 200;
  const slot = 112;
  const x0 = 40;
  const barW = 54;
  const maxP = 220;
  const maxR = 5200;

  const barX = (i: number) => x0 + i * slot + (slot - barW) / 2;
  const cx = (i: number) => x0 + i * slot + slot / 2;
  const py = (p: number) => baseY - (p / maxP) * plotH;
  const ry = (r: number) => baseY - (r / maxR) * plotH;

  const linePts = PROJ.map((d, i) => `${cx(i)},${ry(d.revenu)}`).join(" ");

  return (
    <div ref={ref} className={`${inView ? "in" : ""}`}>
      <div className="border border-line bg-abyss/80 p-5 md:p-6">
        <div className="mb-4 flex min-h-[2rem] items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.22em] text-ink">PROJECTION 5 ANS</p>
          <p className="text-right font-mono text-[11px] text-teal">
            {hover === null
              ? "Survolez une année ↴"
              : `${PROJ[hover].year} — ${PROJ[hover].assureurs.toLocaleString("fr-FR")} assureurs · ${PROJ[hover].assures} assurés`}
          </p>
        </div>
        <svg viewBox={`0 0 ${W} 300`} className="w-full" role="img" aria-label="Projection des primes et du revenu sur 5 ans">
          {[0, 0.5, 1].map((f) => (
            <g key={f}>
              <line x1={x0} x2={W - 10} y1={baseY - f * plotH} y2={baseY - f * plotH} stroke="rgba(139,161,175,0.12)" strokeWidth="1" />
              <text x={x0 - 6} y={baseY - f * plotH + 3} textAnchor="end" fontSize="9" fill="#5d7181" fontFamily="JetBrains Mono, monospace">
                {Math.round(f * maxP)}
              </text>
            </g>
          ))}
          <text x={x0 - 6} y={baseY - plotH - 8} textAnchor="end" fontSize="9" fill="#5d7181" fontFamily="JetBrains Mono, monospace">
            B$
          </text>

          {PROJ.map((d, i) => (
            <g key={d.year} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <rect x={x0 + i * slot} y={30} width={slot} height={baseY - 20} fill={hover === i ? "rgba(44,232,200,0.05)" : "transparent"} />
              <rect
                className="bar-y"
                style={{ transitionDelay: `${i * 130}ms` }}
                x={barX(i)}
                y={py(d.primes)}
                width={barW}
                height={baseY - py(d.primes)}
                fill={hover === i ? "rgba(44,232,200,0.32)" : "rgba(44,232,200,0.15)"}
                stroke="rgba(44,232,200,0.65)"
                strokeWidth="1"
              />
              <text x={cx(i)} y={py(d.primes) - 7} textAnchor="middle" fontSize="10" fill="#8ba1af" fontFamily="JetBrains Mono, monospace">
                {fmtB(d.primes)}
              </text>
              <text x={cx(i)} y={baseY + 18} textAnchor="middle" fontSize="11" fill={hover === i ? "#2ce8c8" : "#8ba1af"} fontWeight={hover === i ? 700 : 400} fontFamily="JetBrains Mono, monospace">
                {d.year}
              </text>
            </g>
          ))}

          <polyline
            points={linePts}
            fill="none"
            stroke="#ffb648"
            strokeWidth="2"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={inView ? 0 : 1}
            style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.3,0.6,0.2,1) 0.5s" }}
          />
          {PROJ.map((d, i) => (
            <g key={`d-${d.year}`}>
              <circle cx={cx(i)} cy={ry(d.revenu)} r={hover === i ? 5.5 : 4} fill="#ffb648" stroke="#04080d" strokeWidth="2" style={{ transition: "r .2s" }} />
              <text x={cx(i)} y={ry(d.revenu) - 10} textAnchor="middle" fontSize="10" fill="#ffb648" fontFamily="JetBrains Mono, monospace">
                {fmtB(d.revenu)}
              </text>
            </g>
          ))}
        </svg>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mut">
            <span className="h-2.5 w-2.5 border border-teal bg-teal/30" /> Primes traitées
          </span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-mut">
            <span className="h-2.5 w-2.5 rounded-full bg-amber" /> Revenu XANO
          </span>
          <span className="ml-auto font-mono text-[10px] text-dim">Y5 : 800 M assurés · 5 000 assureurs · 220 B$ de primes</span>
        </div>
      </div>
    </div>
  );
}

export function Business() {
  return (
    <SectionWrap id="modele" className="border-t border-linesoft">
      <SectionHead
        no="07"
        kicker="MODÈLE ÉCONOMIQUE"
        title="Cinq revenus, des marges de plateforme"
        lead="Comme toute infrastructure critique : on prend un pourcentage minuscule d'un flux énorme — et la donnée devient le produit le plus rentable."
        tone="amber"
      />
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          {REVENUES.map((r, i) => (
            <Reveal key={r.source} delay={i * 90}>
              <div className="group mb-3 border border-line bg-panel/50 p-5 transition-all duration-300 hover:border-amber/35 hover:bg-panel/80">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-mut transition-colors duration-300 group-hover:border-amber/50 group-hover:text-amber">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[15px] font-bold tracking-tight text-ink">{r.source}</p>
                    <p className="mt-0.5 text-[12.5px] leading-snug text-mut">{r.model}</p>
                  </div>
                  <p className={`font-display text-lg font-extrabold tabular-nums ${TONE_TEXT[REV_TONES[i]]}`}>
                    {r.margin} %
                  </p>
                </div>
                <div className="mt-4 h-1.5 w-full bg-linesoft">
                  <div
                    className={`bar-x h-full ${REV_BG[REV_TONES[i]]}`}
                    style={{ width: `${r.margin}%`, transitionDelay: `${200 + i * 110}ms` }}
                  />
                </div>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-dim">Marge brute</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="rv-r" delay={200} className="lg:sticky lg:top-28 lg:self-start">
          <ProjChart />
        </Reveal>
      </div>
    </SectionWrap>
  );
}

export function Roadmap() {
  return (
    <SectionWrap id="roadmap" className="border-t border-linesoft bg-deep/40">
      <SectionHead
        no="08"
        kicker="ROADMAP DE CONSTRUCTION"
        title="De la fondation à l'organisme mondial"
        lead="Soixante mois pour passer d'un noyau assurantiel à une infrastructure que la plateforme fait évoluer à 80 % toute seule."
        tone="sky"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ROADMAP.map((ph, i) => (
          <Reveal key={ph.phase} delay={i * 110}>
            <div className="group flex h-full flex-col border border-line bg-panel/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] text-dim">{ph.phase}</span>
                <span
                  className={`flex items-center gap-1.5 border px-2 py-1 font-mono text-[9px] tracking-wider ${
                    ph.statusTone === "teal"
                      ? "border-teal/50 bg-teal/10 text-teal"
                      : ph.statusTone === "amber"
                        ? "border-amber/50 bg-amber/10 text-amber"
                        : ph.statusTone === "sky"
                          ? "border-sky/50 bg-sky/10 text-sky"
                          : "border-line text-mut"
                  }`}
                >
                  {ph.statusTone === "teal" && <span className="dot-live h-1.5 w-1.5 rounded-full bg-teal" />}
                  {ph.status}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink">{ph.title}</h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-mut">{ph.window}</p>

              {ph.progress > 0 && (
                <div className="mt-4">
                  <div className="flex justify-between font-mono text-[9px] tracking-wider text-dim">
                    <span>AVANCEMENT</span>
                    <span className="text-teal">{ph.progress} %</span>
                  </div>
                  <div className="mt-1.5 h-1 bg-linesoft">
                    <div className="bar-x h-full bg-teal" style={{ width: `${ph.progress}%`, transitionDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <ul className="mt-5 flex-1 space-y-2.5">
                {ph.items.map((it) => (
                  <li key={it.label} className="flex items-start gap-2.5 text-[12.5px] leading-snug">
                    {it.state === "done" ? (
                      <span className="mt-0.5 shrink-0 text-teal">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                    ) : it.state === "doing" ? (
                      <span className="blink mt-[5px] h-2 w-2 shrink-0 bg-amber" />
                    ) : (
                      <span className="mt-[5px] h-2 w-2 shrink-0 border border-dim" />
                    )}
                    <span className={it.state === "todo" ? "text-mut" : "text-ink/90"}>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Bandeau final */}
      <Reveal delay={150}>
        <div className="relative mt-20 overflow-hidden border border-teal/25 bg-panel/60 p-8 md:p-14">
          <svg
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25"
            viewBox="0 0 400 240"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="dash-anim" d="M-10 200 C 90 200 70 60 190 60 S 330 150 420 90" fill="none" stroke="#2ce8c8" strokeWidth="1.5" />
            <path className="dash-anim" d="M-10 230 C 120 220 90 100 220 100 S 350 190 420 140" fill="none" stroke="#ffb648" strokeWidth="1" />
          </svg>
          <span className="floaty pointer-events-none absolute right-10 top-8 hidden text-teal/15 md:block">
            <Icon name="spark" className="h-28 w-28" />
          </span>
          <p className="font-mono text-[11px] tracking-[0.26em] text-teal uppercase">Prochaine étape — cette semaine</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.5rem,3.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-tight text-ink">
            Le prochain produit d'assurance mondial sera <span className="text-amber">généré</span>, pas codé.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-mut">
            Injectez un signal du monde réel dans le cerveau et regardez un module complet naître, être simulé sur
            10 millions de scénarios, puis passer en production — en quelques secondes ici, en 48 h dans la vraie vie.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <a
              href="#cerveau"
              className="group inline-flex items-center gap-2.5 bg-teal px-6 py-3.5 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-abyss transition-all duration-300 hover:bg-amber hover:shadow-[0_0_36px_rgba(255,182,72,0.3)]"
            >
              <Icon name="bolt" className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
              Lancer une simulation
            </a>
            <a
              href="#manifeste"
              className="inline-flex items-center gap-2.5 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-teal/60 hover:text-teal"
            >
              Relire le manifeste
            </a>
          </div>
        </div>
      </Reveal>
    </SectionWrap>
  );
}
