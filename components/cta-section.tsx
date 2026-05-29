"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-32 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-primary"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Ready to build systems
          <br />
          that scale?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {"Let's discuss your infrastructure challenges and explore how we can help you build for the future."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="group bg-primary px-10 text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="mailto:hello@scalableforge.com">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
