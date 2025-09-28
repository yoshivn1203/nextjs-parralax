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
      <motion.div
        className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800"
        initial={{ opacity: 1 }}
        animate={{
          opacity: isExiting ? 0 : 1,
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          backdropFilter: isExiting ? 'blur(20px)' : 'blur(0px)'
        }}
        onAnimationComplete={() => {
          if (isExiting) {
            onComplete()
          }
        }}
      />

      {/* Content */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        animate={{
          opacity: isExiting ? 0 : 1,
          scale: isExiting ? 0.95 : 1,
          filter: isExiting ? 'blur(10px)' : 'blur(0px)'
        }}
        transition={{ duration: 0.6 }}
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
            transition={{ delay: 0.3 }}
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
                className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
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