"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Where{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">creativity</span>{" "}
          meets{" "}
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">technology</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
          Transform your vision into reality with our comprehensive digital solutions. From stunning UI/UX design to
          powerful web and mobile applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition">
            View Our Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 pt-16 border-t border-border">
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-foreground/60 text-sm">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">30+</p>
            <p className="text-foreground/60 text-sm">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">5+</p>
            <p className="text-foreground/60 text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
