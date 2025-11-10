"use client"

import { Navigation } from "@/components/navigation"
import { ChatHeader } from "@/components/finchat/chat-header"
import { PostsList } from "@/components/finchat/posts-list"
import { CreatePost } from "@/components/finchat/create-post"

export default function FinChat() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20">
        <ChatHeader />
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CreatePost />
              <PostsList />
            </div>
            <div className="space-y-6">
              <TrendingTopics />
              <CommunityStats />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function TrendingTopics() {
  const topics = [
    { name: "Stock Market", posts: 342, icon: "📈" },
    { name: "Budgeting Tips", posts: 287, icon: "💰" },
    { name: "Side Hustles", posts: 198, icon: "💼" },
    { name: "Investing 101", posts: 156, icon: "🎯" },
    { name: "Crypto Talk", posts: 124, icon: "🔐" },
  ]

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-background/40 rounded-lg cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{topic.icon}</span>
              <div>
                <p className="font-medium">{topic.name}</p>
                <p className="text-sm text-foreground/60">{topic.posts} posts</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary">→</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CommunityStats() {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6">
      <h3 className="text-lg font-bold mb-4">Community Stats</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-foreground/60 mb-1">Online Now</p>
          <p className="text-2xl font-bold text-primary">2,847</p>
        </div>
        <div>
          <p className="text-sm text-foreground/60 mb-1">Posts Today</p>
          <p className="text-2xl font-bold text-secondary">564</p>
        </div>
        <div>
          <p className="text-sm text-foreground/60 mb-1">New Members</p>
          <p className="text-2xl font-bold text-primary">1,203</p>
        </div>
      </div>
      <button className="w-full mt-6 py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium text-sm">
        Join Community
      </button>
    </div>
  )
}
