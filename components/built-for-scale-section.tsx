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
    <section ref={ref} className="relative overflow-hidden py-32 md:py-48">
      {/* Soft divider line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-32 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6"
          >
            Built for Scale
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-medium leading-relaxed text-foreground/70"
          >
            Most systems break as companies grow. We build infrastructure designed 
            to scale with your business from day one—robust, maintainable, and 
            future-proof.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              {/* Decorative number background */}
              <div className="absolute -top-8 -left-2 font-serif text-8xl md:text-9xl font-bold text-foreground/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
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
                <h3 className="mb-4 text-xl font-serif font-bold text-foreground transition-colors group-hover:text-primary relative z-10">
                  {feature.title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-foreground/70 relative z-10">
                  {feature.description}
                </p>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
