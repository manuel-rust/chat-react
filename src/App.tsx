import Navbar from './components/landing-page/Navbar'
import Hero from './components/landing-page/Hero'
import ChatMockup from './components/landing-page/ChatMockup'
import Features from './components/landing-page/Features'
import CTA from './components/landing-page/CTA'
import Footer from './components/landing-page/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-purple-50 flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero >
        <ChatMockup />
      </Hero>

      {/* SECCIONES */}
      <Features />
      <CTA />
      <Footer />

    </div>
  )
}

export default App