"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Award, Code, MapPin, Calendar, Building2, ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useState, useRef } from "react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "TalkerIQ",
    location: "Delhi",
    period: "Aug 2025 - Present",
    description: [
      "Enhanced and optimized React-based frontend for the TalkerIQ dashboard, improving UI/UX for AI-driven voice automation products.",
      "Integrated backend APIs with the frontend to enable seamless data flow, feature functionality, and real-time updates.",
      "Collaborated with design and product teams to refine the landing page and implement user-focused enhancements that support lead conversion."
    ],
    technologies: ["React", "JavaScript", "API Integration", "UI/UX", "Frontend Optimization"],
    icon: (
      <div className="rounded-lg border-2 border-[#6A0DAD] shadow-[0_0_10px_#6A0DAD] group-hover:scale-110 transition-transform duration-300">
        <img src="/talkeriq-logo.png" alt="TalkerIQ" className="w-10 h-10 rounded-md object-contain" />
      </div>
    ),
    current: true,
    remote: true,
    type: "Internship",
  },
  {
    title: "Full Stack Developer",
    company: "Webnova",
    location: "Bengaluru",
    period: "May 2025 - Aug 2025",
    description: [
      "Implemented secure payment gateway with TypeScript and Node.js, integrating JWT authentication and OAuth2 for enhanced security.",
      "Optimized payment processing using PostgreSQL and Redis, significantly improving response times and throughput.",
      "Built real-time payment monitoring dashboard using React and Tailwind CSS, with integrated Sentry for error tracking and observability."
    ],
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Redis", "JWT", "OAuth2", "Tailwind CSS", "Sentry"],
    icon: (
      <div className="rounded-lg border-2 border-[#6A0DAD] shadow-[0_0_10px_#6A0DAD] group-hover:scale-110 transition-transform duration-300">
        <img src="/webnova-logo.png" alt="Webnova" className="w-10 h-10 rounded-md object-contain" />
      </div>
    ),
    current: false,
    remote: true,
    type: "Internship",
  },
  {
    title: "MERN Stack Developer",
    company: "DxtCreators",
    location: "Noida",
    period: "May 2025 - July 2025",
    description: [
      "Developed full-stack applications using the MERN stack with reusable components and RESTful API integrations.",
      "Built an employee management system to streamline HR operations, featuring dashboards, authentication, and CRUD workflows.",
      "Created a dynamic landing page for a SaaS platform with responsive design, accessibility, and modern UI/UX best practices."
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST APIs", "Git"],
    icon: (
      <div className="rounded-lg border-2 border-[#6A0DAD] shadow-[0_0_10px_#6A0DAD] group-hover:scale-110 transition-transform duration-300">
        <img src="/dxtcreators-logo.png" alt="Dxt Creators" className="w-10 h-10 rounded-md object-contain" />
      </div>
    ),
    current: false,
    remote: true,
    type: "Internship",
  },
]

// Tech Elements component (unchanged)
const TechElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

export default function ExperienceSection() {
  const [inView, setInView] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      }
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

  const toggleExpanded = async (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
    setTimeout(() => {
      setIsAnimating(false)
    }, 300)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="section relative min-h-screen overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            My journey through internships, projects, and leadership roles
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto relative"
        >
          {!isMobile && (
            <>
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-teal to-purple-600 shadow-lg shadow-neon-purple/30"></div>
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -top-2 z-20">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-teal border-4 border-gray-900 shadow-lg animate-pulse"></div>
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-teal animate-ping opacity-30"></div>
                </div>
              </div>
            </>
          )}

          <div className={`space-y-8 ${isMobile ? '' : 'lg:space-y-12'}`}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`group relative flex flex-col ${
                  !isMobile && index % 2 === 0 ? 'lg:flex-row' : !isMobile ? 'lg:flex-row-reverse' : ''
                } items-center gap-6 lg:gap-8`}
              >
                <div className={`w-full ${!isMobile ? 'lg:w-5/12' : ''} ${!isMobile && index % 2 === 0 ? 'lg:pr-6' : !isMobile ? 'lg:pl-6' : ''}`}>
                  <div className="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 backdrop-blur-xl border border-gray-700/50 rounded-xl p-5 shadow-2xl group-hover:border-neon-purple/60 group-hover:shadow-neon-purple/20 transition-all duration-500 hover:transform hover:-translate-y-1 hover:scale-[1.02]">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div
                      className={`flex items-start gap-4 mb-4 ${isMobile ? 'cursor-pointer select-none' : ''}`}
                      onClick={isMobile ? () => toggleExpanded(index) : undefined}
                    >
                      {exp.icon}

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-neon-purple transition-colors duration-300 truncate">
                          {exp.title}
                        </h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2 text-neon-teal">
                            <Building2 size={14} />
                            <span className="font-semibold truncate">{exp.company}</span>
                            <span className="px-2 py-0.5 bg-neon-purple/20 text-neon-purple text-xs rounded-full whitespace-nowrap">
                              {exp.type}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-gray-400 text-xs">
                            <div className="flex items-center gap-1">
                              <MapPin size={12} />
                              <span>
                                {exp.location}
                                {exp.remote && <span className="text-neon-teal"> (Remote)</span>}
                              </span>
                            </div>
                            {(!isMobile || expandedItems.includes(index)) && (
                              <div className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{exp.period}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {isMobile && (
                        <div className={`flex-shrink-0 text-gray-400 group-hover:text-neon-purple transition-all duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                          <motion.div
                            animate={{ rotate: expandedItems.includes(index) ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronDown size={20} />
                          </motion.div>
                        </div>
                      )}
                    </div>

                    {!isMobile && (
                      <div className="mb-4">
                        <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 flex-shrink-0"></div>
                              <span className="text-xs sm:text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {isMobile && (
                      <AnimatePresence>
                        {expandedItems.includes(index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                              opacity: { duration: 0.2, delay: expandedItems.includes(index) ? 0.1 : 0 }
                            }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                              {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2 flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </div>
                {!isMobile && <div className="hidden lg:block w-5/12"></div>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
