"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend:",
    skills: [
      { name: "React.js", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Next.js", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Tailwind CSS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Redux", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Backend:",
    skills: [
      { name: "Node.js", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Express.js", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Flask", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "FastAPI", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Django", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Languages:",
    skills: [
      { name: "JavaScript", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "TypeScript", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Python", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "HTML5", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "CSS3", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "C/C++", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Database:",
    skills: [
      { name: "MongoDB", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "PostgreSQL", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "MySQL", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Supabase", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Firebase", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Other Tools:",
    skills: [
      { name: "Git", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Docker", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Figma", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Shadcn UI", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Claude", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "Cursor", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
]

export default function SkillsSection() {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        threshold: 0.2,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            My Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full mr-2 sm:mr-3"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 ml-3 sm:ml-4 md:ml-5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className={`${skill.color} px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm cursor-pointer transition-all duration-200 hover:border-neon-purple/70 hover:bg-gray-700/80`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
