"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background radial gradients with tech feel */}
      <div className="absolute inset-0">
        {/* Primary glow - electric green */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="absolute -left-1/3 top-1/3 h-[900px] w-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 70%)",
          }}
        />
        
        {/* Secondary glow - cyan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 0.3 }}
          className="absolute -right-1/4 -bottom-1/4 h-[1000px] w-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,217,255,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Animated tech grid lines */}
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" className="text-primary" />
        </motion.svg>

        {/* Pulsing accent orbs */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full blur-3xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,217,255,0.1))",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-8 md:px-16"
      >
        <div className="text-xl font-serif font-bold tracking-wide text-foreground">
          Scalable Forge
        </div>
        <div className="hidden items-center gap-10 md:flex">
          <a href="#capabilities" className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary">
            Capabilities
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#principles" className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary">
            Principles
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#process" className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary">
            Process
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contact" className="group relative text-sm font-medium text-foreground transition-colors hover:text-primary">
            Contact
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12 inline-block"
          >
            <div className="rounded-full border border-primary/40 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                Systems Engineering
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mb-8 font-serif text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            Engineering <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              systems built to scale
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-foreground/80"
          >
            We architect and build robust digital infrastructure designed to grow with your business. Scalable from day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative px-8 h-12 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 h-12 border border-foreground/20 bg-transparent text-foreground font-medium hover:bg-foreground/5 transition-all duration-300 rounded-lg"
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
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/60">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-foreground/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
