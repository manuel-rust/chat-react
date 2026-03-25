import { useState } from "react"
import {
  LayoutDashboard,
  CreditCard,
  Headphones,
  LogIn,
  UserPlus
} from "lucide-react"
import Login from "../Login"
import Register from "../Register"

type ModalType = "login" | "register" | null

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)

  const handleMobileClick = (section: string) => {
    setIsOpen(false)

    setTimeout(() => {
      if (section === "Login") {
        setModal("login")
      } else if (section === "Sign up") {
        setModal("register")
      } else {
        alert(`${section} 🚧 Página en construcción`)
      }
    }, 300)
  }

  return (
    <>
      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 backdrop-blur border-b border-gray-200 ${isOpen ? "bg-white" : "bg-white/70"
          }`}
      >
        <div className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Chat<span className="text-blue-600">Flow</span>
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <button
              onClick={() => alert("Características 🚧 Página en construcción")}
              className="hover:text-blue-600 transition"
            >
              Características
            </button>
            <button
              onClick={() => alert("Planes 🚧 Página en construcción")}
              className="hover:text-blue-600 transition"
            >
              Planes
            </button>
            <button
              onClick={() => alert("Soporte 🚧 Página en construcción")}
              className="hover:text-blue-600 transition"
            >
              Soporte
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              className="hidden md:block text-gray-600 hover:text-blue-600 transition"
              onClick={() => setModal("login")}
            >
              Iniciar sesión
            </button>

            <button
              className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
              onClick={() => setModal("register")}
            >
              Regístrate
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[999] bg-white isolate
          flex flex-col transform transition-all duration-300 ease-in-out
          ${isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Mobile header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="text-xl font-bold">
            Chat<span className="text-blue-600">Flow</span>
          </h1>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Mobile options */}
        <div className="flex flex-col items-start justify-center flex-1 space-y-6 text-lg font-medium w-full px-6">
          <button
            onClick={() => handleMobileClick("Características")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <LayoutDashboard className="w-5 h-5 text-blue-600 shrink-0" />
            Características
          </button>

          <button
            onClick={() => handleMobileClick("Planes")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <CreditCard className="w-5 h-5 text-blue-600 shrink-0" />
            Planes
          </button>

          <button
            onClick={() => handleMobileClick("Soporte")}
            className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
          >
            <Headphones className="w-5 h-5 text-blue-600 shrink-0" />
            Soporte
          </button>

          <div className="pt-6 space-y-4 w-full max-w-xs">
            <button
              onClick={() => handleMobileClick("Login")}
              className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
            >
              <LogIn className="w-5 h-5 text-blue-600 shrink-0" />
              Iniciar sesión
            </button>

            <button
              onClick={() => handleMobileClick("Sign up")}
              className="flex items-center gap-3 w-full max-w-xs p-4 rounded-xl hover:bg-gray-100 transition text-left"
            >
              <UserPlus className="w-5 h-5 text-blue-600 shrink-0" />
              Regístrate
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 MODAL (MISMO DISEÑO, DINÁMICO) */}
      {modal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setModal(null)}
            >
              ✕
            </button>

            {modal === "login" && <Login variant="modal" />}
            {modal === "register" && <Register variant="modal" />}
          </div>
        </div>
      )}
    </>
  )
}