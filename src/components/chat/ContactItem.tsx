import type { Contact } from "../../types/chat"

type ContactItemProps = {
  contact: Contact
  isActive: boolean
  onClick: () => void
}

export default function ContactItem({
  contact,
  isActive,
  onClick
}: ContactItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center gap-3 p-4 cursor-pointer transition
        ${isActive ? "bg-blue-50" : "hover:bg-gray-100"}
      `}
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
        {contact.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{contact.name}</p>
        <p className="text-sm text-gray-500 truncate">
          {contact.lastMessage}
        </p>
      </div>
    </div>
  )
}