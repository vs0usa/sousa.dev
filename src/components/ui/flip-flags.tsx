"use client"

import { FR, PT } from "country-flag-icons/react/3x2"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/utils/cn"

export const FlipFlags = () => {
  const flags = [<FR key="french-flag" />, <PT key="portuguese-flag" />]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flags.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute -m-[3px]">
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`current-flag-${index}`}
            className={cn(
              "select-none absolute inset-0 h-7 sm:h-9 w-[42px] sm:w-[54px]",
            )}
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            {flags[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  )
}
