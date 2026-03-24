import { useEffect, useState } from "react"

type Message = {
  text: string
  side: 'left' | 'right'
}

export default function ChatMockup() {

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const demoMessages: Message[] = [
      { text: "Hola 👋 ¿Cómo estás?", side: "left" },
      { text: "Todo bien! probando esta app 🚀", side: "right" },
      { text: "Se ve increíble 😍", side: "left" }
    ]

    const timeouts: ReturnType<typeof setTimeout>[] = []

    const playSequence = (index: number) => {
      if (index < demoMessages.length) {
        const id = setTimeout(() => {
          setMessages((prev) => [...prev, demoMessages[index]])
          playSequence(index + 1)
        }, 1200)

        timeouts.push(id)
      } else {
        const id = setTimeout(() => {
          setMessages([])
          playSequence(0)
        }, 2000)

        timeouts.push(id)
      }
    }

    playSequence(0)

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 w-80 h-96 overflow-y-auto space-y-4">

      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.side === 'right' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`
              p-3 rounded-2xl max-w-[70%]
              animate-[fadeIn_0.5s_ease-out]
              ${msg.side === 'right'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
              }
            `}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {/* typing */}
      {messages.length < 3 && (
        <div className="flex justify-start">
          <div className="bg-gray-100 px-4 py-2 rounded-2xl flex space-x-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      )}

    </div>
  )
}