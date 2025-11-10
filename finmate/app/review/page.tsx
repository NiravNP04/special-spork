"use client"

import { Navigation } from "@/components/navigation"
import { ReviewForm } from "@/components/review/review-form"
import { UserTestimonials } from "@/components/review/user-testimonials"

export default function Review() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Feedback</h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Your feedback helps us improve FinMate and create a better learning experience for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ReviewForm />
          </div>
          <div>
            <UserTestimonials />
          </div>
        </div>
      </div>
    </main>
  )
}
