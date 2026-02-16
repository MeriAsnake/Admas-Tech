"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl">
          
          <h1 className="text-5xl sm:text-4xl lg:text-4xl font-bold mb-6">
            Where{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              creativity
            </span>{" "}
            meets{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/60 mb-8 max-w-xl">
            Transform your vision into reality with our comprehensive digital
            solutions. From stunning UI/UX design to powerful web and mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-5 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight size={15} className="group-hover:translate-x-1 transition" />
            </button>

            <button className="px-5 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition">
              View Our Work
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
