"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/her.jpg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Where{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              creativity
            </span>{" "}
            meets{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              technology
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
            Transform your vision into reality with our comprehensive digital
            solutions. From stunning UI/UX design to powerful web and mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            <button className="px-6 py-4 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition">
              View Our Work
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}
