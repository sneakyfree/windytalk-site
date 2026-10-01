import { useState } from 'react';
import { SIGN_IN, DOWNLOAD } from '../links';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'How it works', href: '#how' },
    { name: 'Features', href: '#features' },
    { name: 'Privacy', href: '#privacy' },
    { name: "What's ready", href: '#status' },
    { name: 'FAQ', href: '#faq' },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-windy-dark/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🗣️</span>
          <span className="text-xl font-bold text-white">Windy<span className="text-windy-cyan">Talk</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-windy-cyan transition-colors">{l.name}</a>
          ))}
          <a href={SIGN_IN} className="text-sm text-gray-400 hover:text-windy-cyan transition-colors">Sign in with Windy</a>
          <a href={DOWNLOAD} className="px-5 py-2.5 bg-gradient-to-r from-windy-teal to-windy-cyan text-windy-dark font-bold rounded-lg text-sm hover:scale-105 transition-transform">
            Get the desktop app
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)} className="text-gray-400 hover:text-windy-cyan">{l.name}</a>
          ))}
          <a href={SIGN_IN} className="text-gray-400 hover:text-windy-cyan">Sign in with Windy</a>
          <a href={DOWNLOAD} className="text-windy-cyan font-semibold">Get the desktop app</a>
        </div>
      )}
    </nav>
  );
}
