'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/LoadingScreen'
import ParallaxSection from '@/components/ParallaxSection'
import AnimatedSection from '@/components/AnimatedSection'
import DestinationCard from '@/components/DestinationCard'
import Logo from '@/components/Logo'
import NavigationBar from '@/components/NavigationBar'
import TestimonialCard from '@/components/TestimonialCard'
import WorldMap from '@/components/WorldMap'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const destinations = [
    {
      title: "Bali Wellness Retreat",
      description: "A curated journey focusing on spiritual renewal, yoga, and traditional healing practices.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      price: "From $3,500",
      duration: "Custom itinerary"
    },
    {
      title: "Greek Island Odyssey",
      description: "Hand-picked boutique hotels and private yacht experiences through the Cyclades.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      price: "From $5,800",
      duration: "Tailored duration"
    },
    {
      title: "Japan Cultural Immersion",
      description: "Exclusive access to tea ceremonies, private temple visits, and master craftsmen.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      price: "From $7,200",
      duration: "Personalized journey"
    },
    {
      title: "Parisian Art & Cuisine",
      description: "Private gallery tours, Michelin-star dining, and cooking classes with renowned chefs.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      price: "From $4,900",
      duration: "Bespoke experience"
    },
    {
      title: "Arabian Luxury Safari",
      description: "Desert glamping, falconry experiences, and private dune adventures.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      price: "From $6,500",
      duration: "Custom designed"
    },
    {
      title: "Peru Sacred Valley",
      description: "Spiritual journey with shamanic ceremonies and exclusive Machu Picchu sunrise.",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
      price: "From $5,200",
      duration: "Your timeline"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "New York, USA",
      testimonial: "LifeTender transformed our anniversary trip into an unforgettable journey. Every detail was perfect, from the private villa in Santorini to the sunset yacht dinner. Their attention to detail is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      trip: "Greek Islands Romantic Getaway"
    },
    {
      name: "James Chen",
      location: "San Francisco, USA",
      testimonial: "As a busy executive, I needed someone who understood luxury travel. LifeTender delivered beyond expectations with exclusive access to experiences I didn't even know existed. Absolutely worth every penny.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      trip: "Japanese Business & Culture Tour"
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      testimonial: "The personalized itinerary for our family safari was incredible. Our consultant thought of everything - from child-friendly lodges to private guides who made the experience magical for our kids.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400",
      trip: "African Family Safari Adventure"
    },
    {
      name: "Michael Rodriguez",
      location: "Miami, USA",
      testimonial: "I've traveled extensively, but LifeTender showed me a side of Peru I never would have discovered alone. The private shamanic ceremonies and exclusive Machu Picchu sunrise were life-changing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      trip: "Peru Spiritual Journey"
    },
    {
      name: "Isabella Laurent",
      location: "Paris, France",
      testimonial: "Their 24/7 support saved our honeymoon when our flight was cancelled. They arranged a private jet within hours and upgraded our entire Bali experience. Absolutely worth every penny.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      trip: "Bali Luxury Honeymoon"
    },
    {
      name: "David Park",
      location: "Seoul, South Korea",
      testimonial: "LifeTender's connections opened doors to Michelin-starred restaurants and private wine tastings that were fully booked. They made our anniversary celebration in France truly extraordinary.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      trip: "French Culinary Experience"
    }
  ]

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NavigationBar />
          <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            <motion.div
              className="absolute left-20 lg:left-48 bottom-1/3 z-10 text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <motion.h1
                className="font-satisfy text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 2 }}
              >
                <span className="text-3xl md:text-4xl lg:text-5xl">Where</span>
                <motion.span
                  className="block text-5xl md:text-6xl lg:text-7xl -mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 2 }}
                >
                  dreams become
                </motion.span>
                <motion.span
                  className="block text-6xl md:text-7xl lg:text-8xl -mt-3 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.6, duration: 1.5 }}
                >
                  {" "}journeys
                </motion.span>
              </motion.h1>

              <motion.p
                className="font-inter text-xs md:text-sm text-white/80 font-light tracking-[0.15em]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
              >
                Personal travel consulting for the extraordinary
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-0 right-0 mx-auto w-fit cursor-pointer group"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 8, 0]
              }}
              transition={{
                opacity: { duration: 1, delay: 4 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 4.5 }
              }}
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/70 text-xs tracking-wider uppercase font-light">Scroll to explore</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 group-hover:bg-white/20 transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <section id="services" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-amber-400/25 to-orange-500/35 dark:hidden" />
            <AnimatedSection animation="slideUp" className="max-w-6xl mx-auto text-center mb-20 relative z-10">
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-800 dark:text-white tracking-tight">
                Why Choose a Personal Travel Consultant?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                As your dedicated travel consultant, I provide personalized attention, insider access, and curated experiences that transform ordinary trips into extraordinary journeys.
              </p>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20 relative z-10">
              <AnimatedSection animation="slideUp" delay={0.1} className="text-center group">
                <div className="relative p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Personalized Planning</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Every detail tailored to your preferences, from accommodations to exclusive experiences.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={0.2} className="text-center group">
                <div className="relative p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Insider Access</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Exclusive connections providing VIP treatment and access to experiences not available to the public.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={0.3} className="text-center group">
                <div className="relative p-8 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">24/7 Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Your dedicated consultant available throughout your journey for any needs or changes.</p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          <ParallaxSection
            className="relative py-32 md:py-48 min-h-[500px] md:min-h-[600px] flex items-center justify-center"
            backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920"
            offset={120}
          >
            <div className="text-center text-white px-8">
              <h2 className="text-5xl md:text-7xl font-bold mb-8">
                Your Story Awaits
              </h2>
              <p className="text-xl md:text-3xl max-w-4xl mx-auto">
                Every journey tells a story. Let me help you write yours with moments that will last a lifetime.
              </p>
            </div>
          </ParallaxSection>

          <section id="experiences" className="py-20 px-8 bg-gray-50 dark:bg-gray-900">
            <AnimatedSection animation="slideUp" className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Curated Experiences
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover meticulously crafted journeys designed for the discerning traveler seeking authentic, transformative experiences.
              </p>
            </AnimatedSection>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <AnimatedSection
                  key={destination.title}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <DestinationCard {...destination} />
                </AnimatedSection>
              ))}
            </div>
          </section>

          <section className="py-20 px-8 bg-white dark:bg-gray-900">
            <AnimatedSection animation="slideUp" className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                  Where Will Your Journey Take You?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Explore our global destinations. Click on any marker to discover what makes each location extraordinary.
                </p>
              </div>
              <div className="h-[600px] bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-visible shadow-xl relative">
                <WorldMap />
              </div>
            </AnimatedSection>
          </section>

          <section id="testimonials" className="py-20 px-8 bg-gray-50 dark:bg-gray-800">
            <AnimatedSection animation="slideUp" className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Client Experiences
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Hear from travelers who've experienced the LifeTender difference
              </p>
            </AnimatedSection>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection
                  key={testimonial.name}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <TestimonialCard {...testimonial} />
                </AnimatedSection>
              ))}
            </div>
          </section>

          <section className="py-20 px-8 bg-gradient-to-r from-orange-500 to-amber-400">
            <AnimatedSection animation="slideUp" className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Your Bespoke Journey?
              </h2>
              <p className="text-xl mb-8">
                Let's collaborate to design a travel experience that reflects your unique vision and exceeds your expectations.
              </p>
              <motion.button
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Your Consultation
              </motion.button>
            </AnimatedSection>
          </section>

          <footer className="bg-gray-900 dark:bg-black text-white py-12 px-8">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
              <div>
                <Logo className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-2">LifeTender</h3>
                <p className="text-gray-400">Your personal travel consultant for bespoke luxury journeys.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Luxury Planning</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Concierge Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">VIP Access</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">24/7 Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <p className="text-gray-400 mb-4">Follow us for travel inspiration</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 LifeTender. All rights reserved. | Personal Travel Consultant</p>
            </div>
          </footer>
        </motion.div>
      )}
    </>
  )
}