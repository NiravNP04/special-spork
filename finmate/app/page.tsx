"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/home/hero-section"
import { ModulesPreview } from "@/components/home/modules-preview"
import { StatsSection } from "@/components/home/stats-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ModulesPreview />
      <StatsSection />
      <CTASection />
    </main>
  )
}
