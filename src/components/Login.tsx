import { useState } from "react"

type LoginProps = {
  variant?: "page" | "modal"
}

export default function Login({ variant = "page" }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Por favor completa todos los campos")
      return
    }

    console.log("Login submit:", { email, password })
    alert("Login enviado! Reemplaza esto con tu lógica real.")
  }

  return (
    <div
      className={`
        ${variant === "page" ? "min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-white to-purple-50 px-4" : ""}
      `}
    >
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Iniciar sesión
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          ¿No tienes cuenta?{" "}
          <button className="text-blue-600 font-medium hover:underline">
            Regístrate
          </button>
        </p>
      </div>
    </div>
  )
}