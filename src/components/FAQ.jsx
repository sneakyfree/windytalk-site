import { useState } from 'react';

const faqs = [
  { q: 'Do I need a separate account?', a: 'No. Windy Talk uses your Windy account, the same one for every Windy product.' },
  { q: 'Which computers does it run on?', a: 'macOS and Linux (.deb) today. Windows and a Linux AppImage are not available yet.' },
  { q: 'What does it cost?', a: 'It is free with a Windy account during early access. If that ever changes, we will say so here first.' },
  { q: 'Does it record me?', a: 'No audio is ever stored. Only the text of your conversation is kept, and it is deleted after 7 days without use.' },
  { q: 'What languages does it understand?', a: 'English today. More languages are being built and tested before we list them.' },
  { q: 'Can it use my computer for me?', a: 'Not yet. Windy Talk is a voice conversation with your agent today; acting on your screen is a separate product we are building carefully.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="bg-windy-gray/40 rounded-xl border border-gray-800/40">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-5 flex justify-between items-center">
                <span className="font-semibold text-white">{f.q}</span>
                <span className="text-windy-cyan text-xl">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
