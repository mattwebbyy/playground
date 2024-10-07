import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const ChatPanel: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([
    { user: 'System', text: 'Welcome to the finance chat!' },
  ])
  const [inputText, setInputText] = useState('')

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { user: 'You', text: inputText }])
      setInputText('')
    }
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-2">Chat</h3>
      <ScrollArea className="flex-grow mb-2">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <span className="font-bold">{message.user}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex">
        <Input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-grow"
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage} className="ml-2">
          Send
        </Button>
      </div>
    </div>
  )
}

export default ChatPanel