"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Server, Layout, Globe, Workflow } from "lucide-react"

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
    icon: Globe,
    title: "Custom Web Systems",
    description: "Bespoke web applications and platforms tailored to your specific business requirements and scale.",
    details: ["Web Applications", "E-commerce Platforms", "Content Systems", "Admin Dashboards"],
  },
  {
    icon: Workflow,
    title: "Systems Integration",
    description: "Seamless connectivity between platforms, services, and data sources for unified operations.",
    details: ["API Integration", "Data Synchronization", "Legacy Migration", "Third-party Services"],
  },
]

export function CapabilitiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="capabilities" ref={ref} className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary"
          >
            What We Build
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Capabilities
          </motion.h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card"
              >
                {/* Glow effect */}
                <div 
                  className={`absolute -inset-px rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
                />
                
                <div className="relative z-10">
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
