"use client"

import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react"
import { useState } from "react"

export function PostsList() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Alex Chen",
      avatar: "👨",
      content:
        "Just started my first investment account! Really excited to learn more about building wealth. Any tips for a beginner?",
      likes: 342,
      comments: 28,
      liked: false,
      timeAgo: "2h ago",
    },
    {
      id: 2,
      author: "Emma Wilson",
      avatar: "👩",
      content:
        "My budgeting app just helped me save $500 this month! The 50/30/20 rule really works. Highly recommend tracking your expenses!",
      likes: 856,
      comments: 64,
      liked: false,
      timeAgo: "4h ago",
    },
    {
      id: 3,
      author: "Marcus Johnson",
      avatar: "🧑",
      content:
        "Question: Is it better to invest in index funds or individual stocks for beginners? I'm so confused about where to start.",
      likes: 189,
      comments: 45,
      liked: false,
      timeAgo: "5h ago",
    },
    {
      id: 4,
      author: "Sarah Lee",
      avatar: "👩",
      content:
        "Just got my first paycheck and I'm using 80% to pay off my credit card debt. Feeling proud of making smarter choices!",
      likes: 567,
      comments: 32,
      liked: false,
      timeAgo: "6h ago",
    },
  ])

  const toggleLike = (id: number) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p)),
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          {/* Post Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-2xl">
                {post.avatar}
              </div>
              <div>
                <h3 className="font-bold text-foreground hover:text-primary cursor-pointer transition-colors">
                  {post.author}
                </h3>
                <p className="text-xs text-foreground/60">{post.timeAgo}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-background/40 rounded-lg transition-colors">
              <MoreVertical size={18} className="text-foreground/40" />
            </button>
          </div>

          {/* Post Content */}
          <p className="text-foreground/90 mb-6 leading-relaxed">{post.content}</p>

          {/* Post Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <button
              onClick={() => toggleLike(post.id)}
              className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
            >
              <Heart size={18} className={`transition-colors ${post.liked ? "fill-primary text-primary" : ""}`} />
              <span className="text-sm">{post.likes}</span>
            </button>

            <button className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
              <MessageCircle size={18} />
              <span className="text-sm">{post.comments}</span>
            </button>

            <button className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors">
              <Share2 size={18} />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
