import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import EcosystemSection from './components/EcosystemSection'
import AISection from './components/AISection'
import FeaturesSection from './components/FeaturesSection'
import FlowSection from './components/FlowSection'
import PricingSection from './components/PricingSection'
import FoundersSection from './components/FoundersSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
<ProblemSection />
        <EcosystemSection />
        <AISection />
        <FeaturesSection />
        <FlowSection />
        <PricingSection />
        <FoundersSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
