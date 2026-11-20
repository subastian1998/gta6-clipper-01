// gta6-clipper-01 entry for @dayak1998 — this program hands the video's address to the gate.
//
// The entry is the YouTube Short itself: an AI agent found a GTA 6 livestream moment,
// cut it into a vertical clip that pitches make.fun, and the clip went up public on
// YouTube with the bounty's line and the play code in its description. VIDEO.json at
// the repository root names that video. All this program does is read VIDEO.json,
// check it really names a YouTube address, and write it to /output/VIDEO.json,
// where the gate reads it. Node 22, standard library only, no network.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
const video = JSON.parse(raw) as { url?: unknown };
const YOUTUBE_VIDEO = /^https:\/\/(www\.)?youtube\.com\/(shorts\/|watch\?)/;
if (typeof video.url !== 'string' || !YOUTUBE_VIDEO.test(video.url)) {
  console.error('VIDEO.json does not name a YouTube Shorts or watch address.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// Hand in the whole VIDEO.json object, not just its url, so any extra fields the
// entry carries survive the copy.
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), JSON.stringify(video) + '\n');
console.log(`Handed in ${video.url}`);
