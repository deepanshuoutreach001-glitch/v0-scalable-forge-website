"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Preloader() {
  const [isComplete, setIsComplete] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      setIsComplete(true)
    }, 2000)

    return () => clearTimeout(preloadTimer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && !isComplete ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (isComplete) {
              setIsVisible(false)
            }
          }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          {/* Bold gradient glow behind text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(0,255,136,0.4) 0%, rgba(0,212,255,0.2) 50%, transparent 70%)",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 text-center">
            {/* Bold brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Scalable Forge
              </h1>
            </motion.div>

            {/* Clean tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-sm font-semibold tracking-wider uppercase text-primary mb-10"
            >
              Engineering Systems Built to Scale
            </motion.p>

            {/* Bold loading bar */}
            <div className="w-48 h-1.5 mx-auto bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, delay: 0.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
