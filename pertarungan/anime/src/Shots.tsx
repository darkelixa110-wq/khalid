import React from "react";
import { AbsoluteFill, Easing, interpolate, random, useCurrentFrame } from "remotion";
import { FireStorm, GreatWave } from "./components/BigEffects";
import { Character, FaceShot } from "./components/Character";
import {
  DashStreaks,
  FireArc,
  ImpactFrame,
  Particles,
  Shockwave,
  Sparks,
  SpeedLines,
  Steam,
  WaterArc,
} from "./components/Effects";
import { City, Rooftop, Sky } from "./components/Scenery";
import { colors, H, W } from "./theme";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const shake = (frame: number, amount: number, id: string) =>
  `${(random(`${id}-x-${frame}`) - 0.5) * amount}px ${(random(`${id}-y-${frame}`) - 0.5) * amount}px`;

const Vignette: React.FC<{ strength?: number }> = ({ strength = 0.55 }) => (
  <AbsoluteFill style={{ background: `radial-gradient(ellipse at center, transparent 45%, rgba(10,5,15,${strength}) 100%)` }} />
);

/** 01 — Establishing: dusk over the city, the two rivals on opposite roofs. */
export const Shot01: React.FC = () => {
  const f = useCurrentFrame();
  const camY = interpolate(f, [0, 75], [-60, 0], { ...clamp, easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill>
      <Sky />
      <City camX={interpolate(f, [0, 75], [0, -90])} camY={camY} />
      <Character who="biru" x={430} bottom={850 + camY} height={330} />
      <Character who="merah" x={1500} bottom={900 + camY} height={360} />
      <Rooftop y={850 + camY} x2={760} />
      <Rooftop y={880 + camY} x1={1180} />
      <Particles frame={f} color="#ffd9a0" seed="dust1" count={40} rise={0.6} />
      <Vignette />
    </AbsoluteFill>
  );
};

/** 02 — Medium on the red fighter, wind in hair and scarf, warm rim light. */
export const Shot02: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ scale: interpolate(f, [0, 45], [1, 1.06]) }}>
      <Sky />
      <City camX={-300} blur={6} />
      <Character who="merah" x={1180} bottom={1500} height={1500} rotate={Math.sin(f / 6) * 0.6} rim="rgba(255,150,80,0.55)" />
      <Particles frame={f} color="#ffd9a0" seed="dust2" count={30} rise={0.8} />
      <Vignette />
    </AbsoluteFill>
  );
};

/** 03 — Medium on the blue prince, cool rim light. */
export const Shot03: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ scale: interpolate(f, [0, 45], [1, 1.06]) }}>
      <Sky />
      <City camX={200} blur={6} />
      <Character who="biru" x={760} bottom={2050} height={2000} rotate={Math.sin(f / 6) * 0.5} rim="rgba(120,180,255,0.5)" />
      <Particles frame={f} color="#ffd9a0" seed="dust3" count={30} rise={0.8} />
      <Vignette />
    </AbsoluteFill>
  );
};

/** 04 — Close-ups: her eyes, then his (hard cut at 22). Glint on the last frames. */
export const Shot04: React.FC = () => {
  const f = useCurrentFrame();
  const first = f < 22;
  const local = first ? f : f - 22;
  return (
    <AbsoluteFill style={{ background: "#1a1020" }}>
      <AbsoluteFill style={{ scale: interpolate(local, [0, 22], [1, 1.08]) }}>
        {first ? (
          <FaceShot who="merah" cx={W / 2} cy={H / 2 + 40} faceSize={760} />
        ) : (
          <FaceShot who="biru" cx={W / 2} cy={H / 2 + 60} faceSize={620} />
        )}
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: first
            ? "linear-gradient(90deg, rgba(255,80,40,0.25), transparent 40%)"
            : "linear-gradient(270deg, rgba(60,140,255,0.25), transparent 40%)",
        }}
      />
      <Vignette strength={0.8} />
    </AbsoluteFill>
  );
};

