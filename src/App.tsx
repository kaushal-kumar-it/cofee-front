import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import UploadSection from "@/components/upload-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="coffee-share-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <UploadSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
