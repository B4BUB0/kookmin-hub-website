"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/community", label: "Community" },
    { href: "/food", label: "Food Guide" },
    { href: "/guides", label: "Guides" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-lg text-foreground">Kookmin Int'l</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
