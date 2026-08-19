import { useEffect, useRef, useState, type RefObject } from "react";

export function usePRM(): boolean {
  const [prm, setPrm] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrm(mq.matches);
    const fn = (e: MediaQueryListEvent) => setPrm(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return prm;
}

export function useInView<T extends Element>(threshold = 0.16): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export const nf = (d = 0) =>
  new Intl.NumberFormat("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });

export function useCountUp(target: number, opts?: { dur?: number; decimals?: number; active?: boolean }) {
  const { dur = 1700, decimals = 0, active = true } = opts ?? {};
  const prm = usePRM();
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    if (prm) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(target * e);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setVal(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, dur, prm]);
  return nf(decimals).format(val);
}

export function useLiveValue(base: number, opts?: { every?: number; min?: number; max?: number; decimals?: number }) {
  const { every = 1300, min = 1, max = 9, decimals = 0 } = opts ?? {};
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(
      () => setV((p) => p + Math.floor(Math.random() * (max - min + 1)) + min),
      every,
    );
    return () => clearInterval(id);
  }, [every, min, max]);
  return nf(decimals).format(v);
}

const SCRAMBLE_CHARS = "XANO#/<>%¤01▮§";

export function useScramble(text: string, active: boolean, speed = 26) {
  const prm = usePRM();
  const [out, setOut] = useState(() => text.replace(/[^\s]/g, "·"));
  useEffect(() => {
    if (!active) return;
    if (prm) {
      setOut(text);
      return;
    }
    let frame = 0;
    let raf = 0;
    let last = 0;
    const total = text.length;
    const step = (t: number) => {
      if (t - last >= speed) {
        last = t;
        frame++;
        const fixed = Math.floor(frame / 2);
        if (fixed >= total) {
          setOut(text);
          return;
        }
        let s = "";
        for (let i = 0; i < total; i++) {
          const c = text[i];
          if (c === " ") {
            s += " ";
            continue;
          }
          s += i < fixed ? c : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        setOut(s);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [text, active, prm, speed]);
  return out;
}

export function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return p;
}
