export function ModulesPreview() {
  const modules = [
    {
      id: 1,
      title: "Money Basics",
      description: "Learn the fundamentals of earning, saving, and spending money.",
      progress: 100,
      icon: "💵",
      color: "from-primary/20 to-primary/10",
    },
    {
      id: 2,
      title: "Budgeting 101",
      description: "Master the art of creating and sticking to your personal budget.",
      progress: 65,
      icon: "📊",
      color: "from-secondary/20 to-secondary/10",
    },
    {
      id: 3,
      title: "Investing Basics",
      description: "Understand stocks, bonds, and how to grow your wealth.",
      progress: 0,
      icon: "📈",
      color: "from-primary/20 to-secondary/10",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Learning Path</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Complete these modules to become financially literate and confident with your money.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>{module.icon}</div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-foreground/60 mb-6">{module.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Progress</span>
                  <span className="text-primary font-semibold">{module.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full py-2 px-4 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                {module.progress === 100 ? "Review" : module.progress > 0 ? "Continue" : "Start"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
