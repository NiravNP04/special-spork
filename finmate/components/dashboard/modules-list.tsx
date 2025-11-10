"use client"

import { CheckCircle } from "lucide-react"

export function ModulesList() {
  const modules = [
    { id: 1, title: "Money Basics", lessons: 5, completed: 5, icon: "💵" },
    { id: 2, title: "Budgeting 101", lessons: 8, completed: 5, icon: "📊" },
    { id: 3, title: "Investing Basics", lessons: 10, completed: 0, icon: "📈" },
    { id: 4, title: "Credit Score Secrets", lessons: 6, completed: 0, icon: "💳" },
    { id: 5, title: "Taxes Explained", lessons: 7, completed: 3, icon: "🧮" },
    { id: 6, title: "Emergency Fund Guide", lessons: 4, completed: 0, icon: "🛡️" },
  ]

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6">Your Modules</h2>

      <div className="space-y-3">
        {modules.map((module) => {
          const isCompleted = module.completed === module.lessons
          return (
            <div
              key={module.id}
              className="flex items-center gap-4 p-4 bg-background/40 hover:bg-background/60 rounded-xl border border-border/40 transition-all hover:border-primary/30 cursor-pointer group"
            >
              <div className="flex-shrink-0">
                <div className="text-2xl">{module.icon}</div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{module.title}</h3>
                  {isCompleted && <CheckCircle size={18} className="text-primary flex-shrink-0" />}
                </div>
                <p className="text-sm text-foreground/60">
                  {module.completed} of {module.lessons} lessons completed
                </p>
              </div>

              <div className="flex-shrink-0 text-right">
                <div className="text-sm font-bold text-primary">
                  {Math.round((module.completed / module.lessons) * 100)}%
                </div>
              </div>

              <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors flex-shrink-0"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
