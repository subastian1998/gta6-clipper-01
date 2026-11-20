// gta6-clipper-01 entry for @dayak1998.
// This program hands the entry video's address to the gate: it reads VIDEO.json
// from the repository root, makes sure the address is a real YouTube video
// address (a Short, a watch page, or a youtu.be link), and writes the whole
// VIDEO.json object to /output/VIDEO.json, where the gate reads it. The video
// itself is the entry — the program never touches the video, the network, or
// anything outside the repository. Node 22, standard library only.
//
// Try it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A YouTube video address: youtube.com/shorts/<id>, youtube.com/watch?v=<id>,
// or youtu.be/<id>. Anything else is not a video the gate can read.
const YOUTUBE_VIDEO = /^https:\/\/(www\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/;

const raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
const video = JSON.parse(raw) as { url?: unknown };

if (typeof video.url !== 'string' || !YOUTUBE_VIDEO.test(video.url)) {
  console.error('VIDEO.json does not name a YouTube video address.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// Copy the whole VIDEO.json object, not just its url field, so any extra
// fields the entry carries survive into /output unchanged.
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), JSON.stringify(video) + '\n');
console.log(`Handed in ${video.url}`);
