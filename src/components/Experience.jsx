import React from 'react'
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react'

const Experience = () => {
  const workExperience = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead a team of 5 developers in building scalable web applications. Architected and implemented microservices infrastructure that improved system performance by 40%.",
      achievements: [
        "Led migration to microservices architecture",
        "Reduced application load time by 40%",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver user-centric solutions.",
      achievements: [
        "Built 3 major client applications from scratch",
        "Improved code coverage from 60% to 95%",
        "Reduced bug reports by 50% through better testing",
        "Implemented real-time features using WebSocket"
      ],
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Redis"]
    },
    {
      title: "Junior Software Developer",
      company: "WebDev Agency",
      location: "Remote",
      period: "2019 - 2020",
      description: "Worked on various client projects ranging from e-commerce platforms to content management systems. Gained experience in multiple technologies and frameworks.",
      achievements: [
        "Delivered 15+ client projects on time",
        "Learned 5 new programming languages",
        "Contributed to open-source projects",
        "Received 'Developer of the Month' award twice"
      ],
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "jQuery"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      achievements: [
        "Magna Cum Laude",
        "Dean's List for 6 semesters",
        "Computer Science Society President",
        "Hackathon Winner (2018, 2019)"
      ]
    }
  ]

  const awards = [
    {
      title: "Innovation Award",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Recognized for developing an AI-powered code review system"
    },
    {
      title: "Best Mobile App",
      organization: "Regional Hackathon",
      year: "2022",
      description: "Won first place for developing a mental health support app"
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2021",
      description: "Top 1% contributor in JavaScript repositories"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in software engineering.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-blue-600" />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
                {/* Timeline dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <span className="font-medium text-blue-600">{job.company}</span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
            Education
          </h3>
          
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  
                  <div className="space-y-2 mb-4 text-gray-600">
                    <div className="font-medium text-blue-600">{edu.school}</div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="font-medium">GPA: {edu.gpa}</div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Achievements:</h5>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-600" />
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h4>
                
                <p className="text-blue-600 font-medium mb-2">
                  {award.organization} • {award.year}
                </p>
                
                <p className="text-gray-600 text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

