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
    <section id="process" ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-14 text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            How We Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-balance text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Our Process
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-1/2 md:block md:-translate-x-px" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20"}`}>
                  <span className="mb-2 block font-mono text-sm text-primary">
                    {step.number}
                  </span>
                  <h3 className="mb-3 text-2xl font-normal text-foreground">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-muted-foreground md:ml-auto md:max-w-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Center node */}
                <div className="relative z-10 my-4 hidden md:block">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
