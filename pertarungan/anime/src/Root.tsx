import React from "react";
import { Composition } from "remotion";
import { Pertarungan } from "./Pertarungan";

export const RemotionRoot: React.FC = () => (
  <Composition id="Pertarungan" component={Pertarungan} durationInFrames={900} fps={30} width={1920} height={1080} />
);
