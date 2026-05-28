"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative border-t border-foreground/10 py-20 md:py-24">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 mb-16 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="mb-6 font-serif text-2xl font-bold italic text-foreground">
              Scalable Forge
            </div>
            <p className="max-w-sm text-base font-medium leading-relaxed text-foreground/70">
              Engineering systems built to scale. Robust digital infrastructure 
              designed for businesses that grow.
            </p>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-foreground/80">
              Capabilities
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#capabilities" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                  Backend Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                  Frontend Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                  Custom Web Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                  Systems Integration
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@scalableforge.com" 
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                >
                  hello@scalableforge.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <p className="text-xs font-medium text-foreground/60">
            © {currentYear} Scalable Forge. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-medium text-foreground/60 transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs font-medium text-foreground/60 transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
