import type { Contact } from "../../types/chat"
import ContactItem from "./ContactItem"

type SidebarProps = {
  contacts: Contact[]
  activeId: number
  onSelect: (id: number) => void
}

export default function Sidebar({ contacts, activeId, onSelect }: SidebarProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <h2 className="p-4 font-bold text-lg">Chats</h2>

      {contacts.map((c) => (
        <ContactItem
          key={c.id}
          contact={c}
          isActive={c.id === activeId}
          onClick={() => onSelect(c.id)}
        />
      ))}
    </div>
  )
}