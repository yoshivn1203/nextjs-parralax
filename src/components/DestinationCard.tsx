'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface DestinationCardProps {
  title: string
  description: string
  image: string
  price: string
  duration: string
}

export default function DestinationCard({
  title,
  description,
  image,
  price,
  duration
}: DestinationCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-2xl cursor-pointer bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          initial={{ y: 20, opacity: 0.8 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
                {duration}
              </span>
              <span className="text-lg font-semibold">{price}</span>
            </div>

            <motion.button
              className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
              whileHover={{ x: 5 }}
            >
              Explore →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}