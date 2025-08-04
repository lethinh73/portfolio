import { motion } from 'framer-motion'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import AnimatedBackground from './ui/animated-background'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#171010] via-[#2B2B2B] to-[#423F3E] text-white flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="hero" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#362222]/5 via-[#423F3E]/10 to-[#171010]/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto">
          {/* Avatar/Logo */}
          <motion.div
            className="mb-6 relative inline-block"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-br from-[#D4AF37] to-[#B8860B]">
                <img 
                  src="/images/avatar.jpg" 
                  alt="Thinh Le - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Multiple floating ring animations */}
              <motion.div
                className="absolute inset-0 w-24 h-24 border-2 border-[#423F3E]/50 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-24 h-24 border border-[#362222]/60 rounded-full"
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-24 h-24 border border-[#423F3E]/30 rounded-full"
                animate={{ 
                  rotate: 180, 
                  scale: [0.9, 1.2, 0.9],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Pulsing dots around avatar */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#D4AF37] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#A64D79] rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <motion.p
              className="text-lg text-[#D4AF37] font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                Thinh Le
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="text-[#D4AF37]">Software Developer</span>
            </motion.h2>

            <motion.p
              className="text-base text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Accomplished developer with 5+ years building scalable applications for real estate, 
              education, finance, and logistics industries. Passionate about creating innovative, 
              efficient digital solutions and bridging communication between technical teams and stakeholders.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="default"
                  className="bg-gradient-to-r from-[#362222] to-[#423F3E] hover:from-[#423F3E] hover:to-[#362222] text-white px-6 py-3 h-auto font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Get In Touch
                    <FaExternalLinkAlt size={20} />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="default"
                  className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-3 h-auto font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="/RESUME.pdf" download className="flex items-center gap-2">
                    Download CV
                    <FaDownload size={20} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Twinkling stars and animated particles */}
        <motion.div
          className="absolute top-10 right-10 w-2 h-2 bg-[#423F3E] rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="absolute top-1/4 left-10 w-1 h-1 bg-[#2B2B2B] rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.8, 1.5, 0.8]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-1.5 h-1.5 bg-[#362222] rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.6, 1.3, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#423F3E] rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.7, 1.4, 0.7],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-slate-400 rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0.4, 1.1, 0.4]
          }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Floating sparkles */}
        <motion.div
          className="absolute top-20 left-1/3 w-1 h-1 bg-white/60 rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-1 h-1 bg-white/50 rounded-full"
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 15, 0],
            x: [0, -15, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.2 }}
        />
      </div>
    </section>
  )
}

export default Hero
