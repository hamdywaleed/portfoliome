import React from 'react'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'
import aboutImage from '../assets/about-workspace.jpg'

const About = () => {
  const values = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "I believe in writing maintainable, readable code that stands the test of time."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve complex problems."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing to achieve common goals."
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: "Continuous Learning",
      description: "Committed to staying current with industry trends and best practices."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate software engineer with 5+ years of experience building scalable web applications and leading development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate software engineer with over 5 years of experience in full-stack development. 
                My journey began with a Computer Science degree from Stanford University, where I discovered 
                my love for creating elegant solutions to complex problems.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of working with startups and established companies, 
                helping them build scalable web applications that serve millions of users. I specialize in 
                modern JavaScript frameworks, cloud architecture, and agile development practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, mentoring junior 
                developers, or exploring the latest in AI and machine learning. I believe that technology 
                should make people's lives better, and I'm committed to building software that does exactly that.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">5+ Years Experience</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">50+ Projects Completed</span>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-full">
                <span className="text-orange-700 font-medium">10+ Technologies Mastered</span>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Alex Johnson working" 
                className="w-full max-w-md rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-lg opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            My Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

