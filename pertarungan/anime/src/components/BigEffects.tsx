import React from "react";
import { random } from "remotion";
import { colors, H, W } from "../theme";
import { FireArc } from "./Effects";

/** A swirling fire mass centred at (cx, cy), built from rotating flame arcs. */
export const FireStorm: React.FC<{ cx: number; cy: number; scale: number; frame: number }> = ({ cx, cy, scale, frame }) => (
  <>
    {[0, 1, 2, 3, 4].map((i) => {
      const r = (120 + i * 95) * scale;
      const spin = frame * (6 - i) + i * 70;
      return (
        <FireArc
          key={i}
          id={`storm-${i}`}
          cx={cx}
          cy={cy}
          r={r}
          from={spin}
          to={spin + 230 - i * 20}
          width={(70 - i * 6) * scale}
          frame={frame + i * 13}
        />
      );
    })}
  </>
);

/** Great wave crest coming from the right; tipX is where the curl's tip sits. */
export const GreatWave: React.FC<{ tipX: number; crestY: number; frame: number }> = ({ tipX, crestY, frame }) => {
  const body = `M ${W + 200} ${H + 80}
    L ${W + 200} ${crestY + 260}
    C ${W - 150} ${crestY - 160}, ${tipX + 560} ${crestY - 110}, ${tipX + 260} ${crestY - 10}
    C ${tipX + 90} ${crestY + 40}, ${tipX - 10} ${crestY + 120}, ${tipX + 40} ${crestY + 200}
    C ${tipX + 120} ${crestY + 150}, ${tipX + 210} ${crestY + 170}, ${tipX + 240} ${crestY + 280}
    C ${tipX + 300} ${H - 80}, ${tipX + 180} ${H}, ${tipX + 120} ${H + 80} Z`;
  const fingers = 11;
  return (
    <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
      <path d={body} fill={colors.waterDeep} stroke={colors.ink} strokeWidth={10} strokeLinejoin="round" />
      {[40, 90, 140, 200].map((o, i) => (
        <path
          key={i}
          d={`M ${W + 100} ${crestY + 260 + o} C ${W - 200} ${crestY - 100 + o}, ${tipX + 600} ${crestY - 40 + o}, ${tipX + 280 + o * 0.4} ${crestY + 60 + o}`}
          fill="none"
          stroke={i % 2 ? colors.water : colors.foam}
          strokeWidth={i % 2 ? 26 : 7}
          strokeDasharray={i % 2 ? undefined : "90 30"}
          strokeDashoffset={-(frame * 9) % 120}
          strokeLinecap="round"
        />
      ))}
      {Array.from({ length: fingers }).map((_, i) => {
        const t = i / (fingers - 1);
        const x = tipX + 40 + t * 560;
        const y = crestY + 10 - Math.sin(t * Math.PI) * 120 + t * 40;
        const len = 50 + random(`finger-${i}`) * 50;
        return (
          <path
            key={i}
            d={`M ${x} ${y} q ${-len * 0.6} ${-len * 0.4} ${-len} ${len * 0.15} q ${len * 0.25} ${-len * 0.05} ${len * 0.35} ${len * 0.3}`}
            fill={colors.foam}
            stroke={colors.ink}
            strokeWidth={4}
          />
        );
      })}
      {Array.from({ length: 40 }).map((_, i) => (
        <circle
          key={i}
          cx={tipX + random(`spray-x-${i}`) * 700 - 60}
          cy={crestY - 60 - random(`spray-y-${i}`) * 160 + ((frame * 4 + i * 13) % 60)}
          r={4 + random(`spray-r-${i}`) * 9}
          fill={colors.foam}
          stroke={colors.ink}
          strokeWidth={2}
        />
      ))}
    </svg>
  );
};
