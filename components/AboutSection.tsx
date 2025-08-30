"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react'

// Tech Elements component
const TechElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Binary Code Rain Effect */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-emerald-500/20 text-xs font-mono"
          style={{
            left: `${(i * 8.33)}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j} className="mb-2">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default function AboutSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else {
          setInView(false)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section relative min-h-screen overflow-hidden">


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-gradient"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="card-gradient rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              I'm currently pursuing my Bachelor's degree in Information Technology, passionate about developing
              innovative solutions that merge cutting-edge technology with practical applications.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              My journey in tech has led me to explore various domains including web development, artificial
              intelligence, and cloud computing. I'm particularly interested in AI applications in healthcare, which led
              to my brain tumor detection project using CNN.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              When I'm not coding, I enjoy writing blogs, exploring new technologies, contributing to open-source
              projects, and expanding my knowledge through online courses and certifications. I find that blogging helps
              me solidify my understanding of complex concepts while sharing knowledge with the wider tech community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
