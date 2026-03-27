import type { Message } from "../../types/chat"
import { LogOut, Bell, Settings, Search } from "lucide-react"

type ChatWindowProps = {
  messages: Message[],
  onLogout: () => void
}

export default function ChatWindow({ messages, onLogout }: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="h-16 px-4 bg-white flex items-center gap-3 shadow-sm">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          A
        </div>

        {/* Info */}
        <div>
          <p className="font-semibold">Ana</p>
          <p className="text-xs text-green-500">En línea</p>
        </div>

        {/* 🔍 Buscador */}
        <div className="ml-auto hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1.5 w-64">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent outline-none text-sm ml-2 w-full"
          />
        </div>

        {/* 🔔 Acciones */}
        <div className="flex items-center gap-2 ml-3">
          {/* Notificaciones */}
          <div className="relative group">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2
                bg-gray-800 text-white text-xs px-3 py-1 rounded-md
                opacity-0 group-hover:opacity-100
                transition pointer-events-none whitespace-nowrap"
            >
              Notificaciones
            </span>
          </div>
          {/* Configuración */}
          <div className="relative group">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2
                bg-gray-800 text-white text-xs px-3 py-1 rounded-md
                opacity-0 group-hover:opacity-100
                transition pointer-events-none whitespace-nowrap"
            >
              Configuración
            </span>
          </div>

          {/* Logout */}
          <div className="relative group">
            <button
              onClick={onLogout}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-red-50 transition"
            >
              <LogOut className="w-5 h-5 text-red-500" />
            </button>
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2
                bg-gray-800 text-white text-xs px-3 py-1 rounded-md
                opacity-0 group-hover:opacity-100
                transition pointer-events-none whitespace-nowrap"
            >
              Cerrar sesión
            </span>
          </div>
        </div>
      </div>


      {/* MENSAJES */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs p-3 rounded-2xl ${msg.sender === "me"
              ? "bg-blue-600 text-white ml-auto"
              : "bg-gray-200 text-gray-800"
              }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="p-4 bg-white flex gap-2">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-1 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-600 text-white px-4 rounded-full">
          ➤
        </button>
      </div>
    </div>
  )
}