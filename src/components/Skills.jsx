import { Award, Cloud, Code, Database, Settings, Star } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript/TypeScript", level: 90, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Next.js", level: 85, icon: "▲" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Django", level: 80, icon: "🎸" },
        { name: "RESTful APIs", level: 92, icon: "🔗" },
        { name: "GraphQL", level: 75, icon: "📊" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "AWS", level: 82, icon: "☁️" },
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "Firebase", level: 80, icon: "🔥" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "🐙" },
        { name: "Jest/Testing", level: 85, icon: "🧪" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "CI/CD", level: 82, icon: "🔄" },
        { name: "Agile/Scrum", level: 90, icon: "🏃" },
        { name: "Linux", level: 78, icon: "🐧" }
      ]
    }
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

  const getStarRating = (level) => {
    const stars = Math.round(level / 20)
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
      />
    ))
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive showcase of my technical skills and proficiency across various technologies, tools, and frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {getStarRating(skill.level)}
                        </div>
                        <span className="text-sm text-gray-600 font-medium min-w-[3rem]">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Certifications & Achievements
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.icon}</div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h4>

                <p className="text-gray-600 mb-3">
                  {cert.organization}
                </p>

                <div className="flex justify-center items-center space-x-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${cert.color}`}>
                    {cert.level}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600 font-medium">{cert.year}</span>
                </div>

                <div className="flex justify-center">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

