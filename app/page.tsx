"use client"

import { useState } from "react"
import { IntroAnimation } from "@/components/intro-animation"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { BuiltForScaleSection } from "@/components/built-for-scale-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ProcessSection } from "@/components/process-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <main className="relative min-h-screen bg-background">
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <div
        className={
          showIntro ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }
      >
        <SiteHeader />
        <HeroSection />
        <BuiltForScaleSection />
        <CapabilitiesSection />
        <PrinciplesSection />
        <ProcessSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
