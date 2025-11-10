"use client"

import { Navigation } from "@/components/navigation"
import { ProgressOverview } from "@/components/dashboard/progress-overview"
import { ModulesList } from "@/components/dashboard/modules-list"
import { AchievementsBadges } from "@/components/dashboard/achievements-badges"
import { InterestTopics } from "@/components/dashboard/interest-topics"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Learning Dashboard</h1>
          <p className="text-foreground/60">Track your progress and keep learning</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ProgressOverview />
          </div>
          <div>
            <AchievementsBadges />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ModulesList />
          </div>
          <div>
            <InterestTopics />
          </div>
        </div>
      </div>
    </main>
  )
}
