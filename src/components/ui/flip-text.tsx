"use client";

import { AnimatePresence, type HTMLMotionProps, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type Props = HTMLMotionProps<"p"> & { items: string[] };

export const FlipText = ({ items, className, ...props }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={`current-item-${index}`}
        className={cn("select-none", className)}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -8, opacity: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        {...props}
      >
        {items[index]}
      </motion.p>
    </AnimatePresence>
  );
};
