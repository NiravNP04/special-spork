"use client"

import { useState, useEffect } from "react"

export function ProgressOverview() {
  const [completedModules, setCompletedModules] = useState(0)
  const totalModules = 20

  useEffect(() => {
    // Simulate progress animation
    const interval = setInterval(() => {
      setCompletedModules((prev) => {
        if (prev < 13) return prev + 1
        return prev
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const progressPercent = (completedModules / totalModules) * 100

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-8">Your Progress</h2>

      <div className="space-y-8">
        {/* Overall Progress Circle */}
        <div className="flex items-center gap-8">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${(progressPercent / 100) * 314} 314`}
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-secondary)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-primary">{Math.round(progressPercent)}%</div>
              <div className="text-xs text-foreground/60">Complete</div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-foreground/60 mb-1">Modules Completed</div>
              <div className="text-3xl font-bold">
                <span className="text-primary">{completedModules}</span>
                <span className="text-foreground/40 text-2xl">/{totalModules}</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-foreground/60 mb-1">Streak</div>
              <div className="text-2xl font-bold text-secondary">7 Days 🔥</div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Money Basics</span>
              <span className="text-sm text-primary font-bold">100%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full w-full"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Budgeting 101</span>
              <span className="text-sm text-secondary font-bold">65%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Investing Basics</span>
              <span className="text-sm text-foreground/60 font-bold">0%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
