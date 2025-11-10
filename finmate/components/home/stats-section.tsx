export function StatsSection() {
  const stats = [
    { label: "Financial Concepts Taught", value: "100+", icon: "📖" },
    { label: "Average Score Improvement", value: "+87%", icon: "📈" },
    { label: "Community Members", value: "50K+", icon: "👥" },
    { label: "Daily Active Users", value: "8K+", icon: "🎯" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
