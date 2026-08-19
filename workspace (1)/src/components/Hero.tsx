import { useEffect, useRef, useState } from "react";
import NeuralCanvas from "./NeuralCanvas";
import { Icon } from "./Icons";
import { Reveal } from "./ui";
import { FEED_POOL, TICKER, type FeedItem } from "../lib/data";
import { useCountUp, useLiveValue, useNow, useScramble, useInView } from "../lib/hooks";

type LiveItem = FeedItem & { time: string; id: number };

const stamp = () =>
  new Date().toLocaleTimeString("fr-FR", { hour12: false });

const TONE_TAG: Record<string, string> = {
  teal: "text-teal border-teal/35 bg-teal/5",
  amber: "text-amber border-amber/35 bg-amber/5",
  coral: "text-coral border-coral/35 bg-coral/5",
  sky: "text-sky border-sky/35 bg-sky/5",
};

function NeuralFeed() {
  const [items, setItems] = useState<LiveItem[]>(() =>
    FEED_POOL.slice(0, 5).map((f, i) => ({ ...f, time: stamp(), id: i })),
  );
  const idx = useRef(5);

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const f = FEED_POOL[idx.current % FEED_POOL.length];
        idx.current += 1;
        return [{ ...f, time: stamp(), id: Date.now() + idx.current }, ...prev].slice(0, 6);
      });
    }, 2900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative border border-line bg-panel/80 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="dot-live inline-block h-2 w-2 rounded-full bg-teal" />
          <p className="font-mono text-[11px] tracking-[0.22em] text-ink">FLUX NEURONAL</p>
        </div>
        <p className="font-mono text-[10px] text-mut">TEMPS RÉEL · 5 RÉGIONS</p>
      </div>
      <div className="relative h-[1px] overflow-hidden bg-linesoft">
        <span className="scanline absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-teal/60 to-transparent" />
      </div>
      <ul className="divide-y divide-linesoft">
        {items.map((it) => (
          <li key={it.id} className="mod-in flex items-start gap-3 px-4 py-2.5">
            <span className="mt-0.5 font-mono text-[10px] text-dim tabular-nums">{it.time}</span>
            <span
              className={`shrink-0 border px-1.5 py-0.5 font-mono text-[9px] tracking-wider ${TONE_TAG[it.tone]}`}
            >
              {it.tag}
            </span>
            <span className="text-[13px] leading-snug text-ink/90">{it.text}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-line px-4 py-2.5">
        {["KIN", "LAG", "PAR", "SIN", "SAO"].map((r, i) => (
          <span key={r} className="flex items-center gap-1.5 font-mono text-[10px] text-mut">
            <span className={`h-1.5 w-1.5 rounded-full ${i === 2 ? "bg-amber" : "bg-teal"} ${i % 2 ? "" : "blink"}`} />
            {r}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10px] text-dim">KILL-SWITCH HUMAIN : ARMÉ</span>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  delay,
}: {
  label: string;
  value: string;
  sub: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="border border-line bg-panel/50 px-4 py-4 transition-colors duration-300 hover:border-teal/40">
      <p className="font-display text-xl md:text-[1.55rem] font-bold tracking-tight text-ink tabular-nums">{value}</p>
      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mut">{label}</p>
      <p className="mt-0.5 font-mono text-[10px] text-teal/80">{sub}</p>
    </Reveal>
  );
}

function HeroStats() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const assures = useLiveValue(812_406_112, { every: 1250, min: 1, max: 9 });
  const modules = useLiveValue(1_247, { every: 5400, min: 0, max: 1 });
  const primes = useCountUp(220.4, { decimals: 1, active: inView });
  const jur = useCountUp(214, { active: inView });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <Stat label="Assurés connectés" value={assures} sub="+3,2 / s en moyenne" delay={0} />
      <Stat label="Primes traitées (cumul)" value={`${primes} B$`} sub="+18,6 M$ aujourd'hui" delay={90} />
      <Stat label="Modules générés par le Brain" value={modules} sub="100 % simulés avant prod" delay={180} />
      <Stat label="Juridictions actives" value={jur} sub="6 zones régulatoires" delay={270} />
    </div>
  );
}

export default function Hero() {
  const now = useNow();
  const title = useScramble("XANO.insur", true, 30);
  const a = title.slice(0, 4);
  const b = title.slice(4);

  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <NeuralCanvas className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/30 to-abyss" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(44,232,200,0.07),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 pt-28 md:px-8 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.24em] text-teal uppercase">
                <span className="dot-live inline-block h-2 w-2 rounded-full bg-teal" />
                Système en ligne · OS mondial de l'assurance
                <span className="text-dim tabular-nums normal-case tracking-normal">
                  {now.toLocaleTimeString("fr-FR", { hour12: false })} UTC
                </span>
              </p>
            </Reveal>

            <h1 className="mt-6 font-display text-[clamp(2.7rem,7.5vw,5.4rem)] font-extrabold leading-[0.98] tracking-tight">
              <span className="text-ink">{a}</span>
              <span className="text-teal glow-teal">{b}</span>
            </h1>

            <Reveal className="lm mt-5" delay={150}>
              <p className="font-display text-[clamp(1.05rem,2.6vw,1.7rem)] font-medium leading-snug text-ink/90">
                <span>Le système nerveux mondial de l'assurance.</span>
              </p>
            </Reveal>

            <Reveal delay={260}>
              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-mut">
                Une plateforme qui ne se contente pas de gérer l'assurance —{" "}
                <em className="text-ink not-italic border-b border-teal/50">elle l'invente en temps réel</em> selon les
                risques du monde. N'importe qui, n'importe où, déploie n'importe quel produit en{" "}
                <strong className="font-semibold text-amber">48 h</strong>.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cerveau"
                  className="group inline-flex items-center gap-2.5 bg-amber px-6 py-3.5 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-abyss transition-all duration-300 hover:bg-teal hover:shadow-[0_0_36px_rgba(44,232,200,0.35)]"
                >
                  <Icon name="bolt" className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                  Réveiller le cerveau
                </a>
                <a
                  href="#architecture"
                  className="group inline-flex items-center gap-2.5 border border-line px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-teal/60 hover:text-teal"
                >
                  Explorer l'architecture
                  <Icon name="down" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="rv-r" delay={300}>
            <NeuralFeed />
          </Reveal>
        </div>

        <div className="mt-12">
          <HeroStats />
        </div>

        <p className="mt-8 font-mono text-[10px] tracking-[0.2em] text-dim">
          XN/2026 · 04°19′S 15°18′E · KIN — LAG — PAR — SIN — SAO
        </p>
      </div>

      <div className="mq relative z-10 overflow-hidden border-y border-line bg-deep/70 backdrop-blur-sm">
        <div className="mq-track flex w-max items-center">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center">
              {TICKER.map((t, i) => (
                <span key={`${k}-${i}`} className="flex items-center whitespace-nowrap px-5 py-2.5 font-mono text-[11px] tracking-wider text-mut">
                  <span className="mr-5 inline-block h-1.5 w-1.5 rotate-45 bg-teal/70" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
