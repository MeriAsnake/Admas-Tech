"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-interface.jpg",
    description:
      "A full-featured online store with payment integration, admin dashboard, and analytics.",
    client: "Retail Startup",
    year: "2024",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App Development",
    image: "/fitness-tracking-app.jpg",
    description:
      "Cross-platform fitness app with tracking, scheduling, and real-time analytics.",
    client: "HealthTech Co.",
    year: "2023",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-interface.jpg",
    description:
      "A full-featured online store with payment integration, admin dashboard, and analytics.",
    client: "Retail Startup",
    year: "2024",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App Development",
    image: "/fitness-tracking-app.jpg",
    description:
      "Cross-platform fitness app with tracking, scheduling, and real-time analytics.",
    client: "HealthTech Co.",
    year: "2023",
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MODAL */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-background rounded-xl max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-primary mb-4">
                {selectedProject.category}
              </p>

              <p className="text-foreground/80 mb-4">
                {selectedProject.description}
              </p>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Client: {selectedProject.client}</span>
                <span>Year: {selectedProject.year}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
