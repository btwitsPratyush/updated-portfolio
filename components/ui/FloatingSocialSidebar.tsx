"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const socialLinks = [
  {
    name: "Email",
    icon: (
      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="emailGradFloat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#1d4ed8", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="url(#emailGradFloat)" />
          <circle cx="18" cy="6" r="2" fill="#1d4ed8" opacity="0.8" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "mailto:pratyushk537@gmail.com",
    label: "Email",
    color: "hover:text-blue-400"
  },
  {
    name: "X",
    icon: (
      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="xGradFloat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="url(#xGradFloat)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://x.com/btwitsPratyush",
    label: "X",
    color: "hover:text-gray-300"
  },
  {
    name: "GitHub",
    icon: (
      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="githubGradFloat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#githubGradFloat)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://github.com/btwitsPratyush",
    label: "GitHub",
    color: "hover:text-purple-400"
  },
  {
    name: "LinkedIn",
    icon: (
      <div className="relative w-6 h-6 sm:w-7 sm:h-7">
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="linkedinGradFloat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="url(#linkedinGradFloat)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    label: "LinkedIn",
    color: "hover:text-blue-400"
  }
]

export default function FloatingSocialSidebar() {
  const [mounted, setMounted] = useState(false)
  const [hideSidebar, setHideSidebar] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const skillsSection = document.getElementById("skills")
      const projectSection = document.getElementById("projects")
      const contactSection = document.getElementById("contact")

      const isMobile = window.innerWidth < 640

      // Common logic for all
      let shouldHide = false

      if (skillsSection) {
        const bottom = skillsSection.offsetTop + skillsSection.offsetHeight
        shouldHide = scrollY > bottom
      }

      if (isMobile) {
        const projectTop = projectSection?.offsetTop || Infinity
        const contactTop = contactSection?.offsetTop || Infinity
        const buffer = 100 // Padding for smoother hide

        if (scrollY + buffer >= projectTop || scrollY + buffer >= contactTop) {
          shouldHide = true
        }
      }

      setHideSidebar(shouldHide)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted || hideSidebar) return null

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, staggerChildren: 0.1 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="fixed z-50 sm:left-4 sm:top-[38%] sm:-translate-y-1/2 left-1/2 bottom-5 -translate-x-1/2 sm:bottom-auto sm:translate-x-0"
    >
      <div className="relative rounded-full overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-purple-500/20 to-purple-500/10 backdrop-blur-md rounded-full border border-purple-400/20 shadow-lg shadow-purple-500/20"></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              animate={{
                x: [-8, 8, -8],
                y: [Math.sin(i) * 8, Math.cos(i) * 8, Math.sin(i) * 8],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${30 + Math.random() * 40}%`,
              }}
            />
          ))}
        </div>

        <div ref={ref} className="relative flex sm:flex-col flex-row items-center justify-center gap-4 px-3 py-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.3, y: -8 }}
              whileTap={{ scale: 0.9 }}
              className={`block text-gray-300 transition-all duration-300 ${social.color} group relative rounded-lg`}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
