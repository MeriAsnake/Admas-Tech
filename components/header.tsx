"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Horizon Tech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-foreground/80 hover:text-foreground transition">
            Services
          </Link>
          <Link href="#portfolio" className="text-foreground/80 hover:text-foreground transition">
            Portfolio
          </Link>
          <Link href="#contact" className="text-foreground/80 hover:text-foreground transition">
            Contact
          </Link>
          <button className="px-5 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#services" className="text-foreground/80 hover:text-foreground transition">
                Services
              </Link>
              <Link href="#portfolio" className="text-foreground/80 hover:text-foreground transition">
                Portfolio
              </Link>
              <Link href="#contact" className="text-foreground/80 hover:text-foreground transition">
                Contact
              </Link>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
