import { useState } from "react";
import { FAMILIES, HYBRIDS, type Hybrid } from "../lib/data";
import { Icon } from "./Icons";
import { Chip, Reveal, SectionHead, SectionWrap, TONE_TEXT } from "./ui";

const TONES = ["teal", "amber", "sky", "coral"] as const;

export default function Families() {
  const [open, setOpen] = useState<string | null>("sante");
  const [fa, setFa] = useState("sante");
  const [fb, setFb] = useState("cyber");
  const [res, setRes] = useState<(Hybrid & { combo: string }) | null>({
    ...(HYBRIDS["sante+cyber"] as Hybrid),
    combo: "Santé × Cyber",
  });
  const [nonce, setNonce] = useState(0);
  const [error, setError] = useState(false);

  const fuse = () => {
    setNonce((n) => n + 1);
    if (fa === fb) {
      setError(true);
      setRes(null);
      return;
    }
    setError(false);
    const a = FAMILIES.find((f) => f.id === fa)!;
    const b = FAMILIES.find((f) => f.id === fb)!;
    const found = HYBRIDS[`${fa}+${fb}`] ?? HYBRIDS[`${fb}+${fa}`];
    if (found) {
      setRes({ ...found, combo: `${a.name} × ${b.name}` });
    } else {
      setRes({
        name: `${a.name} × ${b.name} — produit inédit`,
        desc: `Le Brain fusionne les garanties ${a.name.toLowerCase()} et ${b.name.toLowerCase()} : tarification unifiée, souscription unique et parcours sinistre orchestré par IA. Concept validé en sandbox avant comité humain.`,
        chips: ["Généré en 48 h", "Sandbox 10 M scénarios", "T&C unifiés"],
        tone: TONES[(a.name.length + b.name.length) % 4],
        combo: `${a.name} × ${b.name}`,
      });
    }
  };

  return (
    <SectionWrap id="univers">
      <SectionHead
        no="04"
        kicker="UNIVERS D'ASSURANCES COUVERTES"
        title="12 familles natives. Un seul noyau."
        lead="Du voyageur qui atterrit à Kinshasa au cargo qui traverse le Pacifique, tout s'écrit sur le même schéma de données universel. Cliquez sur une famille."
        tone="sky"
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FAMILIES.map((f, i) => {
          const tone = TONES[i % 4];
          const isOpen = open === f.id;
          return (
            <Reveal key={f.id} delay={(i % 4) * 80}>
              <button
                onClick={() => setOpen(isOpen ? null : f.id)}
                aria-expanded={isOpen}
                className={`group w-full border p-5 text-left transition-all duration-300 ${
                  isOpen
                    ? "border-teal/50 bg-raise shadow-[0_0_32px_rgba(44,232,200,0.08)]"
                    : "border-line bg-panel/50 hover:-translate-y-1 hover:border-teal/35 hover:bg-panel"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`transition-colors duration-300 ${isOpen ? TONE_TEXT[tone] : "text-dim group-hover:" + TONE_TEXT[tone]}`}>
                    <Icon name={f.icon} className="h-7 w-7" />
                  </span>
                  <span className="font-mono text-[10px] text-dim">/{f.n}</span>
                </div>
                <p className="mt-4 font-display text-[15px] font-bold tracking-tight text-ink">{f.name}</p>
                <p className="mt-1 font-mono text-[10px] text-mut">{f.examples.length} produits types</p>
                {isOpen && (
                  <div className="fuse-in mt-4 border-t border-line pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {f.examples.map((e) => (
                        <span key={e} className="border border-linesoft bg-deep px-2 py-1 text-[11px] text-ink/85">
                          {e}
                        </span>
                      ))}
                    </div>
                    <p className={`mt-3 font-mono text-[10px] leading-relaxed ${TONE_TEXT[tone]}`}>◆ {f.sig}</p>
                  </div>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Fusionneur IA */}
      <Reveal className="mt-14">
        <div className="border border-amber/25 bg-gradient-to-br from-panel/80 to-deep/80 p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] tracking-[0.24em] text-amber uppercase">Fusionneur — hybrides générés par IA</p>
              <h3 className="mt-2 font-display text-lg md:text-xl font-bold text-ink">
                Le cerveau combine les familles pour créer l'inédit
              </h3>
            </div>
            <Chip tone="amber">XANO BRAIN · GÉNÉRATION 48 H</Chip>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto]">
            <select
              value={fa}
              onChange={(e) => setFa(e.target.value)}
              aria-label="Première famille"
              className="border border-line bg-panel px-3 py-3 font-mono text-[13px] text-ink outline-none transition-colors focus:border-amber/60"
            >
              {FAMILIES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.n} — {f.name}
                </option>
              ))}
            </select>
            <span className="hidden items-center justify-center font-display text-xl font-bold text-amber md:flex">×</span>
            <select
              value={fb}
              onChange={(e) => setFb(e.target.value)}
              aria-label="Seconde famille"
              className="border border-line bg-panel px-3 py-3 font-mono text-[13px] text-ink outline-none transition-colors focus:border-amber/60"
            >
              {FAMILIES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.n} — {f.name}
                </option>
              ))}
            </select>
            <button
              onClick={fuse}
              className="group inline-flex items-center justify-center gap-2 bg-amber px-5 py-3 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-abyss transition-all duration-300 hover:bg-teal hover:shadow-[0_0_28px_rgba(44,232,200,0.3)]"
            >
              <Icon name="spark" className="h-4 w-4 transition-transform duration-500 group-hover:rotate-90" />
              Fusionner
            </button>
          </div>

          {error && (
            <p className="fuse-in mt-5 border border-coral/40 bg-coral/10 px-4 py-3 font-mono text-[12px] text-coral">
              ⚠ Deux familles distinctes sont nécessaires pour générer un hybride.
            </p>
          )}

          {res && !error && (
            <div key={nonce} className="fuse-in mt-6 border border-line bg-abyss/70 p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`font-display text-xl md:text-2xl font-extrabold tracking-tight ${TONE_TEXT[res.tone]}`}>
                  {res.name}
                </span>
                <Chip tone={res.tone}>{res.combo}</Chip>
              </div>
              <p className="mt-3 max-w-3xl text-sm md:text-[15px] leading-relaxed text-mut">{res.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {res.chips.map((c) => (
                  <span key={c} className="border border-linesoft bg-panel px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink/80">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </SectionWrap>
  );
}
