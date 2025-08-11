import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion' // eslint-disable-line no-unused-vars

const AnimatedBackground = ({ variant = 'default' }) => {
  const getVariantConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          primaryColor: 'bg-[#423F3E]/30',
          particleColor: '#423F3E',
          starColor: 'bg-[#423F3E]',
          particleCount: 50,
          starCount: 30
        }
      case 'about':
        return {
          primaryColor: 'bg-[#2B2B2B]/40',
          particleColor: '#362222',
          starColor: 'bg-[#423F3E]',
          particleCount: 40,
          starCount: 25
        }
      case 'skills':
        return {
          primaryColor: 'bg-[#423F3E]/35',
          particleColor: '#362222',
          starColor: 'bg-[#423F3E]',
          particleCount: 45,
          starCount: 35
        }
      case 'projects':
        return {
          primaryColor: 'bg-[#171010]/60',
          particleColor: '#362222',
          starColor: 'bg-[#423F3E]',
          particleCount: 40,
          starCount: 30
        }
      case 'contact':
        return {
          primaryColor: 'bg-[#2B2B2B]/50',
          particleColor: '#423F3E',
          starColor: 'bg-[#362222]',
          particleCount: 35,
          starCount: 25
        }
      case 'footer':
        return {
          primaryColor: 'bg-[#171010]/70',
          particleColor: '#362222',
          starColor: 'bg-[#423F3E]',
          particleCount: 30,
          starCount: 20
        }
      default:
        return {
          primaryColor: 'bg-[#2B2B2B]/30',
          particleColor: '#362222',
          starColor: 'bg-[#423F3E]',
          particleCount: 30,
          starCount: 20
        }
    }
  }

  const config = getVariantConfig()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = [...Array(config.particleCount)].map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      drift: Math.random() * 0.5 - 0.25
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = config.particleColor
      particles.forEach((p) => {
        p.y -= p.speed
        p.x += p.drift
        if (p.y < 0) p.y = canvas.height
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [config])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient orb */}
      <motion.div
        className={`absolute w-80 h-80 ${config.primaryColor} rounded-full blur-2xl`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ top: '15%', left: '15%' }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Animated stars */}
      {[...Array(config.starCount)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className={`absolute ${config.starColor} opacity-60`}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 3
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        />
      ))}

      {/* Additional twinkling effect */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`twinkle-${i}`}
          className={`absolute w-0.5 h-0.5 ${config.starColor} rounded-full`}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5]
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground
