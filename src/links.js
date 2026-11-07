// One login for the whole family: the Hub. No OAuth code lives on this site (Hub ruling 10-01).
// TODO(after the Hub registers this site as an OIDC client): switch SIGN_IN to the Hub's hosted sheet.
export const SIGN_IN = 'https://app.windyword.ai/auth?utm_source=windytalk&utm_medium=referral&utm_campaign=ecosystem&door=talk';
// One download gate, owned by the Windy Word site; never a second copy here.
export const DOWNLOAD = 'https://windyword.ai/#download';