/** 05 — Stance and breath: the city darkens, fire gathers on her, water on him. */
export const Shot05: React.FC = () => {
  const f = useCurrentFrame();
  const p = interpolate(f, [0, 40], [0.2, 1], clamp);
  return (
    <AbsoluteFill>
      <Sky dim={0.65} />
      <City camX={-100} blur={3} />
      <AbsoluteFill style={{ background: "rgba(8,4,18,0.55)" }} />
      <WaterArc id="aura-w" cx={520} cy={720} r={360} from={200} to={200 + 300 * p} width={60} frame={f} />
      <FireArc id="aura-f" cx={1400} cy={700} r={380} from={-20} to={-20 - 300 * p} width={64} frame={f} />
      <Character who="biru" x={520} bottom={1600} height={1450} rim="rgba(90,160,255,0.8)" />
      <Character who="merah" x={1400} bottom={1500} height={1350} rim="rgba(255,110,60,0.8)" />
      <Particles frame={f} color={colors.fireHot} seed="ember5" count={50} rise={3} />
      <Vignette strength={0.7} />
    </AbsoluteFill>
  );
};

/** 06 — Dash: both launch toward the centre with afterimages and streaks. */
export const Shot06: React.FC = () => {
  const f = useCurrentFrame();
  const t = interpolate(f, [0, 45], [0, 1], { ...clamp, easing: Easing.in(Easing.quad) });
  const bx = interpolate(t, [0, 1], [-100, 760]);
  const mx = interpolate(t, [0, 1], [2050, 1180]);
  return (
    <AbsoluteFill style={{ background: "#3a4a6e" }}>
      <AbsoluteFill style={{ filter: "blur(10px)", opacity: 0.6 }}>
        <Sky />
        <City camX={-f * 30} />
      </AbsoluteFill>
      <DashStreaks frame={f} />
      {[3, 2, 1].map((k) => (
        <React.Fragment key={k}>
          <Character who="biru" x={bx - k * 90} bottom={1180} height={1000} rotate={12} opacity={0.18 * (4 - k)} />
          <Character who="merah" x={mx + k * 90} bottom={1180} height={980} rotate={-10} opacity={0.18 * (4 - k)} />
        </React.Fragment>
      ))}
      <Character who="biru" x={bx} bottom={1180} height={1000} rotate={12} />
      <Character who="merah" x={mx} bottom={1180} height={980} rotate={-10} />
    </AbsoluteFill>
  );
};

const ClashLayout: React.FC = () => (
  <>
    <Sky />
    <City camX={-200} blur={4} />
    <Character who="biru" x={760} bottom={1250} height={1150} rotate={14} />
    <Character who="merah" x={1180} bottom={1250} height={1120} rotate={-12} />
  </>
);

/** 07 — First clash: 3 impact frames, then colour with sparks and shake. */
export const Shot07: React.FC = () => {
  const f = useCurrentFrame();
  if (f < 3) {
    return (
      <ImpactFrame frame={f}>
        <ClashLayout />
      </ImpactFrame>
    );
  }
  return (
    <AbsoluteFill style={{ translate: shake(f, interpolate(f, [3, 30], [40, 0], clamp), "clash") }}>
      <ClashLayout />
      <SpeedLines frame={f} color="rgba(255,255,255,0.55)" inner={320} count={60} />
      <Sparks cx={960} cy={560} t={interpolate(f, [3, 24], [0, 1], clamp)} id="clash" />
    </AbsoluteFill>
  );
};

