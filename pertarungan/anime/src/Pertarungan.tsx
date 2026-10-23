import React from "react";
import { loadFont } from "@remotion/fonts";
import { AbsoluteFill, Series, staticFile } from "remotion";
import {
  Shot01,
  Shot02,
  Shot03,
  Shot04,
  Shot05,
  Shot06,
  Shot07,
  Shot08,
  Shot09,
  Shot10,
  Shot11,
  Shot12,
  Shot13,
  Shot14,
} from "./Shots";

loadFont({ family: "Shippori", url: staticFile("fonts/shippori-latin.woff2"), weight: "800" });

export const Pertarungan: React.FC = () => (
  <AbsoluteFill style={{ background: "#000" }}>
    <Series>
      <Series.Sequence durationInFrames={75} name="01 Senja">
        <Shot01 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={45} name="02 Petarung merah">
        <Shot02 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={45} name="03 Pangeran biru">
        <Shot03 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={45} name="04 Close-up mata">
        <Shot04 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={45} name="05 Kuda-kuda">
        <Shot05 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={45} name="06 Melesat">
        <Shot06 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={30} name="07 Benturan">
        <Shot07 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={120} name="08 Adu tebasan">
        <Shot08 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={60} name="09 Berpisah">
        <Shot09 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={60} name="10 Nama jurus">
        <Shot10 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={120} name="11 Jurus pamungkas">
        <Shot11 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={30} name="12 White-out">
        <Shot12 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90} name="13 Debu reda">
        <Shot13 />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90} name="14 Kartu akhir">
        <Shot14 />
      </Series.Sequence>
    </Series>
  </AbsoluteFill>
);
