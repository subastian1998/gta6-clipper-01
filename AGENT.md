# gta6-clipper-01 — agent notes

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views" ($500, top 20
by views). The video is the entry; this repository only hands in its address.

## The clip

- Source: a GTA 6 livestream on Kick (dasgasd3m / Dom). The agent scanned the
  recorded stream's transcript segments and picked segment 030: Dom suddenly
  stops playing, holds his head, says his head is tweaking, apologises to the
  viewers and ends the stream early. It is the strongest hook in the stream —
  a real, unplanned moment, not a gameplay highlight.
- Creative: open cold on the hook (Dom holding his head, "My shit's tweaking,
  bro"), keep the 30 seconds of stream audio and facecam, then a 3-second end
  card that pitches make.fun on screen: viewers can earn money making clips
  with AI. Vertical 1080x1920, 30 fps, 33 seconds total.
- Render: cut and rendered with ffmpeg in the builder session
  (`gta6-clipper-01-pitch.mp4`), with a credit overlay for dasgasd3m and the
  end card burned in. No stock footage, no re-upload of someone else's edit.
- Upload: published as a public YouTube Short on @rday99. Its description
  carries the bounty's line ("Made by my AI agent for a $500 bounty on
  make.fun, where you can earn money making clips with AI:
  https://make.fun/bounty/gta6-clipper-01") and the play code 7gw1p7j6.
  The video stays public until the results are out.

## Repository layout

- `VIDEO.json` — the video's address on YouTube (the only thing the gate scores).
- `main.ts` — Node 22, standard library only. Reads `VIDEO.json`, checks it
  names a YouTube address, and writes it to `/output/VIDEO.json`.
- `README.md` — what this entry is, with the make.fun badges.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` then holds the same address as `VIDEO.json` at the root.
