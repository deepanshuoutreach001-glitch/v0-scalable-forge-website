"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" className="text-foreground" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20"
      >
        <div className="text-lg font-light tracking-[0.15em] text-foreground">
          SCALABLE FORGE
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Capabilities
          </a>
          <a href="#principles" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Principles
          </a>
          <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Process
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Systems Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-balance text-4xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Engineering systems
            <br />
            <span className="text-primary">built to scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We architect and build robust digital infrastructure designed
            to grow with your business. Scalable from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-transparent px-8 text-foreground hover:bg-secondary"
              asChild
            >
              <a href="#capabilities">
                Explore Capabilities
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
