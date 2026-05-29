"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BOOKING_URL } from "@/components/site-header"

const EMAIL = "hello@scalableforge.com"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden border-t border-border/40 py-24 md:py-32">
      <div className="absolute inset-0 bg-card/40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary"
        >
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-balance text-3xl font-normal leading-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Ready to build systems
          <br />
          that scale?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {"Let's discuss your infrastructure challenges and how we can help you build for the long term."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="group px-10" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-10" asChild>
            <a href={`mailto:${EMAIL}`}>Email Us</a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
        </motion.p>
      </div>
    </section>
  )
}
