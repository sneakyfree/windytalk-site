# TODO: windytalk-site / windytalk.com (owner: Windy Talk lane, Veron)

Read this first at every session start and turnover; add every promise the same turn (Grant, 11-04).

## WE ARE LIVE (Grant standing rule, BOARD 2026-11-06T23:29:54Z)
"Wire everything up like we're live." Build, wire and ship for REAL, at full speed. What does NOT change: don't break what's live (every change has a way back), say only what's true, consent is a human act, secrets stay in the lockbox, Boss's GO by sha for production.
Grant's gates before the big marketing push: (1) Grant + a few friends use everything and say "really good, really solid"; (2) back-end record-keeping works across the repos (CFO ledger, Legal e-sign/archive/recall, Support email, smooth sign-up); (3) THEN an attorney reviews the legal documents; (4) THEN every token on every platform is rolled (Vault leads); (5) THEN the marketing money.
TODO.md is our culture (Grant, BOARD 2026-11-06T23:57:40Z): a promise, date or GO that names Talk goes in here the SAME DAY.

## Now (this week)
Format: item. Done means: ... — OWNER · ADDED · DUE · STATUS · SOURCE

- **Keep windytalk.com true to the running engine.** Done means: every page line matches windytalk docs/RUNBOOK.md; Hub's SEO audit stays PASS 6/6. — Talk · 11-04 · standing · ONGOING · Grant 11-04
- **NAME ALIGNMENT** windytalk-site -> windy-talk-site: give Git the COUNT of old-name references (Pages Git link, CI, uptime checks, docs). Renames from MON 11-16 in Git's batches. Done means: count on the BOARD. — Talk (Git leads) · 11-07 · FRI 11-13 18:00Z · OPEN · Boss BOARD 2026-11-06T22:31:24Z
- **Windstorm Labs address**: the site shows NO postal address (Footer: "© 2026 Windstorm Labs LLC." only). If one is ever added, it reads windy-contracts registry/company.json. Done means: stays true. — Talk · 11-07 · standing · TRUE today · Grant via Boss BOARD 2026-11-06T23:29:54Z
- **UTM at sign-up**: replace ?ref=windytalk (a fake referral code) with utm_source=windytalk.com&utm_medium=referral&utm_campaign=ecosystem on the Sign in link (door=talk kept). PR feat/utm-sign-in, dark; merges AFTER #7's deploy so #7 ships alone; live = its own GO. Done means: live + sign-up sees the utm_*. — Talk · 11-07 · FRI 11-13 (PR) · PR open · Boss BOARD 2026-11-07T15:48:21Z (7)(c)
- **GAP ANALYSIS** (with windytalk, one page ~/gap-analysis-2026-11-07/windy-talk.html). Done means: page up + BOARD line. — Talk · 11-07 · SAT 11-07 17:50Z · OPEN · Boss BOARD 2026-11-07T15:37:16Z

### Real state (measured 2026-11-04)
- **windytalk.com is LIVE** (Cloudflare Pages project `windytalk`), main `216f32be` (10-23).
- **SEO**: pre-rendered page (683 crawler-visible words), robots.txt, sitemap.xml, llms.txt, canonical, og/twitter tags, SoftwareApplication + FAQPage JSON-LD, real 404. Hub's audit: PASS 6/6 on the apex and on www.
- **What it says is live**: sign-in is a plain link to Windy Accounts; downloads go to windyword.ai/#download. The site holds no OAuth code, no download copies and no secrets.
- **Truth check**: every line should match the running engine (see windytalk `docs/RUNBOOK.md`). The FAQ says "English today"; the engine actually detects the language, so the page under-claims (safe; change it only with Hub).

## Waiting on
- Nothing.

## Later
- Update "Ready today" and the FAQ when anything ships (Talk as a voice mode in Windy Word, an agent in Chat calls). No dates, no prices.

## Branches
- None besides `main`. (`fix/fork-pr-runner-guard` @ ad564037 was merged as PR #1; tagged `archive/fix-fork-pr-runner-guard-20261104` and deleted 11-04.)

## Done (last 30 days)
- 11-07 Legal's Lehi list K8 withdrawn (false positive in the minified bundle); no address in any commit.
- 11-04 TODO.md landed (#4).
- 11-04 merged branch `fix/fork-pr-runner-guard` archived (tag) and deleted.
- 10-23 #2 + #3 live: SEO pre-render + criteria 1-8, FAQ answers in the HTML.
