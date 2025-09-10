"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Users } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm text-card-foreground">
            <Zap className="h-4 w-4 text-accent" />
            <span>Now with lightning-fast uploads</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            <Typewriter
              words={["Share files like you share coffee", "Upload files with warmth", "File sharing made cozy"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl text-pretty max-w-2xl mx-auto leading-relaxed">
            The warmest way to share your files. Secure, fast, and beautifully simple. No accounts required, just pure
            file sharing bliss.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Start Sharing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Secure by Default</h3>
              <p className="text-sm text-muted-foreground text-center">End-to-end encryption keeps your files safe</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">Upload and share in seconds, not minutes</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Team Friendly</h3>
              <p className="text-sm text-muted-foreground text-center">Perfect for collaboration and sharing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
