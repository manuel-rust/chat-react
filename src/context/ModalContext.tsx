import { createContext } from "react"

export type ModalContextType = {
  openModal: (section: string) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)