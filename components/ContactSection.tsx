"use client"
import React from 'react';
import { Mail } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    icon: (
      <div className="relative">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#1d4ed8", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="url(#emailGrad)"/>
          <circle cx="18" cy="6" r="2" fill="#1d4ed8" opacity="0.8"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "mailto:pratyushk537@gmail.com",
    stats: "Usually responds within 24h",
    color: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/25",
    bgGradient: "from-blue-500/10 to-blue-600/10"
  },
  {
    name: "X",
    icon: (
      <div className="relative">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#9ca3af", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#ffffff", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="url(#xGrad)"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-white rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://x.com/btwitsPratyush",
    stats: "Active daily",
    color: "from-gray-400 to-white",
    shadowColor: "shadow-gray-500/25",
    bgGradient: "from-gray-500/10 to-white/10"
  },
  {
    name: "GitHub",
    icon: (
      <div className="relative">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="githubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#8b5cf6", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#ec4899", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="url(#githubGrad)"/>
          <circle cx="9" cy="9" r="1.5" fill="#ec4899" opacity="0.8"/>
          <circle cx="15" cy="15" r="1" fill="#8b5cf6" opacity="0.6"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://github.com/btwitsPratyush",
    stats: "50+ repositories",
    color: "from-purple-500 to-pink-400",
    shadowColor: "shadow-purple-500/25",
    bgGradient: "from-purple-500/10 to-pink-400/10"
  },
  {
    name: "LinkedIn",
    icon: (
      <div className="relative">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="relative z-10">
          <defs>
            <linearGradient id="linkedinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#2563eb", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="url(#linkedinGrad)"/>
          <circle cx="5.5" cy="5.5" r="1.5" fill="#60a5fa" opacity="0.9"/>
          <rect x="15" y="13" width="2" height="5" fill="#60a5fa" opacity="0.7"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
    ),
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    stats: "Open to opportunities",
    color: "from-blue-600 to-blue-400",
    shadowColor: "shadow-blue-600/25",
    bgGradient: "from-blue-600/10 to-blue-400/10"
  },
]

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  )
}

// Animated grid background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
    </div>
  )
}

export default function Socials() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Elements */}
      <GridBackground />
      <FloatingParticles />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Header - unchanged as requested */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get in touch with me through these platforms
          </p>
        </div>

        {/* Enhanced Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 transform group-hover:scale-110`} />
              
              {/* Main card */}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-white/30 hover:bg-black/60 hover:scale-105 hover:${social.shadowColor} hover:shadow-2xl`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center gap-3">
                  {/* Icon container with enhanced styling */}
                  <div className={`relative p-3 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 group-hover:border-white/50 transition-all duration-300 group-hover:rotate-6`}>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500`} />
                    <div className="relative transform group-hover:scale-125 transition-transform duration-300">
                      {social.icon}
                    </div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.3s' }} />
                  </div>
                  
                  {/* Text content */}
                  <div className="text-center space-y-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {social.name}
                    </h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      {social.stats}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-3/4 transition-all duration-500" />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Enhanced Footer Message */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="relative inline-block group">
            {/* Background glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Main container */}
            <div className="relative px-4 sm:px-8 py-3 sm:py-6 rounded-xl bg-black/30 backdrop-blur-md border border-white/20 group-hover:border-white/40 transition-all duration-500 group-hover:scale-105">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative flex items-center justify-center gap-2 sm:gap-4">
                <div className="animate-bounce">
                  <Mail size={20} className="text-purple-400 sm:w-6 sm:h-6" />
                </div>
                <a 
                  href="mailto:pratyushk537@gmail.com"
                  className="font-semibold text-sm sm:text-lg tracking-wide bg-gradient-to-r from-white via-purple-300 via-blue-300 via-cyan-300 to-white bg-clip-text text-transparent hover:from-purple-200 hover:to-cyan-200 transition-all duration-300"
                >
                  Click here! Let's work together
                </a>
                <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Mail size={20} className="text-purple-400 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Voltaire Quote */}
        <div className="mt-16 sm:mt-20 text-center">
          <blockquote className="text-lg sm:text-xl lg:text-2xl font-light italic text-gray-300 leading-relaxed">
            "The happiest of all lives is a busy solitude"
          </blockquote>
          <cite className="block mt-2 text-sm sm:text-base text-gray-500 font-medium">
            ~ Voltaire
          </cite>
        </div>
      </div>
    </section>
  )
}
