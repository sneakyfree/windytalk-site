// Puts the server-rendered page into dist/index.html (one public route: "/").
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const { render, faqs } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const html = fs.readFileSync(htmlPath, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('prerender: <!--app-html--> placeholder missing')
if (!html.includes('<!--faq-jsonld-->')) throw new Error('prerender: <!--faq-jsonld--> placeholder missing')
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}
const ld = `<script type="application/ld+json">${JSON.stringify(faqLd).replace(/</g, '\\u003c')}</script>`
fs.writeFileSync(htmlPath, html.replace('<!--app-html-->', render()).replace('<!--faq-jsonld-->', ld))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerender: dist/index.html')
