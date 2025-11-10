"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Welcome to FinMate
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
            Become a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Money Master
            </span>
          </h1>

          <p className="text-xl text-foreground/70 leading-relaxed text-balance">
            Learn real-life finance through fun, interactive modules. Join thousands of teens mastering budgeting,
            investing, and financial goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Learning
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-primary">50K+</div>
              <p className="text-foreground/60 text-sm">Active Learners</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">95%</div>
              <p className="text-foreground/60 text-sm">Completion Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <p className="text-foreground/60 text-sm">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 border border-primary/20">
            <div className="space-y-4">
              <div className="h-48 bg-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">💰</div>
                  <p className="text-foreground/60">Start Your Financial Journey</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-sm font-medium">20+ Modules</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-2xl mb-2">🎮</div>
                  <p className="text-sm font-medium">Gamified Learning</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-2xl mb-2">👥</div>
                  <p className="text-sm font-medium">Community Chat</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors">
                  <div className="text-2xl mb-2">🏆</div>
                  <p className="text-sm font-medium">Earn Badges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
