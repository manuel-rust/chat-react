import { useState } from "react"
import type { Contact, Message } from "../../types/chat"
import Sidebar from "./Sidebar"
import ChatWindow from "./ChatWindow"

type ChatLayoutProps = {
  onLogout: () => void
}

const contacts: Contact[] = [
  { id: 1, name: "Juan", lastMessage: "Hola 👋" },
  { id: 2, name: "Ana", lastMessage: "¿Cómo vas?" },
]

const conversations: Record<number, Message[]> = {
  1: [
    { id: 1, text: "Hola!", sender: "them" },
    { id: 2, text: "Todo bien 😄", sender: "me" },
  ],
  2: [
    { id: 1, text: "¿Listo el proyecto?", sender: "them" },
  ],
}

export default function ChatLayout({ onLogout }: ChatLayoutProps) {
  const [activeContactId, setActiveContactId] = useState<number>(1)

  return (
    <div className="h-screen flex bg-gray-100">

      {/* Sidebar + header */}
      <div className="w-80 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.05)] flex flex-col">

        {/* 🔥 Header con logout */}
        <div className="h-16 px-4 bg-white flex justify-between items-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Chat<span className="text-blue-600">Flow</span>
          </h1>

          <button
            onClick={onLogout}
            className="text-sm text-red-500 hover:underline"
          >
            Cerrar sesión
          </button>
        </div>

        {/* Lista de contactos */}
        <Sidebar
          contacts={contacts}
          activeId={activeContactId}
          onSelect={setActiveContactId}
        />
      </div>

      {/* Chat */}
      <ChatWindow
        messages={conversations[activeContactId] || []}
      />
    </div>
  )
}