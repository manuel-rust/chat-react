import { useState } from "react"

type RegisterProps = {
  variant?: "page" | "modal"
}

export default function Register({ variant = "page" }: RegisterProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password) {
      setError("Por favor completa todos los campos")
      return
    }

    console.log("Register:", { name, email, password })
    alert("Registro enviado 🚀")
  }

  return (
    <div
      className={`
        ${variant === "page"
          ? "min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4"
          : ""
        }
      `}
    >
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Crear cuenta
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-gray-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          ¿Ya tienes cuenta?{" "}
          <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Inicia sesión
          </span>
        </p>
      </div>
    </div>
  )
}