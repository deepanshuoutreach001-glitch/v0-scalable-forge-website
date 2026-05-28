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
    <section id="capabilities" ref={ref} className="relative py-32 md:py-48">
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
            What We Build
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
          >
            Capabilities
          </motion.h2>
        </div>

        {/* Capabilities Grid */}
        <div className="grid gap-8 md:grid-cols-2">
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
                className="group relative"
              >
                {/* Top gradient border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Card */}
                <div className="relative overflow-hidden rounded-lg border border-foreground/10 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-foreground/20 hover:bg-card/80">
                  {/* Inner glow effect */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`}
                    style={{
                      background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex rounded-lg border border-foreground/15 bg-foreground/5 p-3 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                      <Icon className="h-6 w-6 text-foreground transition-colors group-hover:text-primary" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="mb-4 text-2xl font-serif font-bold text-foreground transition-colors group-hover:text-primary">
                      {capability.title}
                    </h3>
                    <p className="mb-6 text-base font-medium leading-relaxed text-foreground/70">
                      {capability.description}
                    </p>
                    
                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {capability.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover translate effect */}
                  <div className="absolute inset-0 -translate-y-1 transition-transform duration-500 group-hover:translate-y-0 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
