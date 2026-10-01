export default function Footer() {
  const brands = [
    { name: 'Windy Word', url: 'https://windyword.ai' },
    { name: 'Windy Chat', url: 'https://windychat.ai' },
    { name: 'Windy Mail', url: 'https://windymail.ai' },
    { name: 'Windy Cloud', url: 'https://windycloud.com' },
    { name: 'Windy Traveler', url: 'https://windytraveler.com' },
    { name: 'Windy Translate', url: 'https://windytranslate.com' },
  ];
  return (
    <footer className="bg-windy-gray/40 border-t border-gray-800/40 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🗣️</span>
            <span className="text-xl font-bold text-white">Windy<span className="text-windy-cyan">Talk</span></span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">The voice of the Windy ecosystem. Early access.</p>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-4">The Windy family</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            {brands.map(b => <li key={b.name}><a href={b.url} className="hover:text-windy-cyan transition-colors">{b.name}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="https://app.windyword.ai/privacy" className="hover:text-windy-cyan transition-colors">Privacy Policy</a></li>
            <li><a href="https://app.windyword.ai/terms" className="hover:text-windy-cyan transition-colors">Terms of Service</a></li>
            <li><a href="https://windyword.ai/support" className="hover:text-windy-cyan transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
      <p className="max-w-7xl mx-auto text-xs text-gray-600 mt-12">© 2026 Windstorm Labs LLC.</p>
    </footer>
  );
}
