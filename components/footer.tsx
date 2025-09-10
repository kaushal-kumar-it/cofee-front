import { Coffee, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Coffee className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Coffee Share</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The warmest way to share your files. Secure, fast, and beautifully simple.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Uses WebRTC technology to share files directly without servers for maximum privacy and speed.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Creator</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Built with ❤️ by</p>
              <p className="font-semibold text-foreground text-lg">Kaushal Kumar</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Coffee Share. All rights reserved. Made with ☕ and ❤️ by Kaushal Kumar
          </p>
        </div>
      </div>
    </footer>
  )
}
