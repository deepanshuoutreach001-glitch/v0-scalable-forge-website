"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Preloader() {
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Set a minimum display time for the preloader
    const preloadTimer = setTimeout(() => {
      setIsComplete(true)
    }, 2800)

    return () => clearTimeout(preloadTimer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && !isComplete ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (isComplete) {
              setIsVisible(false)
            }
          }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Background grid effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="preloadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#preloadGrid)" className="text-primary" />
              </svg>
            </div>

            {/* Subtle glow orbs behind text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-64 h-64 bg-primary/30 rounded-full blur-[120px]" />
            </motion.div>
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 text-center"
          >
            {/* Logo/Brand name */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="mb-4"
            >
              <span className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Scalable Forge
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-sm md:text-base font-medium text-muted-foreground mb-8"
            >
              Engineering systems built to scale
            </motion.p>

            {/* Loading bar - expandable animation */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent relative"
            >
              {/* Expanding glow effect */}
              <motion.div
                initial={{ width: 0, x: "-50%" }}
                animate={{ width: 300, x: "-50%" }}
                transition={{
                  duration: 2,
                  delay: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 0.3,
                }}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
              />
            </motion.div>
          </motion.div>

          {/* Expanding curtain/veil effect that reveals content */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={
              isComplete
                ? { scaleY: 1, originY: 0, transition: { duration: 1, ease: "easeInOut" } }
                : {}
            }
            className="fixed inset-0 bg-background pointer-events-none z-40"
          />

          {/* Bottom decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
