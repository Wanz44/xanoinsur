import { useCallback, useEffect, useRef, useState } from "react";
import { CYCLE, SEED_MODULES, SIGNALS, type Signal } from "../lib/data";
import { Icon } from "./Icons";
import { Chip, Reveal, SectionHead, TONE_BORDER, TONE_TEXT } from "./ui";
import { usePRM } from "../lib/hooks";

type LogLine = { id: number; time: string; tag: string; text: string; tone: string };
type Module = {
  id: number;
  name: string;
  famille: string;
  status: "SIMULATION" | "PRODUCTION";
  gen: string;
  tone: "teal" | "amber" | "coral" | "sky";
  fresh?: boolean;
};

const now = () => new Date().toLocaleTimeString("fr-FR", { hour12: false });
let uid = 100;

export default function BrainLab() {
  const prm = usePRM();
  const [phase, setPhase] = useState(-1);
  const [busy, setBusy] = useState(false);
  const [auto, setAuto] = useState(true);
  const [signal, setSignal] = useState<Signal | null>(null);
  const [log, setLog] = useState<LogLine[]>([
    { id: 1, time: now(), tag: "BOOT", text: "XANO BRAIN v2.4 — 50 ans de données actuarielles chargées", tone: "teal" },
    { id: 2, time: now(), tag: "SENSE", text: "Écoute de 214 juridictions — 1,2 M signaux / heure", tone: "sky" },
  ]);
  const [modules, setModules] = useState<Module[]>(
    SEED_MODULES.map((m, i) => ({ ...m, status: m.status as Module["status"], id: i })),
  );

  const busyRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const autoIdx = useRef(0);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log]);

  useEffect(() => () => timersRef.current.forEach(clearTimeout), []);

  const push = useCallback((tag: string, text: string, tone: string) => {
    uid += 1;
    setLog((prev) => [...prev.slice(-32), { id: uid, time: now(), tag, text, tone }]);
  }, []);

  const run = useCallback(
    (s: Signal) => {
      if (busyRef.current) return;
      busyRef.current = true;
      setBusy(true);
      setSignal(s);

      if (prm) {
        setPhase(3);
        push("SENSE", s.sense, "teal");
        push("THINK", s.think, "sky");
        push("SANDBOX", "10 000 000 scénarios simulés — 0 faille actuarielle", "amber");
        push("ACT", `Module « ${s.module} » déployé en 42 h — comité humain validé (kill-switch OK)`, "teal");
        push("LEARN", s.learn, "amber");
        uid += 1;
        setModules((prev) => [
          { id: uid, name: s.module, famille: s.famille, status: "PRODUCTION", gen: "42 h", tone: s.tone, fresh: true },
          ...prev.filter((m) => m.name !== s.module),
        ]);
        busyRef.current = false;
        setBusy(false);
        return;
      }

      const at = (ms: number, fn: () => void) => timersRef.current.push(window.setTimeout(fn, ms));
      const hours = 38 + Math.floor(Math.random() * 9);

      at(0, () => {
        setPhase(0);
        push("SENSE", s.sense, "teal");
      });
      at(1000, () => {
        setPhase(1);
        push("THINK", s.think, "sky");
      });
      at(2400, () => push("THINK", "LLM actuariel : génération T&C, barème, souscription, parcours sinistre…", "sky"));
      at(3000, () => {
        setPhase(2);
        push("SANDBOX", "10 000 000 scénarios simulés — 0 faille actuarielle", "amber");
      });
      at(4200, () => {
        uid += 1;
        setModules((prev) => [
          { id: uid, name: s.module, famille: s.famille, status: "PRODUCTION", gen: `${hours} h`, tone: s.tone, fresh: true },
          ...prev.filter((m) => m.name !== s.module),
        ]);
        push("ACT", `Module « ${s.module} » déployé en ${hours} h — comité humain validé (kill-switch OK)`, "teal");
      });
      at(5400, () => {
        setPhase(3);
        push("LEARN", s.learn, "amber");
      });
      at(6600, () => {
        setPhase(-1);
        busyRef.current = false;
        setBusy(false);
      });
    },
    [prm, push],
  );

  useEffect(() => {
    if (!auto) return;
    const kickoff = window.setTimeout(() => {
      if (!busyRef.current) run(SIGNALS[autoIdx.current % SIGNALS.length]);
    }, 1400);
    const id = window.setInterval(() => {
      if (!busyRef.current) {
        autoIdx.current += 1;
        run(SIGNALS[autoIdx.current % SIGNALS.length]);
      }
    }, 8400);
    return () => {
      window.clearTimeout(kickoff);
      window.clearInterval(id);
    };
  }, [auto, run]);

  return (
    <section id="cerveau" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,182,72,0.045),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            no="03"
            kicker="XANO BRAIN — MOTEUR D'ÉVOLUTION"
            title="La plateforme évolue toute seule. Regardez."
            lead="Chaque interaction génère un signal. Le cerveau agrège, détecte des patterns, puis propose ou déploie de nouvelles capacités — simulées sur 10 millions de scénarios avant toute mise en production."
            tone="amber"
          />
          <Reveal delay={200} className="mb-12 md:mb-16">
            <button
              onClick={() => setAuto((v) => !v)}
              className={`inline-flex items-center gap-2.5 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                auto
                  ? "border-teal/50 bg-teal/10 text-teal hover:bg-teal/20"
                  : "border-line text-mut hover:border-amber/50 hover:text-amber"
              }`}
            >
              <Icon name={auto ? "pause" : "play"} className="h-3.5 w-3.5" />
              Auto-évolution : {auto ? "ON" : "OFF"}
            </button>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr_300px]">
          {/* Pipeline Sense → Think → Act → Learn */}
          <Reveal variant="rv-l">
            <div className="relative h-full border border-line bg-panel/60 p-5">
              <p className="mb-5 font-mono text-[10px] tracking-[0.22em] text-dim">CYCLE AUTONOME</p>
              <div className="absolute left-[38px] top-20 bottom-10 w-px bg-linesoft">
                <span
                  className="absolute left-0 top-0 w-px bg-gradient-to-b from-teal to-amber transition-all duration-700"
                  style={{ height: `${phase < 0 ? 0 : ((phase + 1) / 4) * 100}%` }}
                />
              </div>
              <ol className="space-y-6">
                {CYCLE.map((c, i) => {
                  const activePhase = phase === i;
                  const done = phase > i;
                  return (
                    <li key={c.key} className="relative flex items-center gap-4">
                      <span
                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-500 ${
                          activePhase
                            ? "border-amber bg-amber/15 text-amber shadow-[0_0_20px_rgba(255,182,72,0.3)]"
                            : done
                              ? "border-teal/60 bg-teal/10 text-teal"
                              : "border-line bg-panel text-dim"
                        }`}
                      >
                        <Icon name={c.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`font-display text-sm font-bold tracking-wide transition-colors duration-500 ${
                            activePhase ? "text-amber" : done ? "text-teal" : "text-mut"
                          }`}
                        >
                          {c.label}
                        </p>
                        <p className="text-xs text-mut">{c.fr}</p>
                      </div>
                      <span
                        className={`ml-auto font-mono text-[9px] tracking-wider ${
                          activePhase ? "blink text-amber" : done ? "text-teal" : "text-dim"
                        }`}
                      >
                        {activePhase ? "RUN" : done ? "OK" : "IDLE"}
                      </span>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-8 border-t border-line pt-4">
                <p className="font-mono text-[10px] text-dim">SIGNAL ACTIF</p>
                <p className={`mt-1.5 text-[13px] leading-snug ${signal ? "text-ink" : "text-dim"}`}>
                  {signal ? signal.sense : "En attente de signaux du marché…"}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Console + injection */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col border border-line bg-abyss/80">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <p className="font-mono text-[11px] tracking-[0.22em] text-ink">CONSOLE DU CERVEAU</p>
                <span className="flex items-center gap-2 font-mono text-[10px] text-mut">
                  <span className={`h-1.5 w-1.5 rounded-full ${busy ? "blink bg-amber" : "bg-teal"}`} />
                  {busy ? "GÉNÉRATION EN COURS" : "ÉCOUTE ACTIVE"}
                </span>
              </div>
              <div ref={logRef} className="h-64 overflow-y-auto px-4 py-3 font-mono text-[11px] leading-relaxed lg:h-72">
                {log.map((l) => (
                  <p key={l.id} className="mod-in py-0.5">
                    <span className="text-dim">{l.time}</span>{" "}
                    <span className={`${TONE_TEXT[l.tone] ?? "text-mut"}`}>[{l.tag}]</span>{" "}
                    <span className="text-ink/85">{l.text}</span>
                  </p>
                ))}
                {busy && !prm && <p className="text-teal">▮▮▮ <span className="blink">traitement…</span></p>}
              </div>
              <div className="border-t border-line p-4">
                <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-dim">INJECTER UN SIGNAL DU MONDE RÉEL</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SIGNALS.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => run(s)}
                      disabled={busy}
                      className={`group flex items-center gap-2.5 border border-line bg-panel/60 px-3 py-2.5 text-left text-[12px] text-mut transition-all duration-300 hover:border-teal/50 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 ${
                        signal?.id === s.id && busy ? `border-amber/60 text-ink` : ""
                      }`}
                    >
                      <Icon name="bolt" className={`h-3.5 w-3.5 shrink-0 transition-colors ${signal?.id === s.id && busy ? "text-amber" : "text-dim group-hover:text-teal"}`} />
                      {s.chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Registre */}
          <Reveal variant="rv-r" delay={220}>
            <div className="h-full border border-line bg-panel/60 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.22em] text-dim">REGISTRE DES MODULES</p>
                <span className="font-mono text-[10px] text-teal">{modules.length}</span>
              </div>
              <ul className="space-y-2.5">
                {modules.slice(0, 7).map((m) => (
                  <li
                    key={m.id}
                    className={`border px-3 py-2.5 transition-colors duration-300 ${
                      m.fresh ? `${TONE_BORDER[m.tone]} bg-raise mod-in` : "border-linesoft bg-deep/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-semibold leading-tight text-ink">{m.name}</p>
                      <span className="font-mono text-[9px] text-dim">{m.gen}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <Chip tone={m.tone}>{m.famille}</Chip>
                      <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-teal">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                        {m.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] leading-relaxed text-dim">
                Tout module critique passe en comité humain avant production — kill-switch permanent.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
