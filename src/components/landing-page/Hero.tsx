import { useModal } from "../../hooks/useModal"

type HeroProps = {
  children: React.ReactNode
}

export default function Hero({ children }: HeroProps) {
  const { openModal } = useModal()
  return (
    <section className="flex flex-col md:flex-row items-center justify-between flex-1 max-w-6xl mx-auto px-6 py-10">

      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          El chat del futuro <br /> empieza aquí
        </h2>

        <p className="text-gray-600 text-lg">
          Comunicación en tiempo real con velocidad, inteligencia y una experiencia moderna.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={() => openModal("Empezar gratis")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Empezar gratis
          </button>

          <button
            onClick={() => openModal("Demo")}
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Ver demo
          </button>
        </div>
      </div>

      {/* Aquí inyectamos el chat */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        {children}
      </div>

    </section>
  )
}