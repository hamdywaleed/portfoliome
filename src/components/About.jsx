import { motion } from 'framer-motion'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'
import aboutImage from '../assets/about-workspace.jpg'

const About = () => {
  const values = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, readable code that stands the test of time."
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve complex problems."
    },
    {
      icon: <Users className="w-10 h-10 text-green-600" />,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing to achieve common goals."
    },
    {
      icon: <Coffee className="w-10 h-10 text-amber-600" />,
      title: "Continuous Learning",
      description: "Committed to staying current with industry trends and best practices."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const hoverCard = {
    hover: { scale: 1.05, boxShadow: '0px 10px 25px rgba(0,0,0,0.15)' }
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            AI Engineer and Node.js RESTful API Developer building end-to-end systems that turn AI models into scalable, production-ready applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 variants={fadeUp} className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Building the Future, One Line of Code at a Time
            </motion.h3>

            <motion.div variants={fadeUp} className="space-y-6 text-gray-700 text-lg sm:text-xl">
              <p>
                I began my journey in Computer Engineering and AI at the Military Technical College in Egypt,
                inspired by turning complex problems into practical systems. I realized that building AI models
                is only half the story—delivering them through reliable, scalable backend systems makes them truly useful.
              </p>
              <p>
                As an AI Engineer and Node.js RESTful API Developer, I’ve built backends, image-processing APIs,
                and full-stack applications, integrating AI solutions and automating deployment pipelines for scalable, production-ready systems.
              </p>
              <p>
                Outside of coding, I spend time experimenting with Generative AI and applying it to projects,
                finding practical ways to integrate AI into real systems. I focus on building technology that actually works and solves problems.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-5">
              <div className="bg-green-50 px-5 py-3 rounded-full">
                <span className="text-green-700 font-medium text-lg">10+ Projects Completed</span>
              </div>
              <div className="bg-orange-50 px-5 py-3 rounded-full">
                <span className="text-orange-700 font-medium text-lg">8+ Technologies Mastered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* About Image */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img
                src={aboutImage}
                alt="Ahmed working"
                className="w-full max-w-md rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-28 h-28 bg-blue-500 rounded-lg opacity-20"
                animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-orange-500 rounded-lg opacity-20"
                animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.h3
            className="text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            My Core Values
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-white cursor-pointer"
                variants={fadeUp}
                whileHover={hoverCard.hover}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-lg text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
