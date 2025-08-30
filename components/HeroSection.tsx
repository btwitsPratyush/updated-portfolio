"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="section pt-20">
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden animate-float glow-effect"
        >
          <Image
            src="/profile-pic.jpg"
            alt="Pratyush Kumar"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center items-center gap-2 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            hey, i'm{" "}
            <span className="blink-text bg-gradient-to-r from-[#00ffe0] via-[#b026ff] to-[#ff44cc] bg-clip-text text-transparent">
              Pratyush
            </span>
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            bachelor's in information technology
          </h2>

          <p className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent max-w-2xl mx-auto text-lg md:text-xl font-medium">
            passionate about developing innovative solutions that merge cutting-edge technology with practical applications.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="scroll-indicator mt-10"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  )
}