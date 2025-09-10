"use client"

import { Coffee, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Coffee className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Coffee Share</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
