"use client"

export function AchievementsBadges() {
  const badges = [
    { icon: "🌟", label: "Starter", earned: true },
    { icon: "⚡", label: "Week Warrior", earned: true },
    { icon: "🏆", label: "Champion", earned: false },
    { icon: "💡", label: "Master", earned: false },
    { icon: "🎯", label: "Goal Setter", earned: true },
    { icon: "👑", label: "Legend", earned: false },
  ]

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Your Badges</h2>

      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
              badge.earned
                ? "bg-primary/10 border-primary/40 hover:shadow-lg hover:shadow-primary/20"
                : "bg-muted/30 border-border opacity-50"
            }`}
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <p className="text-xs font-semibold text-center">{badge.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-center">
        <p className="text-sm text-foreground/60 mb-2">Next Badge in</p>
        <p className="text-lg font-bold text-secondary">2 more lessons</p>
      </div>
    </div>
  )
}
