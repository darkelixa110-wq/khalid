import React from "react";
import { AbsoluteFill, random } from "remotion";
import { colors, H, W } from "../theme";

export const Sky: React.FC<{ dim?: number }> = ({ dim = 0 }) => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, ${colors.skyTop} 0%, ${colors.skyMid} 34%, ${colors.skyLow} 56%, ${colors.horizon} 70%, ${colors.horizon} 100%)`,
    }}
  >
    <AbsoluteFill style={{ background: "#000", opacity: dim }} />
  </AbsoluteFill>
);

type Building = { x: number; w: number; h: number; dome: boolean; minaret: boolean };

const makeSkyline = (seed: string, count: number, minH: number, maxH: number): Building[] => {
  const out: Building[] = [];
  let x = -400;
  for (let i = 0; i < count; i++) {
    const w = 90 + random(`${seed}-w-${i}`) * 220;
    out.push({
      x,
      w,
      h: minH + random(`${seed}-h-${i}`) * (maxH - minH),
      dome: random(`${seed}-d-${i}`) > 0.55,
      minaret: random(`${seed}-m-${i}`) > 0.7,
    });
    x += w + random(`${seed}-g-${i}`) * 40;
  }
  return out;
};

const layers = [
  { seed: "far", fill: colors.cityFar, base: 760, minH: 120, maxH: 300, parallax: 0.25 },
  { seed: "mid", fill: colors.cityMid, base: 860, minH: 90, maxH: 260, parallax: 0.55 },
  { seed: "near", fill: colors.cityNear, base: 980, minH: 60, maxH: 200, parallax: 1 },
].map((l) => ({ ...l, buildings: makeSkyline(l.seed, 26, l.minH, l.maxH) }));

/** Layered city silhouettes. camX/camY shift layers with parallax. */
export const City: React.FC<{ camX?: number; camY?: number; blur?: number; tilt?: number }> = ({
  camX = 0,
  camY = 0,
  blur = 0,
  tilt = 0,
}) => (
  <AbsoluteFill style={{ filter: blur ? `blur(${blur}px)` : undefined, rotate: `${tilt}deg`, scale: tilt ? 1.25 : 1 }}>
    {layers.map((l) => (
      <svg
        key={l.seed}
        width={W * 2}
        height={H}
        style={{ position: "absolute", left: camX * l.parallax - W / 3, top: camY * l.parallax }}
      >
        {l.buildings.map((b, i) => {
          const top = l.base - b.h;
          return (
            <g key={i} fill={l.fill}>
              <rect x={b.x} y={top} width={b.w} height={H} />
              {b.dome ? <ellipse cx={b.x + b.w / 2} cy={top} rx={b.w * 0.38} ry={b.w * 0.42} /> : null}
              {b.minaret ? (
                <>
                  <rect x={b.x + b.w - 22} y={top - b.h * 0.7} width={16} height={b.h} />
                  <circle cx={b.x + b.w - 14} cy={top - b.h * 0.7} r={13} />
                </>
              ) : null}
            </g>
          );
        })}
      </svg>
    ))}
  </AbsoluteFill>
);

/** Foreground rooftop slab with bold anime outline. */
export const Rooftop: React.FC<{ y: number; x1?: number; x2?: number; camX?: number }> = ({
  y,
  x1 = -50,
  x2 = W + 50,
  camX = 0,
}) => (
  <svg width={W} height={H} style={{ position: "absolute", left: camX, top: 0, overflow: "visible" }}>
    <path
      d={`M ${x1} ${y} L ${x2} ${y - 18} L ${x2} ${H + 50} L ${x1} ${H + 50} Z`}
      fill={colors.stone}
      stroke={colors.ink}
      strokeWidth={6}
    />
    <path d={`M ${x1} ${y + 26} L ${x2} ${y + 8}`} stroke={colors.stoneDark} strokeWidth={10} />
    {Array.from({ length: 14 }).map((_, i) => {
      const x = x1 + ((x2 - x1) / 14) * i + 30;
      return <path key={i} d={`M ${x} ${y + 40} l 18 120`} stroke={colors.stoneDark} strokeWidth={4} />;
    })}
  </svg>
);
