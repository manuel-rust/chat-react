import { useEffect } from "react"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  message: string
}

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
}: ModalProps) {

  // 🔒 ESC + bloquear scroll
  useEffect(() => {
    if (!isOpen) return

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // ❌ no renderiza si está cerrado
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative z-10
          bg-white rounded-2xl shadow-xl p-6
          w-[90%] max-w-sm text-center
          transform transition-all duration-300
          animate-[fadeIn_0.3s_ease-out] animate-[scaleIn_0.3s_ease-out]
        "
      >
        <h2 className="text-xl font-bold mb-2">
          {title || "🚧 Página en construcción"}
        </h2>

        <p className="text-gray-600 mb-4">
          {message}
        </p>

        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}