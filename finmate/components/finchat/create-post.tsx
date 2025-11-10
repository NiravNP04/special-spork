"use client"

import type React from "react"

import { Send, ImagePlus } from "lucide-react"
import { useState } from "react"

export function CreatePost() {
  const [post, setPost] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (post.trim()) {
      console.log("Post submitted:", post)
      setPost("")
    }
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Share your finance question or tip with the community..."
          className="w-full p-4 bg-background/40 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          rows={4}
        />

        <div className="flex items-center justify-between mt-4">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <ImagePlus size={20} />
            <span className="text-sm">Add Image</span>
          </button>

          <button
            type="submit"
            disabled={!post.trim()}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Post</span>
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  )
}
