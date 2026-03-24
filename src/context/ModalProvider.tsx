import { useState } from "react"
import type { ReactNode } from "react"
import { ModalContext } from "./ModalContext"
import Modal from "../components/common/Modal"

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [section, setSection] = useState("")

  const openModal = (name: string) => {
    setSection(name)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={`🚧 ${section}`}
        message="Estamos trabajando en esta sección. Muy pronto estará disponible 🚀"
      />
    </ModalContext.Provider>
  )
}