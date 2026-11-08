# TODO: windytalk-site / windytalk.com (owner: Windy Talk lane, Veron)

Read this first at every session start and turnover; add every promise the same turn (Grant, 11-04).

## WE ARE LIVE (Grant standing rule, BOARD 2026-11-06T23:29:54Z)
"Wire everything up like we're live." Build, wire and ship for REAL, at full speed. What does NOT change: don't break what's live (every change has a way back), say only what's true, consent is a human act, secrets stay in the lockbox, Boss's GO by sha for production.
Grant's gates before the big marketing push: (1) Grant + a few friends use everything and say "really good, really solid"; (2) back-end record-keeping works across the repos (CFO ledger, Legal e-sign/archive/recall, Support email, smooth sign-up); (3) THEN an attorney reviews the legal documents; (4) THEN every token on every platform is rolled (Vault leads); (5) THEN the marketing money.
TODO.md is our culture (Grant, BOARD 2026-11-06T23:57:40Z): a promise, date or GO that names Talk goes in here the SAME DAY.

## Now (this week)
Format (Boss labelled standard 2026-11-07T00:02:22Z): - [ ] <what> · OWNER · ADDED · DUE · STATUS · SOURCE, detail as sub-bullets.

- [ ] Deploy #7 (truth fix: no Talk download exists; first audio "within about two seconds") · OWNER Windy Talk · ADDED 2026-11-07 · DUE 2026-11-08 (SUN 16:25-16:45Z) · STATUS now (Boss STAMPED 8d3d03b9 08:31:17Z; this head = main merged in, TODO only) · SOURCE Boss BOARD 2026-11-07T16:28:33Z (2); Boss 2026-11-08 08:3xZ BATCH
  - DEPLOY CONDITION (Boss 11-08): after #151 is live, the BEFORE shows the public engine's WINDYTALK_PUBLIC_HISTORY_DAYS unset or 7 (names-only readback) and that the history sweep ran; otherwise STOP and post.
  - Pages deploy by hand (RUNBOOK): preview first, then main; rollback = redeploy main a8de4c9e's dist/. Then Hub's SEO audit.
- [ ] UTM at sign-up: Sign in link `?ref=windytalk` -> `utm_source=windytalk&utm_medium=referral&utm_campaign=ecosystem` (door=talk kept) · OWNER Windy Talk · ADDED 2026-11-07 · DUE 2026-11-13 (PR) · STATUS waiting on Hub read of #8; merges only after #7 is live · SOURCE Boss BOARD 2026-11-07T15:48:21Z (7)(c); Marketing Boss (no TLD)
- [ ] NAME ALIGNMENT windytalk-site -> windy-talk-site (counts given to Git 11-07; Pages has no Git link) · OWNER Windy Git (Talk updates its clone origins) · ADDED 2026-11-07 · DUE none (batches from MON 11-16) · STATUS waiting on Windy Git · SOURCE Boss BOARD 2026-11-06T22:31:24Z
- [ ] Keep windytalk.com true to the running engine (every line matches windytalk docs/RUNBOOK.md; Hub's SEO audit PASS 6/6) · OWNER Windy Talk · ADDED 2026-11-04 · DUE none (standing) · STATUS now · SOURCE Grant 11-04
- [ ] Windstorm Labs address: none shown today (Footer: "© 2026 Windstorm Labs LLC." only); if one is ever added, it reads windy-contracts registry/company.json · OWNER Windy Talk · ADDED 2026-11-07 · DUE none (standing) · STATUS now · SOURCE Grant via Boss BOARD 2026-11-06T23:29:54Z

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
- 11-07 gap page published (~/gap-analysis-2026-11-07/windy-talk.html, covers this site). Name counts given to Git. Lehi K8 withdrawn by Legal.
- 11-07 Legal's Lehi list K8 withdrawn (false positive in the minified bundle); no address in any commit.
- 11-04 TODO.md landed (#4).
- 11-04 merged branch `fix/fork-pr-runner-guard` archived (tag) and deleted.
- 10-23 #2 + #3 live: SEO pre-render + criteria 1-8, FAQ answers in the HTML.
