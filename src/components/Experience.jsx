import { motion } from 'framer-motion'
import { Calendar, GraduationCap, MapPin } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      title: "Backend Development Trainee",
      company: "EGYPT FWD – Udacity",
      location: "Remote",
      period: "Jan 2023 – Mar 2023",
      description: "Learned and applied back-end development concepts, focusing on Node.js, Express, and PostgreSQL.",
      achievements: [
        "Built RESTful APIs using Node.js, Express, and PostgreSQL",
        "Engineered scalable back-end features with authentication, routing, and middleware"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL"]
    },
    {
      title: "Forward Soft Skills Trainee",
      company: "Forward Program – McKinsey & Company",
      location: "Remote",
      period: "Mar 2023 – May 2023",
      description: "Developed professional soft skills through structured training and practical simulations.",
      achievements: [
        "Completed a structured training in critical soft skills",
        "Participated in real-world scenarios and simulations guided by McKinsey mentors"
      ],
      technologies: ["Communication", "Problem Solving", "Team Collaboration"]
    }
  ]

  const education = [
    {
      degree: "B.Sc. in Computer Engineering and AI",
      school: "Military Technical College",
      location: "Egypt",
      period: "2020 – 2024",
      gpa: "Very Good",
      achievements: []
    }
  ]

  // Hover Animations Only
  const hoverCard = {
    hover: { scale: 1.03, boxShadow: '0px 15px 30px rgba(0,0,0,0.15)' }
  }

  const techHover = {
    hover: { scale: 1.1, backgroundColor: "#3b82f6", color: "#fff" }
  }

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my expertise.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-7 h-7 mr-3 text-blue-600" />
            Work Experience
          </h3>

          <div className="space-y-10">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                whileHover={hoverCard.hover}
                className="bg-white rounded-lg shadow-lg p-8 relative transition-all cursor-pointer"
              >
                <div className="absolute -left-4 top-8 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">{job.title}</h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-lg sm:text-xl">
                      <span className="font-medium text-blue-600">{job.company}</span>
                      <span className="flex items-center">
                        <MapPin className="w-5 h-5 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-5 h-5 mr-1" />
                        {job.period}
                      </span>
                    </div>

                    <p className="text-gray-600 text-lg sm:text-xl mb-4">{job.description}</p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 text-lg sm:text-xl mb-2">Key Achievements:</h5>
                      <ul className="space-y-2 text-lg sm:text-xl">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 text-lg sm:text-xl mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2 text-lg sm:text-xl">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover="hover"
                          variants={techHover}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-7 h-7 mr-3 text-blue-600" />
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={hoverCard.hover}
                className="bg-white rounded-lg shadow-lg p-8 transition-all cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>

                    <div className="space-y-2 mb-4 text-gray-600 text-lg sm:text-xl">
                      <div className="font-medium text-blue-600">{edu.school}</div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-1" />
                        {edu.period}
                      </div>
                      <div className="font-medium">Grade: {edu.gpa}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
