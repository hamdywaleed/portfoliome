import { motion } from 'framer-motion'
import { Award, Cloud, Code, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 92 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "RESTful API Development", level: 92 },
        { name: "CircleCI & CI/CD", level: 82 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "AWS", level: 82 },
        { name: "Docker", level: 78 },
        { name: "Linux", level: 78 },
      ],
    },
    {
      title: "AI & Data",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Generative AI", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "Model Training & Visualization", level: 82 },
      ],
    },
  ]

  const certifications = [
    {
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      year: "2023",
      level: "Associate",
      icon: "☁️",
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "JavaScript Expert",
      organization: "HackerRank",
      year: "2022",
      level: "Expert",
      icon: "🟨",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      title: "Scrum Master",
      organization: "Scrum Alliance",
      year: "2021",
      level: "Certified",
      icon: "🏃",
      color: "bg-blue-100 text-blue-700"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
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
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            Expertise in AI, backend development, RESTful APIs, and full-stack solutions for scalable, production-ready systems.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={hoverCard.hover} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center mb-6 gap-3">
                {category.icon}
                <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div key={idx} variants={fadeUp}>
                    <div className="flex justify-between text-gray-800 font-medium mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {certifications.map((cert, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={hoverCard.hover} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">{cert.title}</h4>
              <p className="text-gray-600 mb-4">{cert.organization}</p>

              <div className="flex justify-center items-center gap-3 mb-4">
                <span className={`px-4 py-1 rounded-full text-sm font-medium ${cert.color}`}>{cert.level}</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600 font-medium">{cert.year}</span>
              </div>

              <div className="flex justify-center">
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
