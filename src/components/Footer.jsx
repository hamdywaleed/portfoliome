import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/ahmed-el-shenawy",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ahmed-el-shnnawy/",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:ahmedelshnawy91@gmail.com",
      label: "Email"
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ahmed El-Shenawy</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Passionate AI Engineer | Node.js RESTful API Developer dedicated to building innovative solutions
                that make a difference. Always learning, always growing.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p>Cairo, Egypt</p>
                <a
                  href="mailto:ahmedelshnawy91@gmail.com"
                  className="block hover:text-white transition-colors duration-200"
                >
                  ahmedelshnawy91@gmail.com
                </a>
                <a
                  href="tel:+201028786309"
                  className="block hover:text-white transition-colors duration-200"
                >
                  +20 102 878 6309
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} Ahmed El-Shenawy. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

