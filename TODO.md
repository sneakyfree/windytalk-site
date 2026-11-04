# TODO: windytalk-site / windytalk.com (owner: Windy Talk lane, Veron)

Read this first at every session start and turnover; add every promise the same turn (Grant, 11-04).

## Now (this week)
- [Talk, added 11-04] Keep windytalk.com true to the running engine. Done means: every page line matches windytalk docs/RUNBOOK.md and the live SEO audit stays PASS 6/6.
- [Talk, added 11-04] This TODO.md landed. Done means: merged on green before 11-09 12:00Z.

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
- 11-04 merged branch `fix/fork-pr-runner-guard` archived (tag) and deleted.
- 10-23 #2 + #3 live: SEO pre-render + criteria 1-8, FAQ answers in the HTML.
