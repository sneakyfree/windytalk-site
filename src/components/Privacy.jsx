// Every line here is a fact of the running engine (windytalk RUNBOOK, 2026-10-01). Change it only with the engine.
const facts = [
  { title: 'No audio is stored', body: 'Your voice is turned into text as you speak and the audio is discarded. We never keep recordings.' },
  { title: 'Conversation text expires', body: 'The text of your conversations is kept so you can pick up where you left off, and is deleted after 7 days without use.' },
  { title: 'Deleting your account deletes it', body: 'Closing your Windy account locks Talk at once and erases your conversation text when the deletion completes.' },
  { title: 'Logs hold counts, not words', body: 'Our service logs record numbers like how many turns and how long they took, never what you said.' },
];

export default function Privacy() {
  return (
    <section id="privacy" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">Private <span className="gradient-text">by design</span></h2>
        <p className="text-center text-gray-400 mb-12">Plain answers, not fine print.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {facts.map(f => (
            <div key={f.title} className="bg-windy-gray/40 p-6 rounded-xl border border-gray-800/40">
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          Full details: <a href="https://app.windyword.ai/privacy" className="text-windy-cyan hover:underline">Windy privacy policy</a>.
        </p>
      </div>
    </section>
  );
}
