[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/kanzaa28/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/kanzaa28/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# news-image-20261121 — "The World in One Page"

**Practice-only entry.** `handed_over_places` is "none", so an entry built in
this harness is ranked but cannot take a paid place. A real submission still
needs the user's public GitHub repo (created after 21 Nov 00:00 UTC) +
transcript bundle from recorded sessions + the user's go-ahead.

## What it is

A one-page newspaper front page summing up **Saturday 21 November 2026**,
drawn programmatically with PIL (real text — no AI-image garbling, legible at
~300 px):

- **Lead:** Russian missiles land in Poland — two missiles and a suspected
  drone come down in the south-east during Moscow's biggest attack on
  Ukraine (400 drones, 110 missiles, at least 8 killed). Nobody hurt in
  Poland; jets scramble, Patriots stand ready, no shots fired. PM Tusk calls
  it an intentional provocation; NATO chief Rutte a "grave violation".
- **Markets:** Wall Street slides into correction — S&P 500 −3.7% on Friday,
  Nasdaq over −5%, Nikkei −5.06%; Anthropic slides 11% a day after its debut.
- **Britain & EU:** UK and EU sign landmark deals at the Brussels summit —
  food trade, linked carbon markets, youth mobility scheme.
- **Health:** daraxonrasib pill — tumours stop growing in 90% of patients,
  1 in 12 see cancer vanish.
- **Justice:** LA jury convicts Jonathan Rinderknecht of starting the
  Palisades Fire.
- **Gulf:** Iran war enters its ninth month; Trump says he is not rushing
  decisions and may not decide until 2027; a tanker burns near Hormuz.
- **Also today:** Cyclone Akvan crosses the Odisha coast; Mongolia's
  president quits; Denmark alleges a Russian plot.

Facts checked against Reuters, AP, BBC, The Guardian and One Turn (via
search) on the morning of 21 Nov. The Poland incident itself happened on
Friday 20 Nov overnight, but it is the lead story of the 21 Nov news cycle
(reactions, reinforcement requests and the UN Security Council call all
continued into 21 Nov) — the same convention as the 20 Nov edition, which
led with the 19 Nov Shenzhen summit.

## Measured results

- `entry.png`: 1024×1024 PNG, 136,354 bytes (cap 1 MiB / 1024×1024) — gate
  size/dimension checks pass.
- `main.ts` run twice → byte-identical `entry.png` in both outputs
  (sha256 `3e8494969f794b0f241dc7365a051c2b88702c29d0967744d92bd87b82a29c38`;
  deterministic; no network).
- Kit archive verified: all 11 files in `kit.json` match their sha256
  (bundle `35b3239e…`).
- Official kit check (`node cli/makefun.mjs check`): see NOTES.md — the
  mechanical checks pass; `transcripts_present` fails as expected (no
  recorded sessions exist in this harness — practice-only by design).
- No local scorer exists for this competition — the server grades every entry
  (gate + AI judge heat). Judge is z-ai/glm-5.3-flash, pairwise vs house
  images, 50 paid places sharing $100 (1st $20, 2nd $12, 3rd $6, 4th–10th $2,
  11th–50th $1.20 — see competition.yaml payout curve).

## Files

- `main.ts` — copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
- `entry.png` — the image (drawn by `../work/draw.py`, PIL + DejaVu fonts)
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim

## What's missing for a real submission

Public GitHub repo + commit SHA + transcript bundle (recorded sessions from
a local harness — this harness keeps no session record) + user's go-ahead.
Competition closes **23 Nov 2026 08:00 WITA**.
