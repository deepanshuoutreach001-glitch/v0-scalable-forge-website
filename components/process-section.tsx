"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into your business, goals, constraints, and existing systems to define clear requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design scalable system architecture with modular components, clear interfaces, and growth paths.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "Iterative development with continuous integration, testing, and seamless connectivity.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Optimize, monitor, and evolve the system as your business grows and requirements change.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48">
      {/* Soft divider line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted"
          >
            How We Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            Our Process
          </motion.h2>
        </div>

        {/* Process Timeline - Vertical on desktop */}
        <div className="relative">
          {/* Vertical connection line - hidden on mobile */}
          <div className="absolute left-16 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:block" />
          
          <div className="space-y-16 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative flex flex-col md:flex-row md:items-center md:gap-12"
              >
                {/* Left side: Number and line */}
                <div className="relative mb-6 md:mb-0 md:flex-shrink-0">
                  {/* Step number circle */}
                  <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="font-serif text-lg font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                
                {/* Right side: Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="group"
                  >
                    <h3 className="mb-3 font-serif text-3xl md:text-4xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="max-w-2xl text-lg font-medium leading-relaxed text-foreground/70">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
