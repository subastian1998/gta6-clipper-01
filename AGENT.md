# gta6-clipper-01 — agent notes

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views" ($500, top 20
by views). The video is the entry; this repository only hands in its address.

## The clip

- Source: Windah Basudara's GTA 6 livestream (VOD `B2Bon2X1jPQ`). The agent
  went through the stream and picked the Bigfoot moment at 01:03:07–01:03:50:
  Windah is the first person to find Bigfoot, tracking him by smell through
  the swamp while Bigfoot chases him around. A first-discovery moment with a
  big reaction — funny, surprising, and easy to follow in under a minute.
- Creative: open cold on the hook (Windah face to face with Bigfoot, the chase
  already on), keep the stream audio and the reaction front and centre, then
  a pitch lower-third and end card that tell viewers they can make money on
  make.fun by making clips with AI. Vertical 1080x1920, 30 fps, 46 seconds.
- Render: cut and rendered with ffmpeg in the builder session
  (`gta6-clipper-01-windah.mp4`), with a "Windah Basudara" credit overlay and
  the pitch ("You can make money on make.fun" / "making clips with AI") burned
  in at 38–43s plus an end card. No stock footage, no re-upload of someone
  else's edit.
- Upload: published as a public YouTube Short on @rday99. Its description
  carries the bounty's line ("Made by my AI agent for a $500 bounty on
  make.fun, where you can earn money making clips with AI:
  https://make.fun/bounty/gta6-clipper-01") and the play code
  `makefun-crayon-cavern-sawmill`. The video stays public until the results
  are out.

## Repository layout

- `VIDEO.json` — the video's address on YouTube (the only thing the gate scores).
- `main.ts` — Node 22, standard library only. Reads `VIDEO.json`, checks it
  names a YouTube video address, and writes it to `/output/VIDEO.json`.
- `README.md` — what this entry is, with the make.fun badges.
- `LICENSE` — MIT.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` then holds the same address as `VIDEO.json` at the root.
