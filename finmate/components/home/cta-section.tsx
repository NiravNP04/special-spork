import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Master Money?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of teens who are building their financial future with FinMate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 group">
              Get Started Now
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
