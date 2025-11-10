"use client"

export function InterestTopics() {
  const topics = [
    { name: "Budgeting", score: 95, color: "from-primary to-primary" },
    { name: "Saving", score: 88, color: "from-secondary to-primary" },
    { name: "Investing", score: 72, color: "from-primary to-secondary" },
    { name: "Credit", score: 65, color: "from-secondary to-primary" },
    { name: "Taxes", score: 58, color: "from-primary to-primary" },
  ]

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Your Strengths</h2>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{topic.name}</span>
              <span className="text-sm font-bold text-primary">{topic.score}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div
                className={`bg-gradient-to-r ${topic.color} h-2.5 rounded-full transition-all duration-500`}
                style={{ width: `${topic.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-3 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
        View Detailed Report
      </button>
    </div>
  )
}
