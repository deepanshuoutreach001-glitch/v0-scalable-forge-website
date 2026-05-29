"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BOOKING_URL } from "@/components/site-header"

const EMAIL = "hello@scalableforge.com"

const driftSlow = {
  duration: 32,
  repeat: Infinity,
  ease: "easeInOut" as const,
}

const driftMedium = {
  duration: 26,
  repeat: Infinity,
  ease: "easeInOut" as const,
}

const breathe = {
  duration: 20,
  repeat: Infinity,
  ease: "easeInOut" as const,
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const centralBloom = prefersReducedMotion
    ? {}
    : {
        x: [0, 18, -10, 0],
        y: [0, -14, 8, 0],
        scale: [1, 1.04, 1.02, 1],
        opacity: [0.92, 1, 0.96, 0.92],
      }

  const topLight = prefersReducedMotion
    ? {}
    : { opacity: [0.75, 1, 0.8, 0.75] }

  const cornerRight = prefersReducedMotion
    ? {}
    : {
        x: [0, -20, 12, 0],
        y: [0, 12, -8, 0],
        opacity: [0.85, 1, 0.9, 0.85],
      }

  const cornerLeft = prefersReducedMotion
    ? {}
    : {
        x: [0, 16, -10, 0],
        y: [0, -10, 14, 0],
        opacity: [0.8, 0.95, 0.88, 0.8],
      }

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 opacity-[0.045]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" className="text-foreground" />
          </svg>
        </div>

        <div className="absolute inset-0 opacity-[0.025]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGridFine" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.35" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGridFine)" className="text-foreground" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_45%,transparent_38%,oklch(0.08_0.005_250/0.8)_100%)]" />

        <motion.div
          className="absolute left-1/2 top-[42%] h-[min(520px,70vh)] w-[min(900px,95vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.65_0.15_240/0.11)_0%,transparent_65%)]"
          animate={centralBloom}
          transition={driftSlow}
        />

        <motion.div
          className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-primary/[0.07] via-primary/[0.02] to-transparent"
          animate={topLight}
          transition={breathe}
        />

        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="absolute left-[8%] right-[8%] top-[52%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute left-1/2 top-[52%] h-px w-[min(640px,70vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-border/55 to-transparent" />

        <motion.div
          className="absolute -right-[10%] top-[18%] h-[360px] w-[360px] rounded-full bg-primary/[0.07] blur-[100px]"
          animate={cornerRight}
          transition={driftMedium}
        />
        <motion.div
          className="absolute -left-[12%] bottom-[22%] h-[260px] w-[260px] rounded-full bg-primary/[0.05] blur-[90px]"
          animate={cornerLeft}
          transition={{ ...driftMedium, duration: 30 }}
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Systems Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-balance text-4xl font-normal leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Engineering systems
            <br />
            <span className="text-primary">built to scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We architect and build robust digital infrastructure designed
            to grow with your business—scalable from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group px-8" asChild>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8" asChild>
              <a href={`mailto:${EMAIL}`}>Email Us</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
