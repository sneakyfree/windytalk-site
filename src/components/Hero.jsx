import { SIGN_IN, DOWNLOAD } from '../links';

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="inline-block mb-6 px-4 py-1.5 rounded-full border border-windy-cyan/30 text-windy-cyan text-xs font-semibold tracking-wide">
          EARLY ACCESS · DESKTOP · ENGLISH
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Talk to your agent.<br /><span className="gradient-text">Out loud.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Windy Talk is the voice of the Windy ecosystem. Say what you need, hear your Windy agent answer,
          and cut in whenever you like, the way you would with a person. No typing, no push-to-talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={DOWNLOAD} className="px-8 py-4 bg-gradient-to-r from-windy-teal to-windy-cyan text-windy-dark font-bold rounded-xl text-lg cta-glow hover:scale-105 transition-transform">
            Get the desktop app
          </a>
          <a href={SIGN_IN} className="px-8 py-4 border border-gray-700 text-white font-semibold rounded-xl text-lg hover:border-windy-cyan transition-colors">
            Sign in with Windy
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">macOS and Linux today. Free with a Windy account during early access.</p>
      </div>
    </section>
  );
}
