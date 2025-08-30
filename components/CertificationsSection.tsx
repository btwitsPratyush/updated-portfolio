"use client"

import { Mail, Github, Linkedin, X } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  {
    name: "Email",
    icon: <Mail size={24} className="text-white" />,
    href: "mailto:pratyushk537@gmail.com",
    description: "Drop me a line anytime",
    stats: "Usually responds within 24h",
  },
  {
    name: "X",
    icon: <X size={24} className="text-white" />,
    href: "https://x.com/btwitsPratyush",
    description: "Follow for tech updates",
    stats: "Active daily",
  },
  {
    name: "GitHub",
    icon: <Github size={24} className="text-white" />,
    href: "https://github.com/btwitsPratyush",
    description: "Check out my projects",
    stats: "50+ repositories",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={24} className="text-white" />,
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    description: "Let's connect professionally",
    stats: "Open to opportunities",
  },
]

export default function Socials() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get in touch with me through these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group p-2 sm:p-2.5 rounded-xl bg-black/20 hover:bg-black/30 transition-colors border border-white/10"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-black/30 p-2 rounded-full">
                  {social.icon}
                </div>
                <p className="text-[10px] text-gray-400 text-center">{social.description}</p>
                <span className="text-[10px] text-gray-500">{social.stats}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer message */}
        <div className="mt-10 text-center">
          <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700">
            <p className="text-white italic text-lg font-[cursive]">
              Prefer email? Just click the mail icon above!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
