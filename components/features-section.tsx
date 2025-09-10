import { Card } from "@/components/ui/card"
import { Shield, Clock, Globe, Smartphone, Link, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Your files are encrypted end-to-end. We can't see them, and neither can anyone else.",
    },
    {
      icon: Clock,
      title: "Auto-Expiring Links",
      description: "Set custom expiration times for your shared files. Perfect for sensitive documents.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Lightning-fast downloads from anywhere in the world with our global network.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Share files seamlessly from any device. Our mobile experience is second to none.",
    },
    {
      icon: Link,
      title: "Custom Links",
      description: "Create memorable, branded links for your shared files. Perfect for professional use.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track downloads, views, and engagement with detailed analytics for your shared files.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-4xl">Everything you need to share files</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Coffee Share combines simplicity with powerful features to give you the best file sharing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
