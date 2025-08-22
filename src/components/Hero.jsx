import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroImage from '../assets/profile.jpeg'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'AI Engineer | Node.js RESTful API Developer'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
    })
  }

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 }
  }

  const socialVariants = {
    hover: { scale: 1.2, color: '#2563EB', transition: { duration: 0.3 } }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-blue-50 to-indigo-100 pt-0 sm:pt-8 lg:pt-16
                 overflow-hidden w-full max-w-full overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={textVariants}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              Hi, I'm
            </motion.h1>

            {/* Typing Text */}
            <motion.div
              variants={textVariants}
              custom={3}
              className="h-16 mb-8"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl text-gray-700 mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={textVariants}
              custom={4}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                <Button
                  onClick={() => scrollToSection('#projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg lg:text-xl font-medium transition-all duration-200"
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg lg:text-xl font-medium transition-all duration-200"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={textVariants}
              custom={5}
              className="flex gap-6 justify-center lg:justify-start text-gray-600"
            >
              <motion.a href="https://github.com/ahmed-el-shenawy" target="_blank" rel="noopener noreferrer" variants={socialVariants} whileHover="hover">
                <Github size={28} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/ahmed-el-shnnawy/" target="_blank" rel="noopener noreferrer" variants={socialVariants} whileHover="hover">
                <Linkedin size={28} />
              </motion.a>
              <motion.a href="mailto:ahmedelshnawy91@gmail.com" variants={socialVariants} whileHover="hover">
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex justify-center lg:justify-center relative"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 p-2 hover:scale-105 transition-transform duration-500">
                <img
                  src={heroImage}
                  alt="Ahmed El-Shenawy - Software Engineer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating decorative circles */}
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 sm:w-20 sm:h-20 bg-blue-500 rounded-full opacity-20"
                animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full opacity-20"
                animate={{ y: [0, 15, 0], rotate: [0, -45, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={36} />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
