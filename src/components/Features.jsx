const features = [
  { icon: '🎙️', title: 'Hands-free conversation', body: 'A real back-and-forth by voice: it hears you, thinks, and speaks, then listens again.' },
  { icon: '✋', title: 'Natural interruptions', body: 'Talk over it to change your mind mid-answer. It stops speaking and takes the new question.' },
  { icon: '🧠', title: 'Powered by Windy Mind', body: 'The thinking runs through Windy Mind, the one door to AI in the Windy family, on your own account.' },
  { icon: '🔐', title: 'One Windy login', body: 'The same sign-in as Windy Word, Chat, Mail and the rest. Agents with an Eternitas credential are honored too.' },
  { icon: '💬', title: 'Honest when it is stuck', body: 'If the brain is slow or unreachable it tells you so out loud, instead of leaving you in silence.' },
  { icon: '🧩', title: 'Built to be shared', body: 'The same voice engine is being prepared for Windy Chat calls and, later, phone calls with your agent.' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">What it <span className="gradient-text">does</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-windy-gray/40 p-6 rounded-xl border border-gray-800/40">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
