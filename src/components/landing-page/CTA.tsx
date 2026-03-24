import { useModal } from "../../hooks/useModal"

export default function CTA() {
  const { openModal } = useModal()
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">
        Empieza hoy mismo 🚀
      </h3>
      <p className="mb-6">
        Únete a miles de usuarios.
      </p>
      <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow"
        onClick={() => openModal("Crear cuenta gratis")}
      >
        Crear cuenta gratis
      </button>
    </section>
  )
}