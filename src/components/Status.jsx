// Honest status. Update when something actually ships, never ahead of it.
const ready = [
  'Desktop app for macOS (Apple-notarized) and Linux (.deb)',
  'Voice conversations in English',
  'Sign in with your Windy account',
  'Free with a Windy account during early access',
];
const next = [
  'Windy Talk as a voice mode inside the Windy Word app',
  'More languages',
  'Your agent joining Windy Chat calls',
  'Phone calls with your agent (in design)',
  'The "Hey Windy" wake word',
];

export default function Status() {
  return (
    <section id="status" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-windy-gray/40 p-8 rounded-xl border border-windy-teal/30">
          <h3 className="text-2xl font-black text-white mb-6">Ready today</h3>
          <ul className="space-y-3">{ready.map(r => <li key={r} className="text-gray-300 text-sm">✓ {r}</li>)}</ul>
        </div>
        <div className="bg-windy-gray/40 p-8 rounded-xl border border-gray-800/40">
          <h3 className="text-2xl font-black text-white mb-6">Being built</h3>
          <ul className="space-y-3">{next.map(r => <li key={r} className="text-gray-400 text-sm">○ {r}</li>)}</ul>
          <p className="text-xs text-gray-500 mt-6">No dates promised. We say it is ready when it is.</p>
        </div>
      </div>
    </section>
  );
}
