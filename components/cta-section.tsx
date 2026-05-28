"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-32 md:py-48">
      {/* Soft divider line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      {/* Background radial gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-muted"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
        >
          Ready to build systems
          <br />
          <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-clip-text text-transparent">
            that scale?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-foreground/70"
        >
          Let's discuss your infrastructure challenges and explore how we can help you build for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group relative px-10 h-12 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="mailto:hello@scalableforge.com">
              <span className="relative z-10 flex items-center">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
