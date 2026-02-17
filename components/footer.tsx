"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Horizon Tech
            </h3>
            <p className="text-foreground/60 text-sm">
              Transforming ideas into digital reality with creativity and innovation.
            </p>
            <p className="text-foreground/60 text-sm mb-4">
              Stay connected with us on social media
            </p>

            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition">
                <Dribbble size={20} />
              </Link>
          </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Graphics Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

       {/* Bottom Bar */}
<div className="mt-12">
  <div className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 rounded-full px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
    
    {/* Left: copyright */}
    <p className="mb-2 md:mb-0">
      &copy; 2026 <span className="font-semibold text-gray-700 dark:text-white">Horizon Tech</span>
    </p>

    {/* Right: Powered by */}
    <p>
      Powered by{" "}
      <span className="font-semibold text-primary hover:underline cursor-pointer">
        Horizon Tech
      </span>
    </p>
  </div>
</div>
      </div>
    </footer>
  )
}
