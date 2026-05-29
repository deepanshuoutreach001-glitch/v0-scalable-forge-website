"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BOOKING_URL } from "@/components/site-header"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative border-t border-border/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="mb-4 text-base font-medium tracking-[0.12em] text-foreground">
              SCALABLE FORGE
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
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
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Capabilities
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Backend Systems
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Frontend Engineering
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Integrations & Workflows
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  AI Automations
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
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@scalableforge.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  hello@scalableforge.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row"
        >
          <p className="text-xs text-muted-foreground">
            {currentYear} Scalable Forge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
