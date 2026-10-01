import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Privacy from './components/Privacy'
import Status from './components/Status'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-windy-dark">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Privacy />
      <Status />
      <FAQ />
      <Footer />
    </div>
  )
}
