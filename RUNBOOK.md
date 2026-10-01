# windytalk.com runbook

**What it is:** the marketing site for Windy Talk, a Vite + React static site. Windy Talk itself is the voice engine
(`sneakyfree/windytalk`, public endpoint `wss://talk.windyword.ai`) and its desktop app. This site explains it, sends
"Sign in with Windy" to the Hub, and links to the ONE download gate on windyword.ai. It holds no OAuth code, no
download copies and no secrets.

## Where it runs
- **Cloudflare Pages** project `windytalk`, account `193b347aedeaafe35de0b5a534b2d9aa`.
- **Custom domains:** `windytalk.com` and `www.windytalk.com` (zone already in the same Cloudflare account).
- **Owner:** the Windy Talk lane (Windy 0). Standing checkout: Windy 0 `~/Desktop/Grant's Folder/windytalk-site`.

## Deploy (manual, by design; PREVIEW FIRST, house rule 2)
Installs are lockfile-only: `npm ci`, never `npm install`. wrangler is a pinned devDependency.
```bash
git pull --ff-only && npm ci && npm run build
git add dist && git commit -m "build: rebuild dist"        # dist/ is tracked
# token: lockbox-get <exact key> <0600 file>; never print it
CLOUDFLARE_API_TOKEN=$(cat "$TOKFILE") CLOUDFLARE_ACCOUNT_ID=193b347aedeaafe35de0b5a534b2d9aa \
  npx --no-install wrangler pages deploy dist --project-name windytalk --branch preview \
  --commit-hash "$(git rev-parse HEAD)" --commit-dirty=false          # 1) preview, smoke it
#   ... then the same with --branch main for production, a BOARD line, and a probe
```
Check: `curl -s https://windytalk.com | grep -o 'assets/index-[^"]*js'` prints the bundle hash in `dist/`.
Rollback: redeploy the previous commit's `dist/` with `--branch main`.

## Honesty rules
- Every privacy line mirrors the running engine (windytalk `docs/RUNBOOK.md`). Change the site when the engine changes.
- "Ready today" lists only what ships. No dates, no prices (Grant decides pricing).
- Sign-in: plain link to the Hub until the Hub registers this site as an OIDC client (then switch `src/links.js`).
