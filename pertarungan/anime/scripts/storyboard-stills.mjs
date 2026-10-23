// Renders the storyboard keyframes of the "Pertarungan" composition as PNG stills.
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import path from "node:path";

const frames = process.argv.slice(2).map(Number);
const outDir = path.resolve("out/storyboard");
const browserExecutable = process.env.REMOTION_BROWSER || null;

const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
const composition = await selectComposition({ serveUrl, id: "Pertarungan", browserExecutable });
for (const frame of frames) {
  const output = path.join(outDir, `frame-${String(frame).padStart(3, "0")}.png`);
  await renderStill({ serveUrl, composition, frame, output, browserExecutable });
  console.log(output);
}
