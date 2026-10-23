import React from "react";
import { AbsoluteFill, random } from "remotion";
import { colors, H, W } from "../theme";

const rad = (d: number) => (d * Math.PI) / 180;
const pt = (cx: number, cy: number, r: number, deg: number) => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))];

const arcPath = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = pt(cx, cy, r, a0);
  const [x1, y1] = pt(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} ${sweep} ${x1} ${y1}`;
};

type ArcProps = {
  cx: number;
  cy: number;
  r: number;
  from: number;
  to: number;
  width: number;
  /** 0..1, how much of the arc is drawn (the slash sweeping). */
  progress?: number;
  frame: number;
  id: string;
};

/** Flame slash trail: layered strokes, outward tongues and turbulence. */
export const FireArc: React.FC<ArcProps> = ({ cx, cy, r, from, to, width, progress = 1, frame, id }) => {
  const end = from + (to - from) * progress;
  const tongues = 22;
  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
      <defs>
        <filter id={`fire-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.03" numOctaves={2} seed={frame % 97} />
          <feDisplacementMap in="SourceGraphic" scale={width * 0.6} />
          <feGaussianBlur stdDeviation={1.2} />
        </filter>
      </defs>
      <g filter={`url(#fire-${id})`} strokeLinecap="round" fill="none">
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.ink} strokeWidth={width + 10} opacity={0.85} />
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.fireDark} strokeWidth={width} />
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.fire} strokeWidth={width * 0.68} />
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.fireHot} strokeWidth={width * 0.3} />
        {Array.from({ length: tongues }).map((_, i) => {
          const t = i / tongues;
          if (t > progress) return null;
          const a = from + (to - from) * t;
          const len = width * (0.6 + random(`${id}-t-${i}-${Math.floor(frame / 2)}`) * 1.4);
          const [x0, y0] = pt(cx, cy, r + width * 0.3, a - 3);
          const [x1, y1] = pt(cx, cy, r + width * 0.3 + len, a + (to > from ? -10 : 10));
          const [x2, y2] = pt(cx, cy, r + width * 0.3, a + 3);
          return (
            <path
              key={i}
              d={`M ${x0} ${y0} Q ${(x0 + x1) / 2} ${(y0 + y1) / 2 - 8} ${x1} ${y1} L ${x2} ${y2} Z`}
              fill={i % 2 ? colors.fire : colors.fireHot}
              stroke={colors.fireDark}
              strokeWidth={3}
            />
          );
        })}
      </g>
    </svg>
  );
};

const curl = (x: number, y: number, size: number, dir: number) => {
  // Archimedean spiral, the "claw" curl of ukiyo-e foam.
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const t = (i / 40) * Math.PI * 2.4;
    const rr = size * (1 - i / 46);
    pts.push(`${x + Math.cos(t * dir) * rr},${y + Math.sin(t * dir) * rr}`);
  }
  return `M ${pts.join(" L ")}`;
};

/** Water slash trail in an ukiyo-e manner: ink outline, flat blues, white flow lines and curls. */
export const WaterArc: React.FC<ArcProps> = ({ cx, cy, r, from, to, width, progress = 1, frame, id }) => {
  const end = from + (to - from) * progress;
  const flow = (frame * 6) % 40;
  const curls = 7;
  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
      <g fill="none" strokeLinecap="round">
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.ink} strokeWidth={width + 12} />
        <path d={arcPath(cx, cy, r, from, end)} stroke={colors.waterDeep} strokeWidth={width} />
        <path d={arcPath(cx, cy, r + width * 0.12, from, end)} stroke={colors.water} strokeWidth={width * 0.55} />
        {[-0.3, -0.1, 0.1, 0.3].map((o, i) => (
          <path
            key={i}
            d={arcPath(cx, cy, r + width * o, from, end)}
            stroke={colors.foam}
            strokeWidth={i % 2 ? 3 : 5}
            strokeDasharray="60 22"
            strokeDashoffset={-flow * (i + 1)}
            opacity={0.9}
          />
        ))}
      </g>
      {Array.from({ length: curls }).map((_, i) => {
        const t = (i + 0.5) / curls;
        if (t > progress) return null;
        const a = from + (to - from) * t;
        const [x, y] = pt(cx, cy, r + width * 0.55, a);
        const size = width * (0.35 + random(`${id}-c-${i}`) * 0.25);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r={size} fill={colors.water} stroke={colors.ink} strokeWidth={4} />
            <path d={curl(x, y, size * 0.85, to > from ? 1 : -1)} stroke={colors.foam} strokeWidth={5} fill="none" />
          </g>
        );
      })}
    </svg>
  );
};