/** 08 — Exchange: four 30-frame beats; the camera swings each beat. */
export const Shot08: React.FC = () => {
  const f = useCurrentFrame();
  const beat = Math.min(3, Math.floor(f / 30));
  const local = f - beat * 30;
  const swing = interpolate(local, [0, 10], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const waterTurn = beat % 2 === 0;
  const tilt = [-8, 7, -5, 9][beat];
  const camX = [-400, 300, -150, 450][beat];
  return (
    <AbsoluteFill style={{ translate: shake(f, local < 6 ? 26 : 4, "ex") }}>
      <Sky />
      <City camX={camX - local * 12} blur={5} tilt={tilt} />
      {waterTurn ? (
        <>
          <Character who="merah" x={1350} bottom={1300} height={1150} rotate={-6 + local * 0.3} />
          <WaterArc id={`ex-w-${beat}`} cx={820} cy={620} r={420} from={150} to={-40} width={70} progress={swing} frame={f} />
          <Character who="biru" x={700} bottom={1350} height={1250} rotate={-4 + swing * 18} />
        </>
      ) : (
        <>
          <Character who="biru" x={600} bottom={1350} height={1200} rotate={4 - local * 0.3} />
          <FireArc id={`ex-f-${beat}`} cx={1100} cy={600} r={430} from={20} to={230} width={74} progress={swing} frame={f} />
          <Character who="merah" x={1250} bottom={1300} height={1200} rotate={6 - swing * 18} />
        </>
      )}
      <Sparks cx={980} cy={560} t={interpolate(local, [8, 24], [0, 1], clamp)} id={`ex-s-${beat}`} />
    </AbsoluteFill>
  );
};

/** 09 — Separation: both skid back across the roof, dust at their feet. */
export const Shot09: React.FC = () => {
  const f = useCurrentFrame();
  const t = interpolate(f, [0, 30], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  return (
    <AbsoluteFill>
      <Sky />
      <City camX={-250} camY={60} />
      <Character who="biru" x={interpolate(t, [0, 1], [820, 380])} bottom={930} height={620} rotate={-6 * (1 - t)} />
      <Character who="merah" x={interpolate(t, [0, 1], [1100, 1560])} bottom={980} height={640} rotate={6 * (1 - t)} />
      <Rooftop y={900} />
      <Steam frame={f} y={900} seed="dust9" color="#c9ab8a" opacity={interpolate(f, [0, 20, 60], [0, 0.9, 0.5], clamp)} spread={0.45} />
      <Vignette />
    </AbsoluteFill>
  );
};

/** Technique name set as stacked upright columns, one word per column, read right to left. */
const TechniqueName: React.FC<{ text: string; sub: string; side: "left" | "right"; color: string; f: number }> = ({ text, sub, side, color, f }) => (
  <div
    style={{
      position: "absolute",
      top: 80,
      [side]: 110,
      writingMode: "vertical-rl",
      textOrientation: "upright",
      fontFamily: "Shippori",
      color: "#fff",
      textShadow: `0 0 18px ${color}, 0 0 4px #000`,
      opacity: interpolate(f, [2, 8], [0, 1], clamp),
      translate: `0 ${interpolate(f, [2, 12], [40, 0], clamp)}px`,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      lineHeight: 1,
    }}
  >
    {text.split(" ").map((word) => (
      <span key={word} style={{ fontSize: 92, letterSpacing: -4 }}>
        {word}
      </span>
    ))}
    <span style={{ fontSize: 40, letterSpacing: -2, opacity: 0.85, marginTop: 40 }}>{sub}</span>
  </div>
);

/** 10 — Technique names: him (0–29), then her (30–59). */
export const Shot10: React.FC = () => {
  const f = useCurrentFrame();
  const his = f < 30;
  const local = his ? f : f - 30;
  return (
    <AbsoluteFill style={{ background: his ? "#06102a" : "#2a0806" }}>
      {his ? (
        <>
          <WaterArc id="name-w" cx={900} cy={560} r={470} from={110} to={110 + interpolate(local, [0, 20], [0, 300], clamp)} width={70} frame={f} />
          <Character who="biru" x={900} bottom={1900} height={1800} rim="rgba(90,160,255,0.9)" />
          <TechniqueName text="ARUS BIRU" sub="bentuk pamungkas" side="right" color={colors.water} f={local} />
        </>
      ) : (
        <>
          <FireArc id="name-f" cx={1100} cy={560} r={480} from={70} to={70 - interpolate(local, [0, 20], [0, 300], clamp)} width={74} frame={f} />
          <Character who="merah" x={1150} bottom={1650} height={1600} rim="rgba(255,110,60,0.9)" />
          <TechniqueName text="TARIAN KAIN MERAH" sub="bentuk pamungkas" side="left" color={colors.fire} f={local} />
        </>
      )}
      <Vignette strength={0.8} />
    </AbsoluteFill>
  );
};

/** 11 — Ultimate techniques collide: great wave from his side (left), fire storm from hers (right). */
export const Shot11: React.FC = () => {
  const f = useCurrentFrame();
  const t = interpolate(f, [0, 95], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  return (
    <AbsoluteFill style={{ translate: shake(f, f > 80 ? 30 : 6, "ult"), scale: interpolate(f, [0, 120], [1, 1.12]) }}>
      <Sky dim={0.35} />
      <City camX={-180} />
      <FireStorm cx={interpolate(t, [0, 1], [2120, 1220])} cy={560} scale={interpolate(t, [0, 1], [0.7, 1.05])} frame={f} />
      <AbsoluteFill style={{ scale: "-1 1" }}>
        <GreatWave tipX={interpolate(t, [0, 1], [1700, 880])} crestY={300} frame={f} />
      </AbsoluteFill>
      <Character who="biru" x={interpolate(t, [0, 1], [380, 700])} bottom={960} height={430} rim="rgba(90,160,255,0.9)" />
      <Character who="merah" x={interpolate(t, [0, 1], [1540, 1240])} bottom={1010} height={460} rim="rgba(255,110,60,0.9)" />
      <Rooftop y={930} />
      <Particles frame={f} color={colors.fireHot} seed="ember11" count={60} rise={4} />
    </AbsoluteFill>
  );
};

/** 12 — White-out and shockwave. */
export const Shot12: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#fbfaf6", translate: shake(f, interpolate(f, [0, 30], [50, 0], clamp), "wo") }}>
      <Shockwave t={interpolate(f, [0, 30], [0, 1], clamp)} />
      <SpeedLines frame={f} color="rgba(0,0,0,0.12)" inner={120} count={50} />
    </AbsoluteFill>
  );
};

/** 13 — Steam clears: both still standing at opposite ends. */
export const Shot13: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill>
      <Sky />
      <City camX={-120} camY={30} />
      <Character who="biru" x={470} bottom={940} height={560} />
      <Character who="merah" x={1480} bottom={980} height={600} />
      <Rooftop y={920} />
      <Steam frame={f} y={760} seed="steam13" opacity={interpolate(f, [0, 90], [0.95, 0.35], clamp)} spread={0.9} />
      <Particles frame={f} color={colors.fireHot} seed="ember13" count={40} rise={1.5} />
      <Vignette />
    </AbsoluteFill>
  );
};

/** 14 — End card. */
export const Shot14: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#0b070d", alignItems: "center", justifyContent: "center" }}>
      <AbsoluteFill style={{ opacity: 0.22, filter: "grayscale(0.6)" }}>
        <Character who="biru" x={520} bottom={1180} height={1150} />
        <Character who="merah" x={1420} bottom={1180} height={1100} />
      </AbsoluteFill>
      <Particles frame={f} color={colors.fireHot} seed="ember14" count={50} rise={1.5} />
      <div
        style={{
          fontFamily: "Shippori",
          color: "#f2d48a",
          fontSize: 190,
          letterSpacing: 40,
          textShadow: "0 0 30px rgba(255,170,60,0.5)",
          opacity: interpolate(f, [10, 30], [0, 1], clamp),
          scale: interpolate(f, [10, 40], [1.08, 1], clamp),
        }}
      >
        IMBANG
      </div>
      <div
        style={{
          fontFamily: "Shippori",
          color: "#ddd",
          fontSize: 46,
          letterSpacing: 14,
          marginTop: 10,
          opacity: interpolate(f, [35, 55], [0, 1], clamp),
        }}
      >
        — bersambung —
      </div>
    </AbsoluteFill>
  );
};
