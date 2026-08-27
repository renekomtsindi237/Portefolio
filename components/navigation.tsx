"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Parcours", href: "/formation" },
  { name: "Projets", href: "/projets" },
  { name: "Compétences", href: "/competences" },
  { name: "CV", href: "/cv" },
  { name: "Contact", href: "/contact" },
]

function isActivePath(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  if (href === "/formation") return pathname === "/formation" || pathname.startsWith("/certifications")
  return pathname === href
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-xl professional-shadow dark:bg-card dark:border-primary/45 dark:shadow-[0_10px_32px_rgba(0,0,0,0.65)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 group heading-professional">
            <span className="text-warm-gradient">
              RK
            </span>
            <div className="w-0 group-hover:w-full h-0.5 bg-warm-gradient transition-all duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group text-professional ${
                  isActivePath(item.href, pathname) ? "text-primary" : "text-foreground/80 dark:text-foreground"
                }`}
              >
                {item.name}
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gradient transition-all duration-300 group-hover:w-full ${
                  isActivePath(item.href, pathname) ? "w-full" : ""
                }`}></div>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background dark:bg-card dark:border-primary/30 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-base font-medium transition-all duration-300 hover:text-primary hover:bg-primary/10 rounded-lg ${
                  isActivePath(item.href, pathname) ? "text-primary bg-primary/10" : "text-foreground/80 dark:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
