import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import heroImage from '../assets/profile-new.jpg'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'I build scalable, user-focused software solutions'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40) // slightly faster typing effect

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="block text-blue-600">Ahmed El-Shenawy</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6">
              Software Engineer
            </h2>

            <div className="h-16 mb-8">
              <p className="text-lg sm:text-xl text-gray-600 min-h-[2rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg sm:text-xl font-medium transition-colors duration-200"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg sm:text-xl font-medium transition-colors duration-200"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start text-gray-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
                <Linkedin size={28} />
              </a>
              <a href="mailto:alex@example.com" className="hover:text-blue-600 transition-colors duration-200">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex justify-center lg:justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-blue-100 to-purple-100 p-2">
                <img
                  src={heroImage}
                  alt="Ahmed El-Shenawy - Software Engineer"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating decorative circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '0.8s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  )
}

export default Hero
