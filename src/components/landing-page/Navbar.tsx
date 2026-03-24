import { useState } from "react"
import { useModal } from "../../hooks/useModal"
import {
  LayoutDashboard,
  CreditCard,
  Headphones,
  LogIn,
  UserPlus
} from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openModal } = useModal()

  // ✅ Manejo correcto para mobile (espera animación)
  const handleMobileClick = (section: string) => {
    setIsOpen(false)

    setTimeout(() => {
      openModal(section)
    }, 300)
  }

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          sticky top-0 z-50 backdrop-blur border-b border-gray-200
          ${isOpen ? "bg-white" : "bg-white/70"}
        `}
      >
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Chat<span className="text-blue-600">Flow</span>
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <button
              onClick={() => openModal("Características")}
              className="hover:text-blue-600 transition"
            >
              Características
            </button>

            <button
              onClick={() => openModal("Planes")}
              className="hover:text-blue-600 transition"
            >
              Planes
            </button>

            <button
              onClick={() => openModal("Soporte")}
              className="hover:text-blue-600 transition"
            >
              Soporte
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-gray-600 hover:text-blue-600 transition"
              onClick={() => openModal("Login")}
            >
              Login
            </button>

            <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
              onClick={() => openModal("Sign up")}
            >
              Sign up
            </button>

            {/* Mobile button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* 🚀 MOBILE MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen z-[999] bg-white isolate
          flex flex-col
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >

        {/* Header del menú */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-xl font-bold">
            Chat<span className="text-blue-600">Flow</span>
          </h1>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Opciones */}
        <div className="flex flex-col items-start justify-center flex-1 space-y-6 text-lg font-medium w-full px-6">

          <button
            onClick={() => handleMobileClick("Características")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <LayoutDashboard className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">Características</span>
          </button>

          <button
            onClick={() => handleMobileClick("Planes")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <CreditCard className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">Planes</span>
          </button>

          <button
            onClick={() => handleMobileClick("Soporte")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <Headphones className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="whitespace-nowrap">Soporte</span>
          </button>

          {/* Actions */}
          <div className="pt-6 space-y-4 w-full max-w-xs">

            <button
              onClick={() => handleMobileClick("Login")}
              className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
            >
              <LogIn className="w-5 h-5 text-blue-600 shrink-0" />
              Login
            </button>

            <button
              onClick={() => handleMobileClick("Sign up")}
              className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left">
              <UserPlus className="w-5 h-5 text-blue-600 shrink-0" />
              Sign up
            </button>

          </div>

        </div>
      </div>
    </>
  )
}