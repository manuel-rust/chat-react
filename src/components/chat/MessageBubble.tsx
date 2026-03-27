import type { Message } from "../../types/chat"

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMe = message.sender === "me"

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`
          px-4 py-2 rounded-2xl max-w-xs text-sm
          shadow-sm transition-all duration-200
          ${isMe
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-white text-gray-800 border rounded-bl-none"
          }
        `}
      >
        {message.text}
      </div>
    </div>
  )
}
