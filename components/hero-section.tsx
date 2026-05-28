"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dynamic background with animated gradients and particles */}
      <div className="absolute inset-0">
        {/* Primary glow - electric green with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute -left-1/3 top-1/4 h-[1000px] w-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,136,0.2) 0%, rgba(0,255,136,0.05) 50%, transparent 70%)",
          }}
        />

        {/* Secondary glow - teal with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.5, delay: 0.4, ease: "easeOut" }}
          className="absolute -right-1/4 -bottom-1/4 h-[1200px] w-[1200px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(0,212,255,0.05) 50%, transparent 70%)",
          }}
        />

        {/* Animated grid with moving lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="0%"
            y1="30%"
            x2="100%"
            y2="60%"
            stroke="rgba(0,255,136,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
          />
          <motion.line
            x1="100%"
            y1="40%"
            x2="0%"
            y2="70%"
            stroke="rgba(0,212,255,0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
          />
        </svg>

        {/* Pulsing tech orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute rounded-full blur-3xl pointer-events-none"
            style={{
              width: `${150 + i * 30}px`,
              height: `${150 + i * 30}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 2 === 0
                ? "radial-gradient(circle, rgba(0,255,136,0.3), transparent)"
                : "radial-gradient(circle, rgba(0,212,255,0.3), transparent)",
            }}
          />
        ))}

        {/* Scanning beam effect */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-8 md:px-16"
      >
        <div className="text-2xl font-bold tracking-tight text-foreground">
          Scalable Forge
        </div>
        <div className="hidden items-center gap-10 md:flex">
          {['Capabilities', 'Principles', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-sm font-semibold text-foreground/80 transition-all duration-300 hover:text-primary"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
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
            <div className="rounded-full border-2 border-primary/50 bg-primary/10 px-5 py-2 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Systems Engineering
              </span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mb-8 text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            Engineering <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              systems built to scale
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-foreground/70"
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
              className="group relative px-10 h-14 text-base font-bold shadow-2xl"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10 flex items-center">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 h-14 text-base font-bold"
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/50">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
