// Build-time pre-render (SEO brief 10-23): scripts/prerender.mjs puts this HTML into
// dist/index.html so a crawler gets the real page text without running JavaScript.
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export { faqs } from './components/FAQ'

export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
