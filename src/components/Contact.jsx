import { Button } from '@/components/ui/button'
import emailjs from '@emailjs/browser'
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_67jk2x2',   // replace with your EmailJS service ID
        'template_kni3rnz',  // replace with your EmailJS template ID
        formData,
        'DHno3fGxHEoSFnRZg'    // replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(''), 3000)
    }
  }

  const contactInfo = [
    { icon: <Mail className="w-7 h-7" />, title: "Email", value: "ahmedelshenawy91@gmail.com", link: "mailto:ahmedelshenawy91@gmail.com" },
    { icon: <Phone className="w-7 h-7" />, title: "Phone", value: "+20 102 878 6309", link: "tel:+20123456789" },
    { icon: <MapPin className="w-7 h-7" />, title: "Location", value: "Cairo, Egypt", link: null }
  ]

  const socialLinks = [
    { icon: <Github className="w-7 h-7" />, name: "GitHub", url: "https://github.com/yourusername", color: "hover:text-gray-900" },
    { icon: <Linkedin className="w-7 h-7" />, name: "LinkedIn", url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { icon: <Twitter className="w-7 h-7" />, name: "Twitter", url: "https://twitter.com/yourusername", color: "hover:text-blue-400" }
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info  */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">Let's Start a Conversation</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Have a project, idea, or opportunity? I’d love to hear from you and usually respond within 24 hours.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-lg sm:text-xl">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-lg sm:text-xl">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 text-lg sm:text-xl mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors duration-200 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 text-lg sm:text-xl mb-3">Download My Resume</h4>
              <p className="text-gray-600 text-lg sm:text-xl mb-4">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <a
                href="/Ahmed_El_Shenawy_resume.pdf"
                download
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl py-3 px-6 rounded transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" /> Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Contact Form  */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-lg sm:text-xl">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-lg sm:text-xl">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-lg sm:text-xl"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-lg sm:text-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-lg sm:text-xl"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical text-lg sm:text-xl"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg sm:text-xl flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
