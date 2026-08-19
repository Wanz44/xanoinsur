import { useEffect, useRef } from "react";
import { usePRM } from "../lib/hooks";

type NNode = { x: number; y: number; vx: number; vy: number; r: number; c: string };
type Pulse = { ax: number; ay: number; bx: number; by: number; t: number; sp: number; c: string };

export default function NeuralCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const prm = usePRM();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let W = 0;
    let H = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: NNode[] = [];
    let pulses: Pulse[] = [];
    let lastSpawn = 0;
    let running = true;

    const seed = () => {
      const n = Math.min(74, Math.max(28, Math.floor((W * H) / 26000)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.5 + 0.8,
        c: Math.random() < 0.8 ? "44,232,200" : "255,182,72",
      }));
    };

    const resize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(W * DPR));
      canvas.height = Math.max(1, Math.floor(H * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      if (nodes.length === 0) seed();
    };

    const spawnPulse = () => {
      if (nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      let best: NNode | null = null;
      let bd = 175;
      for (const n of nodes) {
        if (n === a) continue;
        const d = Math.hypot(n.x - a.x, n.y - a.y);
        if (d < bd) {
          bd = d;
          best = n;
        }
      }
      if (!best) return;
      pulses.push({
        ax: a.x,
        ay: a.y,
        bx: best.x,
        by: best.y,
        t: 0,
        sp: 0.007 + Math.random() * 0.011,
        c: Math.random() < 0.75 ? "44,232,200" : "255,182,72",
      });
      if (pulses.length > 42) pulses.shift();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(122,168,188,${(1 - d / 130) * 0.13})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${n.c},0.45)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        if (!prm) p.t += p.sp;
        const x = p.ax + (p.bx - p.ax) * p.t;
        const y = p.ay + (p.by - p.ay) * p.t;
        ctx.fillStyle = `rgba(${p.c},0.95)`;
        ctx.shadowColor = `rgba(${p.c},0.8)`;
        ctx.shadowBlur = 9;
        ctx.beginPath();
        ctx.arc(x, y, 1.9, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const step = (t: number) => {
      if (!running) return;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -12) n.x = W + 12;
        else if (n.x > W + 12) n.x = -12;
        if (n.y < -12) n.y = H + 12;
        else if (n.y > H + 12) n.y = -12;
      }
      if (t - lastSpawn > 300) {
        lastSpawn = t;
        spawnPulse();
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    resize();
    if (prm) {
      for (let i = 0; i < 16; i++) spawnPulse();
      pulses.forEach((p) => (p.t = Math.random()));
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    const onResize = () => {
      resize();
      if (prm) draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [prm]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
