'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Left panel */}
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1/2 z-50 bg-gradient-to-br from-orange-500 to-amber-400"
        initial={{ x: 0 }}
        animate={{ x: isExiting ? '-100%' : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: isExiting ? 0.2 : 0 }}
      />

      {/* Right panel */}
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-1/2 z-50 bg-gradient-to-br from-orange-500 to-amber-400"
        initial={{ x: 0 }}
        animate={{ x: isExiting ? '100%' : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: isExiting ? 0.2 : 0 }}
        onAnimationComplete={() => {
          if (isExiting) {
            onComplete()
          }
        }}
      />

      {/* Content */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.8 : 1
        }}
        transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: 1,
          }}
        >
          <Logo className="w-24 h-24" />
        </motion.div>

        <motion.h1
          className="text-5xl font-cormorant font-light text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          LifeTender
        </motion.h1>

        <motion.p
          className="text-lg font-inter font-light tracking-wider text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Your Personal Travel Curator
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
    </>
  )
}