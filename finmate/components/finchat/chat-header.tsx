"use client"

import { Search } from "lucide-react"

export function ChatHeader() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">FinChat Community</h1>
        <p className="text-foreground/60">Connect with other teens, share ideas, and learn together</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-3 text-foreground/40" size={20} />
        <input
          type="text"
          placeholder="Search discussions, topics, or members..."
          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
        />
      </div>
    </div>
  )
}
