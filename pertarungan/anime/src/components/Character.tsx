import React from "react";
import { Img } from "remotion";
import { chars, Who } from "../theme";

type Props = {
  who: Who;
  /** Screen x of the cutout's horizontal centre. */
  x: number;
  /** Screen y of the cutout's bottom edge. */
  bottom: number;
  /** On-screen height of the full cutout in px. */
  height: number;
  flip?: boolean;
  rotate?: number;
  opacity?: number;
  rim?: string;
  silhouette?: string;
};

export const Character: React.FC<Props> = ({ who, x, bottom, height, flip, rotate = 0, opacity = 1, rim, silhouette }) => {
  const c = chars[who];
  const width = (c.w / c.h) * height;
  const filters = [
    silhouette ? `brightness(0) drop-shadow(0 0 0 ${silhouette})` : "",
    rim ? `drop-shadow(0 0 6px ${rim}) drop-shadow(0 0 22px ${rim})` : "",
  ].join(" ");
  return (
    <Img
      src={c.src}
      style={{
        position: "absolute",
        left: x - width / 2,
        top: bottom - height,
        width,
        height,
        opacity,
        rotate: `${rotate}deg`,
        transformOrigin: "50% 100%",
        scale: flip ? "-1 1" : undefined,
        filter: filters.trim() || undefined,
      }}
    />
  );
};

/** Frames a character's face at the given on-screen face size, centred on (cx, cy). */
export const FaceShot: React.FC<{ who: Who; cx: number; cy: number; faceSize: number; flip?: boolean; rim?: string }> = ({
  who,
  cx,
  cy,
  faceSize,
  flip,
  rim,
}) => {
  const c = chars[who];
  const s = faceSize / c.face.size;
  const height = c.h * s;
  const width = c.w * s;
  const faceX = flip ? c.w - c.face.x : c.face.x;
  return (
    <Character
      who={who}
      x={cx - faceX * s + width / 2}
      bottom={cy - c.face.y * s + height}
      height={height}
      flip={flip}
      rim={rim}
    />
  );
};
