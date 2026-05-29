"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Server, Layout, Workflow, Bot } from "lucide-react"

const capabilities = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable server architecture, APIs, databases, and cloud infrastructure engineered for reliability and performance.",
    details: ["API Design & Development", "Database Architecture", "Cloud Infrastructure", "Microservices"],
  },
  {
    icon: Layout,
    title: "Frontend Engineering",
    description: "Performant, accessible user interfaces built with modern frameworks and engineering best practices.",
    details: ["React & Next.js", "Performance Optimization", "Design Systems", "Accessibility"],
  },
  {
    icon: Workflow,
    title: "Integrations & Workflows",
    description: "Connectivity between platforms, services, and data sources—plus workflow engineering for unified operations.",
    details: ["API Integration", "Data Synchronization", "Legacy Migration", "Workflow Automation"],
  },
  {
    icon: Bot,
    title: "AI Automations",
    description: "Practical automation embedded in your systems—reliable, maintainable, and built to fit your existing stack.",
    details: ["Process Automation", "Internal Tools", "AI-Assisted Workflows", "System Orchestration"],
  },
]

export function CapabilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section id="capabilities" ref={ref} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-14 text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary"
          >
            What We Build
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-balance text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Capabilities
          </motion.h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                className="group relative overflow-hidden rounded-lg border border-border/60 bg-card/50 p-8 transition-colors duration-300 hover:border-border hover:bg-card"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-lg border border-border/50 bg-background/50 p-3 transition-colors duration-300 group-hover:border-primary/30">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-3 text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                    {capability.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                  
                  {/* Details */}
                  <div className="flex flex-wrap gap-2">
                    {capability.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
