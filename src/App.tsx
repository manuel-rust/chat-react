import Navbar from './components/landing-page/Navbar'
import Hero from './components/landing-page/Hero'
import ChatMockup from './components/landing-page/ChatMockup'
import Features from './components/landing-page/Features'
import CTA from './components/landing-page/CTA'
import Footer from './components/landing-page/Footer'
import ChatLayout from "./components/chat/ChatLayout"
import { useState } from 'react'

type View = "landing" | "chat"

function App() {
  const [view, setView] = useState<View>("landing")
  const [animating, setAnimating] = useState(false)

  const goToChat = () => {
    setAnimating(true)
    setTimeout(() => {
      setView("chat")
      setAnimating(false)
    }, 300)
  }

  const goToLanding = () => {
    setAnimating(true)
    setTimeout(() => {
      setView("landing")
      setAnimating(false)
    }, 300)
  }

  return (
    <div className="relative overflow-hidden h-screen">

      {/* LANDING */}
      <div
        className={`
          absolute inset-0 transition-all duration-300
          ${view === "landing"
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10 pointer-events-none"
          }
          ${animating ? "scale-[0.98]" : ""}
        `}
      >
        <div className="h-full bg-gradient-to-r from-blue-50 via-white to-purple-50 flex flex-col">
          <Navbar onLoginSuccess={goToChat} />
          <Hero>
            <ChatMockup />
          </Hero>
          <Features />
          <CTA />
          <Footer />
        </div>
      </div>

      {/* CHAT */}
      <div
        className={`
          absolute inset-0 transition-all duration-300
          ${view === "chat"
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
          }
        `}
      >
        <ChatLayout onLogout={goToLanding} />
      </div>

    </div>
  )
}

export default App