"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const principles = [
  {
    number: "01",
    title: "Scalable Foundations",
    description: "Every system begins with architecture designed to handle exponential growth.",
  },
  {
    number: "02",
    title: "Modular Architecture",
    description: "Components that can be independently developed, deployed, and scaled.",
  },
  {
    number: "03",
    title: "Performance First",
    description: "Optimization is built in, not bolted on. Speed is a feature.",
  },
  {
    number: "04",
    title: "Maintainability",
    description: "Code written for humans first, machines second. Clear, documented, testable.",
  },
  {
    number: "05",
    title: "Extensibility",
    description: "Systems that anticipate change and adapt to evolving requirements.",
  },
  {
    number: "06",
    title: "Integration Thinking",
    description: "Every component designed with connectivity and interoperability in mind.",
  },
]

export function PrinciplesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="principles" ref={ref} className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-card/30" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-14 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            Our Approach
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-balance text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl"
          >
            How We Think About Systems
          </motion.h2>
        </div>

        {/* Principles List */}
        <div className="grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/50 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
              className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card"
            >
              {/* Number */}
              <span className="mb-4 block font-mono text-2xl font-light text-primary/40 transition-colors group-hover:text-primary">
                {principle.number}
              </span>
              
              {/* Content */}
              <h3 className="mb-3 text-lg font-medium text-foreground">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
