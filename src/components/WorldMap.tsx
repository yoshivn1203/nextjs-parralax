'use client'

import { useState, useRef } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"

interface Location {
  name: string
  coordinates: [number, number]
  country: string
  description: string
  highlights: string[]
  image: string
}

const locations: Location[] = [
  {
    name: "Bali",
    coordinates: [115.0920, -8.3405],
    country: "Indonesia",
    description: "Tropical paradise with ancient temples and pristine beaches",
    highlights: ["Private villa stays", "Temple ceremonies", "Surfing lessons", "Spa retreats"],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400"
  },
  {
    name: "Santorini",
    coordinates: [25.4615, 36.3932],
    country: "Greece",
    description: "Stunning sunsets and white-washed architecture",
    highlights: ["Yacht tours", "Wine tasting", "Caldera views", "Luxury resorts"],
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400"
  },
  {
    name: "Tokyo",
    coordinates: [139.6503, 35.6762],
    country: "Japan",
    description: "Where tradition meets cutting-edge technology",
    highlights: ["Michelin dining", "Cherry blossoms", "Private guides", "Cultural experiences"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400"
  },
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
    country: "France",
    description: "The city of lights, art, and romance",
    highlights: ["Louvre tours", "Seine cruises", "Gourmet cuisine", "Fashion shows"],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400"
  },
  {
    name: "Dubai",
    coordinates: [55.2708, 25.2048],
    country: "UAE",
    description: "Luxury and adventure in the desert",
    highlights: ["Desert safaris", "Burj Khalifa", "Gold souks", "Beach clubs"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400"
  },
  {
    name: "New York",
    coordinates: [-74.0060, 40.7128],
    country: "USA",
    description: "The city that never sleeps",
    highlights: ["Broadway shows", "Rooftop bars", "Museum tours", "Central Park"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400"
  },
  {
    name: "Machu Picchu",
    coordinates: [-72.5450, -13.1631],
    country: "Peru",
    description: "Ancient Incan citadel in the clouds",
    highlights: ["Sunrise tours", "Inca Trail", "Sacred Valley", "Shamanic ceremonies"],
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400"
  },
  {
    name: "Cape Town",
    coordinates: [18.4241, -33.9249],
    country: "South Africa",
    description: "Where mountains meet the ocean",
    highlights: ["Table Mountain", "Wine estates", "Safari trips", "Penguin colonies"],
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400"
  }
]

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0, showAbove: false })
  const mapRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full h-full" ref={mapRef}>
      <div className="w-full h-full overflow-hidden rounded-2xl">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 135,
          center: [0, 0]
        }}
        width={800}
        height={380}
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#e5e7eb"
                stroke="#d1d5db"
                strokeWidth={0.5}
                className="dark:fill-gray-700 dark:stroke-gray-600"
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#d1d5db" },
                  pressed: { outline: "none" }
                }}
              />
            ))
          }
        </Geographies>
        {locations.map((location) => (
          <Marker
            key={location.name}
            coordinates={location.coordinates}
            onClick={(e: any) => {
              if (mapRef.current) {
                const mapRect = mapRef.current.getBoundingClientRect()
                const markerRect = e.target.getBoundingClientRect()

                // Calculate position relative to map container
                const relativeX = markerRect.left - mapRect.left + markerRect.width / 2
                const relativeY = markerRect.top - mapRect.top

                // Check if popover would go off the bottom (assuming popover height ~400px)
                const popoverHeight = 400
                const shouldShowAbove = relativeY > mapRect.height - popoverHeight

                setPopoverPosition({
                  x: relativeX,
                  y: relativeY,
                  showAbove: shouldShowAbove
                })
                setSelectedLocation(location)
              }
            }}
            onMouseEnter={() => setHoveredLocation(location.name)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <motion.g
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              <circle
                r={8}
                fill="#FB923C"
                className="transition-all duration-200"
                opacity={hoveredLocation === location.name ? 1 : 0.8}
              />
              <circle
                r={4}
                fill="white"
              />
              {hoveredLocation === location.name && (
                <motion.circle
                  r={12}
                  fill="none"
                  stroke="#FB923C"
                  strokeWidth={2}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                />
              )}
            </motion.g>
            {hoveredLocation === location.name && (
              <text
                textAnchor="middle"
                y={-15}
                className="text-xs font-semibold fill-gray-700 dark:fill-gray-300"
              >
                {location.name}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>
      </div>

      <AnimatePresence>
        {selectedLocation && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLocation(null)}
            />
            <motion.div
              className="absolute bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 w-80"
              style={{
                left: `${popoverPosition.x}px`,
                top: `${popoverPosition.y}px`,
                transform: popoverPosition.showAbove
                  ? 'translate(-50%, -100%) translateY(-20px)'
                  : 'translate(-50%, 20px)'
              }}
              initial={{ scale: 0.9, opacity: 0, y: popoverPosition.showAbove ? 10 : -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: popoverPosition.showAbove ? 10 : -10 }}
            >
              <div className="relative">
                <img
                  src={selectedLocation.image}
                  alt={selectedLocation.name}
                  className="w-full h-32 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-2 right-2 bg-white/90 dark:bg-gray-900/90 rounded-full p-1.5 hover:bg-white dark:hover:bg-gray-900 transition-colors"
                >
                  <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {selectedLocation.name}
                  </h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400">{selectedLocation.country}</p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {selectedLocation.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {selectedLocation.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-1.5 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="mt-4 w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedLocation(null)}
                >
                  Explore Destination
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}