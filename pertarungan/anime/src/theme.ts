import { staticFile } from "remotion";

export const W = 1920;
export const H = 1080;

export const colors = {
  ink: "#120d14",
  skyTop: "#1d1a3d",
  skyMid: "#6b3a6e",
  skyLow: "#f08a4b",
  horizon: "#ffc27a",
  cityFar: "#5a3f6e",
  cityMid: "#3c2a52",
  cityNear: "#24182f",
  stone: "#8a6d55",
  stoneDark: "#4e3a2c",
  fireDark: "#9e1b12",
  fire: "#ff5a1f",
  fireHot: "#ffd35a",
  waterDeep: "#173e8f",
  water: "#2f7de0",
  waterLight: "#9cd2ff",
  foam: "#f4fbff",
};

// Cutout sizes in px and the face centre, measured on the cutout PNGs.
export const chars = {
  merah: {
    src: staticFile("chars/merah.png"),
    w: 818,
    h: 1193,
    face: { x: 385, y: 240, size: 200 },
  },
  biru: {
    src: staticFile("chars/biru.png"),
    w: 595,
    h: 1136,
    face: { x: 355, y: 150, size: 150 },
  },
} as const;

export type Who = keyof typeof chars;
