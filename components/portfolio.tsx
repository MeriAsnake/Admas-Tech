"use client"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-interface.jpg",
  },
  {
    title: "Fitness Mobile App",
    category: "Mobile App Development",
    image: "/fitness-tracking-app.jpg",
  },
  {
    title: "Brand Identity Design",
    category: "Graphics Design",
    image: "/brand.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "/dashboard.jpg",
  },
  {
    title: "Product Promo Video",
    category: "Video Editing",
    image: "/professional-product-video-thumbnail.jpg",
  },
  
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcase of our best work across all service categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition duration-300"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
