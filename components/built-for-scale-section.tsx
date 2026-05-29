"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "Scalability",
    description: "Systems designed to handle 10x growth without rearchitecting.",
  },
  {
    title: "Maintainability",
    description: "Clean, documented code that your team can evolve confidently.",
  },
  {
    title: "Reliability",
    description: "Battle-tested patterns that perform under pressure.",
  },
  {
    title: "Performance",
    description: "Optimized from the ground up for speed and efficiency.",
  },
  {
    title: "Integration Ready",
    description: "APIs and interfaces built for seamless connectivity.",
  },
  {
    title: "Extensibility",
    description: "Modular architecture that adapts to new requirements.",
  },
]

export function BuiltForScaleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Built for Scale
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Most systems break as companies grow. We build infrastructure designed 
            to scale with your business from day one—robust, maintainable, and 
            future-proof.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative overflow-hidden border border-border/50 bg-background/50 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card"
            >
              {/* Number */}
              <span className="mb-4 block font-mono text-xs text-muted-foreground">
                0{index + 1}
              </span>
              
              {/* Content */}
              <h3 className="mb-3 text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
