"use client"

import type React from "react"

import { useState } from "react"
import { Send, Check } from "lucide-react"

export function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    category: "general",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate submission
    setTimeout(() => {
      console.log("Review submitted:", formData)
      setIsLoading(false)
      setSubmitted(true)

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          rating: 5,
          category: "general",
          message: "",
        })
      }, 3000)
    }, 800)
  }

  if (submitted) {
    return (
      <div className="bg-card border-2 border-primary rounded-3xl p-12 text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-6">
          <Check size={40} className="text-primary animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Thank You!</h2>
        <p className="text-foreground/60 mb-4">
          Your feedback has been submitted successfully. We'll review it and use your insights to improve FinMate.
        </p>
        <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          We appreciate your support!
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Alex Chen"
              className="w-full px-4 py-3 bg-background/40 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="alex@example.com"
              className="w-full px-4 py-3 bg-background/40 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold mb-2">Feedback Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/40 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer"
          >
            <option value="general">General Feedback</option>
            <option value="bug">Report a Bug</option>
            <option value="feature">Feature Request</option>
            <option value="content">Content Improvement</option>
            <option value="community">Community Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-semibold mb-3">How would you rate FinMate?</label>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                className={`text-3xl transition-transform hover:scale-110 ${
                  star <= formData.rating ? "scale-110" : "opacity-50"
                }`}
              >
                {star <= formData.rating ? "⭐" : "☆"}
              </button>
            ))}
          </div>
          <p className="text-sm text-foreground/60 mt-2">
            {formData.rating === 1 && "We're sorry to hear that. Help us improve!"}
            {formData.rating === 2 && "Thanks for the feedback. We'll do better!"}
            {formData.rating === 3 && "Thanks for rating us average. What can we improve?"}
            {formData.rating === 4 && "Great! We're glad you're enjoying FinMate."}
            {formData.rating === 5 && "Amazing! We're thrilled you love FinMate!"}
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold mb-2">Your Feedback</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us what you think. What's working well? What could we improve? Any bugs or feature requests?"
            className="w-full px-4 py-3 bg-background/40 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            rows={6}
          />
          <p className="text-xs text-foreground/50 mt-2">{formData.message.length}/500 characters</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !formData.message.trim()}
          className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Submit Feedback</span>
              <Send size={20} />
            </>
          )}
        </button>

        <p className="text-xs text-foreground/50 text-center">
          Your feedback is valuable to us and helps shape the future of FinMate.
        </p>
      </form>
    </div>
  )
}
