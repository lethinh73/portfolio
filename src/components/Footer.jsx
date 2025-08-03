import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaGithub, FaLinkedin, FaExternalLinkAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import AnimatedBackground from './ui/animated-background'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/lethinh73",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/lethinh73/",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: FaExternalLinkAlt,
      href: "https://thinhsoft.com",
      label: "Portfolio",
      color: "hover:text-orange-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:lethinh73@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-r from-[#2B2B2B] to-[#171010] text-white py-8 overflow-hidden">
      <AnimatedBackground variant="footer" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Thinh Le
              </h3>
              <p className="text-slate-300 mb-4 max-w-md">
                Full-stack developer passionate about creating innovative solutions 
                and building amazing user experiences with modern technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    viewport={{ once: true }}
                    className={`p-3 bg-slate-700 rounded-lg text-slate-300 transition-all duration-300 ${social.color} hover:bg-slate-600 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-slate-300 hover:text-white transition-all duration-300 block py-1"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">Get In Touch</h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:lethinh73@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-slate-300 hover:text-white transition-all duration-300"
                >
                  <FaEnvelope className="mr-3 text-red-400" />
                  lethinh73@gmail.com
                </motion.a>
                <motion.a
                  href="https://thinhsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-slate-300 hover:text-white transition-all duration-300"
                >
                  <FaExternalLinkAlt className="mr-3 text-orange-400" />
                  thinhsoft.com
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Scroll to Top Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4"
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500 transition-all duration-300"
            >
              <FaArrowUp className="mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 py-3"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-1 md:mb-0"
              >
                Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> by Thinh Le
              </motion.p>
              <p className="text-sm">
                © {currentYear} Thinh Le. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
