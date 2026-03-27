import type { Message } from "../../types/chat"

type ChatWindowProps = {
  messages: Message[]
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">

      {/* HEADER */}
      <div className="h-16 px-4 bg-white flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <p className="font-semibold">Ana</p>
          <p className="text-xs text-green-500">En línea</p>
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