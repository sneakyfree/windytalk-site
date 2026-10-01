const steps = [
  { n: '1', title: 'Sign in once', body: 'Use your Windy account, the same one for every Windy product. There is no separate Talk login.' },
  { n: '2', title: 'Just talk', body: 'Windy Talk listens while the app is open. It notices when you stop speaking, so there is no button to hold.' },
  { n: '3', title: 'Hear the answer', body: 'Your agent thinks with Windy Mind and answers in a natural voice, usually starting in under a second.' },
  { n: '4', title: 'Interrupt anytime', body: 'Start talking while it speaks and it stops to listen, like a real conversation.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">How it <span className="gradient-text">works</span></h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="bg-windy-gray/40 p-6 rounded-xl border border-gray-800/40">
              <div className="w-10 h-10 rounded-full bg-windy-cyan/15 text-windy-cyan font-black flex items-center justify-center mb-4">{s.n}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
