"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/finchat", label: "FinChat" },
    { href: "/review", label: "Review" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              FM
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">FinMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">Login</button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-secondary/50 transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 px-4 mt-4">
                <button className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors w-full text-left">
                  Login
                </button>
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-medium w-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
