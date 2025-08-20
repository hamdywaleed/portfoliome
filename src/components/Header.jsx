import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">Alex Johnson</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

