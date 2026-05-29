"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

const WORDMARK = "SCALABLE FORGE"

const FILL_DURATION = 2.6
const SHEEN_DELAY = 2.0
const HOLD_AFTER_FILL_MS = 500
const EXIT_FADE_MS = 250
const ON_COMPLETE_DELAY_MS = 250

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const exitAt = prefersReducedMotion
      ? 400
      : FILL_DURATION * 1000 + HOLD_AFTER_FILL_MS

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(
        onComplete,
        prefersReducedMotion ? 150 : ON_COMPLETE_DELAY_MS,
      )
    }, exitAt)
    return () => clearTimeout(timer)
  }, [onComplete, prefersReducedMotion])

  const wordmarkClass =
    "text-2xl font-medium tracking-[0.12em] whitespace-nowrap md:text-3xl"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : EXIT_FADE_MS / 1000,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <pattern id="introGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#introGrid)" className="text-foreground" />
            </svg>
          </div>

          <div className="relative z-10 px-6">
            {prefersReducedMotion ? (
              <p
                className={wordmarkClass}
                style={{
                  color: "var(--wordmark-fill)",
                  textShadow: "0 0 24px oklch(0.65 0.15 240 / 0.2)",
                }}
              >
                {WORDMARK}
              </p>
            ) : (
              <div className="relative inline-block">
                <span className={`${wordmarkClass} text-foreground/30`} aria-hidden>
                  {WORDMARK}
                </span>

                <motion.div
                  className="absolute top-0 left-0 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: FILL_DURATION,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <span
                    className={`${wordmarkClass} block`}
                    style={{
                      color: "var(--wordmark-fill)",
                      textShadow:
                        "0 0 20px oklch(0.65 0.15 240 / 0.25), 0 0 40px oklch(0.65 0.15 240 / 0.12)",
                    }}
                  >
                    {WORDMARK}
                  </span>

                  <motion.div
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.65, 0] }}
                    transition={{
                      duration: 0.7,
                      delay: SHEEN_DELAY,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ left: "-40%" }}
                      animate={{ left: "120%" }}
                      transition={{
                        duration: 0.75,
                        delay: SHEEN_DELAY,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
