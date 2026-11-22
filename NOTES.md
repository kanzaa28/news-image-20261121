# Build notes — news-image-20261121

## Why this design

The judge is a vision model with no news feed: it rewards (1) naming the day
with specific, recognisable events of that day, (2) breadth across regions and
fields, (3) readability from the image alone, (4) faithfulness, (5) clean
craft legible at ~300 px. An AI-generated picture risks garbled text, which
fails criterion 3 and 5 outright — so the image is a typographic front page
drawn in code (PIL), where every letter is exact. Same approach as the
news-image-20261117, 20261118, 20261119 and 20261120 packages, which verified
cleanly.

## Facts used (21 Nov 2026, verified via search 21 Nov ~10:45 WITA)

- Poland: two Russian missiles and a suspected jet-powered drone came down
  in south-east Poland on Friday 20 Nov (~06:30 local) — a Kh-101 at Nowy
  Lipowiec, a second missile at Rudnik nad Sanem, a probable drone at
  Mołodycz. Nobody hurt, no infrastructure destroyed. PM Donald Tusk: an
  "intentional provocation"; NATO SecGen Mark Rutte: a "grave violation".
  Polish and allied jets scrambled, Patriot batteries activated, but no
  shots fired (about a 3-minute window, poor weather). The incursion came
  during one of Russia's largest attacks on Ukraine: 400+ drones, 110
  missiles, at least 8 killed, Austrian embassy hit in Kyiv; France called
  for a UN Security Council meeting; Poland seeks extra NATO forces for
  Operation Eastern Sentry: AP (via reflector.com/europesays) + SOFREP +
  nexuseuropa + eutoday.
- Markets: S&P 500 fell 3.7% on Friday 20 Nov, Nasdaq over 5%, Dow also into
  correction; Nikkei −5.06%, gold −4%, Bitcoin down ~24% over the month.
  Anthropic fell ~11% in early trading a day after its debut. Investors
  question the huge sums spent on AI and data centres: One Turn digest
  (21 Nov edition) + UPI/BBC/Guardian via One Turn.
- UK–EU: Britain and the EU signed three deals at a Brussels summit — food
  trade, linking carbon markets, youth mobility scheme. PM Andy Burnham;
  both sides called them landmark; Burnham said this was the limit of
  convergence for now: One Turn digest (BBC/MercoPress/RFI).
- Health: daraxonrasib (Rasonque) + chemo, 61 patients with advanced
  pancreatic cancer: tumours stopped growing in 90%, shrank or disappeared
  in 60.7%, undetectable in 8.2% (1 in 12); 76.6% alive at one year.
  Presented Thursday at the EORTC–NCI–AACR Symposium in Barcelona by Dr
  Wungki Park (Memorial Sloan Kettering): "closest to cure". Cancer
  Research UK: "biggest breakthrough in decades": The Guardian (via
  thenews.pk/people.com/EMJ/ghana guardian).
- Justice: a Los Angeles jury convicted Jonathan Rinderknecht of starting
  the Palisades Fire: One Turn digest (21 Nov edition).
- Gulf: Iran war nears its ninth month; Trump told an Israeli outlet he is
  not rushing decisions on Iran and may not decide until 2027; Iran's
  foreign minister said Tehran still wants a diplomatic end; a tanker caught
  fire near the Strait of Hormuz; the US sanctioned four Iranian oil
  trustees: One Turn digest + AppiSToS (US adds four Iranians to OFAC list,
  published 20 Nov).
- Also today: Cyclone Akvan crossed the Odisha coast near Gopalpur
  (landfall 20 Nov, 80,000 evacuated): jagranjosh digest. Mongolia's
  parliament approved President Khurelsukh Ukhnaa's resignation (first
  sitting president to quit early; election within 4 months): Reuters
  20 Nov. Denmark alleges Russian intelligence plotted to kill an American
  Ukrainian in Denmark: aggregator headlines 21 Nov.
- Deliberately NOT used: the Shenzhen summit (19 Nov, already the 20 Nov
  edition's lead); the ICJ Myanmar genocide ruling (20 Nov, already the
  20 Nov edition's panel); the Pete Rose pardon and Senate Iran vote
  (19 Nov); the India–NZ Wellington Test and Sensex (sport/business colour,
  not world news for this page).

## Layout

- Same skeleton as the 20 Nov package: masthead, lead with three chips
  (Poland flag, NATO compass, Kh-101 trail) drawn in code, two-column row 2,
  three-panel row 3, ALSO TODAY strip, footer. Four rounds of trimming were
  needed (first draft overflowed to y=1107): shorter lead, one-line row-2
  headlines, one-line row-3 headlines, shorter strip. Content ends at y=976,
  footer starts at y=980. Verified by viewing the rendered PNG (no overlaps,
  all text legible, flags/chips recognisable). One fix found on viewing: the
  footer title and sources overlapped — shortened both.

## Verification

- Kit: 11/11 files match kit.json sha256 (bundle 35b3239e…).
- entry.png: 1024×1024, 136,354 bytes.
- main.ts run twice → byte-identical outputs (see README for sha256).
- Official kit check (`node cli/makefun.mjs check --kit
  kit/news-image-20261121-kit --repo package --worktree`), run 21 Nov
  10:53 WITA: 4 passed / 1 failed (transcripts_present, expected — no
  recorded sessions in this harness) / 14 skipped / 5 at-submission
  (repo_public, repo_owner, repo_created_after_open, commit_in_repo,
  duplicate_snapshot). Same profile as the 17, 18, 19 and 20 Nov editions.
  Passed: competition_open (open 2026-11-21T00:00Z, deadline
  2026-11-23T00:00Z), snapshot (4 files), license_osi (MIT), entrypoint
  (main.ts, node22).
