import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ffmpegPath = require("ffmpeg-static");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "client", "public");
const imagesDir = path.join(publicDir, "images");

const videos = [
  ["video_servicios.mp4", "poster-servicios.jpg"],
  ["video-capacidades.mp4", "poster-capacidades.jpg"],
  ["video-calidad.mp4", "poster-calidad.jpg"],
];

if (!ffmpegPath) {
  console.error("ffmpeg-static no disponible");
  process.exit(1);
}

fs.mkdirSync(imagesDir, { recursive: true });

for (const [video, poster] of videos) {
  const input = path.join(publicDir, video);
  const output = path.join(imagesDir, poster);

  if (!fs.existsSync(input)) {
    console.warn(`Omitido (no existe): ${video}`);
    continue;
  }

  execFileSync(ffmpegPath, [
    "-y",
    "-ss",
    "00:00:00.5",
    "-i",
    input,
    "-frames:v",
    "1",
    "-update",
    "1",
    "-q:v",
    "2",
    output,
  ]);

  console.log(`OK ${poster}`);
}
