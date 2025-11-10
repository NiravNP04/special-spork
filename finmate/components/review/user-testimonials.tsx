"use client"

export function UserTestimonials() {
  const testimonials = [
    {
      name: "Jordan Smith",
      role: "High School Student",
      content: "FinMate changed how I think about money. Super engaging!",
      rating: 5,
      avatar: "👨",
    },
    {
      name: "Lisa Rodriguez",
      role: "College Freshman",
      content: "Finally understand investing. Best app ever!",
      rating: 5,
      avatar: "👩",
    },
    {
      name: "Marcus Brown",
      role: "High School Student",
      content: "The community is so helpful and the lessons are fun.",
      rating: 5,
      avatar: "🧑",
    },
    {
      name: "Priya Patel",
      role: "High School Student",
      content: "I saved $1000 using FinMate's budgeting tools!",
      rating: 5,
      avatar: "👩",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6">What Users Say</h3>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 bg-background/40 border border-border/50 rounded-xl hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div className="flex-grow">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-sm">
                      ⭐
                    </span>
                  ))}
              </div>
              <p className="text-sm text-foreground/80 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary/20 to-primary/20 border border-primary/30 rounded-3xl p-8 text-center">
        <div className="text-5xl mb-4">🙏</div>
        <h4 className="font-bold mb-2">Help Us Improve</h4>
        <p className="text-sm text-foreground/70 mb-4">
          Share your feedback to help us create better financial education for teens.
        </p>
      </div>
    </div>
  )
}
