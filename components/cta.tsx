"use client"

import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Vision?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          Let's collaborate and create something amazing together. Get in touch with our team today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 group">
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="px-8 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition">
            Send us an Email
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-primary mb-2">Email</p>
            <p className="text-foreground/70">hello@admastech.com</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-2">Phone</p>
            <p className="text-foreground/70">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary mb-2">Location</p>
            <p className="text-foreground/70">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}
