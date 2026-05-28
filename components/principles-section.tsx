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
    <section id="principles" ref={ref} className="relative overflow-hidden py-32 md:py-48">
      {/* Soft divider line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted"
          >
            Our Approach
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            How We Think About Systems
          </motion.h2>
        </div>

        {/* Principles 3x2 Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Decorative number background */}
              <div className="absolute -top-6 -left-4 font-serif text-7xl md:text-8xl font-bold text-foreground/8 select-none pointer-events-none">
                {principle.number}
              </div>
              
              {/* Card */}
              <div className="relative z-10 rounded-lg border border-foreground/10 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
                {/* Inner glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(59, 130, 246, 0.05)"
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Number label */}
                  <span className="mb-3 block font-mono text-sm font-medium text-primary/60 transition-colors group-hover:text-primary">
                    {principle.number}
                  </span>
                  
                  <h3 className="mb-4 text-xl font-serif font-bold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-foreground/70">
                    {principle.description}
                  </p>
                </div>
                
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
