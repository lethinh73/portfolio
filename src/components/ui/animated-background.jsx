import React, { useMemo } from 'react'
import { motion as Motion } from 'framer-motion'

const AnimatedBackground = ({ variant = 'default' }) => {
  const getVariantConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          primaryColor: 'bg-[#423F3E]/30',
          secondaryColor: 'bg-[#362222]/20',
          particleColor: 'bg-[#423F3E]',
          starColor: 'bg-[#423F3E]',
          particleCount: 50,
          starCount: 30
        }
      case 'about':
        return {
          primaryColor: 'bg-[#2B2B2B]/40',
          secondaryColor: 'bg-[#423F3E]/30',
          particleColor: 'bg-[#362222]',
          starColor: 'bg-[#423F3E]',
          particleCount: 40,
          starCount: 25
        }
      case 'skills':
        return {
          primaryColor: 'bg-[#423F3E]/35',
          secondaryColor: 'bg-[#171010]/50',
          particleColor: 'bg-[#362222]',
          starColor: 'bg-[#423F3E]',
          particleCount: 45,
          starCount: 35
        }
      case 'projects':
        return {
          primaryColor: 'bg-[#171010]/60',
          secondaryColor: 'bg-[#423F3E]/40',
          particleColor: 'bg-[#362222]',
          starColor: 'bg-[#423F3E]',
          particleCount: 40,
          starCount: 30
        }
      case 'contact':
        return {
          primaryColor: 'bg-[#2B2B2B]/50',
          secondaryColor: 'bg-[#362222]/15',
          particleColor: 'bg-[#423F3E]',
          starColor: 'bg-[#362222]',
          particleCount: 35,
          starCount: 25
        }
      case 'footer':
        return {
          primaryColor: 'bg-[#171010]/70',
          secondaryColor: 'bg-[#2B2B2B]/40',
          particleColor: 'bg-[#362222]',
          starColor: 'bg-[#423F3E]',
          particleCount: 30,
          starCount: 20
        }
      default:
        return {
          primaryColor: 'bg-[#2B2B2B]/30',
          secondaryColor: 'bg-[#171010]/40',
          particleColor: 'bg-[#362222]',
          starColor: 'bg-[#423F3E]',
          particleCount: 30,
          starCount: 20
        }
    }
  }

  const config = getVariantConfig()

  const particleConfigs = useMemo(() => {
    return Array.from({ length: config.particleCount }, () => ({
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
      animate: {
        y: [0, -100, 0],
        x: [0, Math.random() * 100 - 50, 0],
        opacity: [0.2, 0.8, 0.2],
      },
      transition: {
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 5,
      },
    }))
  }, [config.particleCount])

  const starConfigs = useMemo(() => {
    return Array.from({ length: config.starCount }, () => ({
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        clipPath:
          'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
      },
      transition: {
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      },
    }))
  }, [config.starCount])

  const twinkleConfigs = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      },
      transition: {
        duration: Math.random() * 2 + 1,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    }))
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <Motion.div
        className={`absolute w-96 h-96 ${config.primaryColor} rounded-full blur-3xl`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      <Motion.div
        className={`absolute w-96 h-96 ${config.secondaryColor} rounded-full blur-3xl`}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: '10%', right: '10%' }}
      />

      {/* Floating particles */}
      {particleConfigs.map((cfg, i) => (
        <Motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 ${config.particleColor} rounded-full opacity-20`}
          animate={cfg.animate}
          transition={cfg.transition}
          style={cfg.style}
        />
      ))}

      {/* Animated stars */}
      {starConfigs.map((cfg, i) => (
        <Motion.div
          key={`star-${i}`}
          className={`absolute ${config.starColor} opacity-60`}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={cfg.transition}
          style={cfg.style}
        />
      ))}

      {/* Additional twinkling effect */}
      {twinkleConfigs.map((cfg, i) => (
        <Motion.div
          key={`twinkle-${i}`}
          className={`absolute w-0.5 h-0.5 ${config.starColor} rounded-full`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={cfg.transition}
          style={cfg.style}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
