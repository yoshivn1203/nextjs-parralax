'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
  className?: string
  backgroundImage?: string
}

export default function ParallaxSection({
  children,
  offset = 150,
  className = "",
  backgroundImage
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["-50px", `${offset}px`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <>
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              y: backgroundY,
              backgroundImage: `url(${backgroundImage})`,
              backgroundPosition: "center",
              backgroundSize: "140%",
              backgroundRepeat: "no-repeat",
              height: "140%",
              top: "-20%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-[1]" />
        </>
      )}

      <motion.div
        style={{ y: contentY }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}