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
  offset = 50,
  className = "",
  backgroundImage
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${offset}%`])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", `${offset * 0.5}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: backgroundY,
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <motion.div
        style={{ y: textY }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}