/** Radial speed lines around (cx, cy). */
export const SpeedLines: React.FC<{ cx?: number; cy?: number; color?: string; inner?: number; frame: number; count?: number }> = ({
  cx = W / 2,
  cy = H / 2,
  color = "#fff",
  inner = 260,
  frame,
  count = 90,
}) => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    {Array.from({ length: count }).map((_, i) => {
      const a = random(`sl-a-${i}-${Math.floor(frame / 2)}`) * 360;
      const r0 = inner + random(`sl-r-${i}-${Math.floor(frame / 2)}`) * 260;
      const [x0, y0] = pt(cx, cy, r0, a);
      const [x1, y1] = pt(cx, cy, 1600, a);
      const w = 2 + random(`sl-w-${i}`) * 9;
      const [xa, ya] = pt(cx, cy, 1600, a + w * 0.12);
      return <path key={i} d={`M ${x0} ${y0} L ${x1} ${y1} L ${xa} ${ya} Z`} fill={color} />;
    })}
  </svg>
);

/** Horizontal motion streaks for dashes. */
export const DashStreaks: React.FC<{ frame: number; color?: string }> = ({ frame, color = "rgba(255,255,255,0.75)" }) => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    {Array.from({ length: 60 }).map((_, i) => {
      const y = random(`ds-y-${i}`) * H;
      const len = 200 + random(`ds-l-${i}`) * 700;
      const x = ((random(`ds-x-${i}`) * W * 2 - frame * 140) % (W * 2)) + W * 0.5;
      return <rect key={i} x={x - len} y={y} width={len} height={2 + random(`ds-h-${i}`) * 5} fill={color} />;
    })}
  </svg>
);

/** Impact frame: renders children as stark inverted black and white with speed lines. */
export const ImpactFrame: React.FC<{ children: React.ReactNode; frame: number }> = ({ children, frame }) => (
  <AbsoluteFill style={{ background: "#fff" }}>
    <AbsoluteFill style={{ filter: "grayscale(1) brightness(1.25) contrast(3.2) invert(1)" }}>{children}</AbsoluteFill>
    <SpeedLines color="#000" frame={frame} inner={180} count={70} />
  </AbsoluteFill>
);

/** Spark burst at a clash point. */
export const Sparks: React.FC<{ cx: number; cy: number; t: number; id: string }> = ({ cx, cy, t, id }) => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    <circle cx={cx} cy={cy} r={60 + t * 140} fill="#fff8e0" opacity={Math.max(0, 0.85 - t * 2.2)} />
    {Array.from({ length: 34 }).map((_, i) => {
      const a = random(`${id}-a-${i}`) * 360;
      const sp = 250 + random(`${id}-s-${i}`) * 650;
      const [x0, y0] = pt(cx, cy, sp * t * 0.6, a);
      const [x1, y1] = pt(cx, cy, sp * t, a);
      return <line key={i} x1={x0} y1={y0} x2={x1} y2={y1} stroke={i % 3 ? colors.fireHot : "#fff"} strokeWidth={4} strokeLinecap="round" />;
    })}
  </svg>
);

/** Drifting embers or dust motes. */
export const Particles: React.FC<{ frame: number; color: string; count?: number; rise?: number; seed: string }> = ({
  frame,
  color,
  count = 60,
  rise = 2,
  seed,
}) => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    {Array.from({ length: count }).map((_, i) => {
      const x = (random(`${seed}-x-${i}`) * W + frame * (1 + random(`${seed}-v-${i}`) * 3)) % W;
      const y = (((random(`${seed}-y-${i}`) * H - frame * rise * (0.5 + random(`${seed}-r-${i}`))) % H) + H) % H;
      const r = 1.5 + random(`${seed}-s-${i}`) * 4;
      return <circle key={i} cx={x} cy={y} r={r} fill={color} opacity={0.4 + random(`${seed}-o-${i}`) * 0.6} />;
    })}
  </svg>
);

/** Soft billowing steam or dust bank. */
export const Steam: React.FC<{ frame: number; y: number; color?: string; opacity?: number; seed: string; spread?: number }> = ({
  frame,
  y,
  color = "#efe6dc",
  opacity = 1,
  seed,
  spread = 1,
}) => (
  <AbsoluteFill style={{ filter: "blur(42px)", opacity }}>
    <svg width={W} height={H}>
      {Array.from({ length: 46 }).map((_, i) => {
        const x = random(`${seed}-x-${i}`) * W;
        const r = (110 + random(`${seed}-r-${i}`) * 180) * spread;
        const dx = (random(`${seed}-d-${i}`) - 0.5) * frame * 3;
        return <circle key={i} cx={x + dx} cy={y + (random(`${seed}-y-${i}`) - 0.5) * 220} r={r} fill={color} />;
      })}
    </svg>
  </AbsoluteFill>
);

/** Expanding shockwave rings. */
export const Shockwave: React.FC<{ t: number; color?: string }> = ({ t, color = "#d8d8d8" }) => (
  <svg width={W} height={H} style={{ position: "absolute", inset: 0 }}>
    {[0, 0.18, 0.36].map((d, i) => {
      const k = Math.max(0, t - d);
      return (
        <ellipse key={i} cx={W / 2} cy={H / 2} rx={k * 1900} ry={k * 900} fill="none" stroke={color} strokeWidth={14 * (1 - k)} opacity={1 - k} />
      );
    })}
  </svg>
);
