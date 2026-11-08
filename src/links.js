// One login for the whole family: the Hub. No OAuth code lives on this site (Hub ruling 10-01).
// TODO(after the Hub registers this site as an OIDC client): switch SIGN_IN to the Hub's hosted sheet.
export const SIGN_IN = 'https://app.windyword.ai/auth?ref=windytalk&door=talk';
// No download link: no Windy Talk build is offered to the public today (11-07 check: windyword.ai's
// download section only links back here). When one ships, the ONE download gate stays on the
// Windy Word site; never a second copy here.
export const STATUS = '#status';
