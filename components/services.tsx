"use client"

import { Palette, Code, Smartphone, Brush, Film } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. We create designs that are both aesthetically pleasing and highly functional.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive websites built with the latest technologies. Fast, secure, and optimized for performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
  },
  {
    icon: Brush,
    title: "Graphics Design",
    description: "Eye-catching graphics and visual content that tell your brand story and capture attention.",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video production and editing services that bring your content to life.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
