import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import OnlineStoreImg from '../assets/cover.webp'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Online Store Backend",
      description:
        "Backend for an online store using Node.js and PostgreSQL with RESTful APIs. Built and delivered the full project from development to deployment, integrating APIs and deployment pipelines for full functionality.",
      technologies: ["Node.js", "PostgreSQL", "Express", "REST API"],
      githubUrl: "https://github.com/hamdy/Storefront-backend",
      coverImage: OnlineStoreImg,
      features: [
        "RESTful API development",
        "Database integration with PostgreSQL",
        "Full project deployment and pipeline setup",
      ],
    },
    {
      id: 2,
      title: "ImageResizing API",
      description:
        "API to resize images via URL requests, enabling dynamic image processing for web and mobile applications.",
      technologies: ["Node.js", "Express", "Sharp"],
      githubUrl: "https://github.com/hamdy/ImageResizing-api",
      coverImage: OnlineStoreImg,
      features: [
        "Resize images via URL requests",
        "High-performance image processing",
        "Easy integration with other applications",
      ],
    },
    {
      id: 3,
      title: "Full-Stack App with CircleCI",
      description:
        "Integrated front-end interfaces with back-end APIs to create a fully functional application. Automated the development workflow using CircleCI for CI/CD.",
      technologies: ["React", "Node.js", "Express", "CircleCI"],
      githubUrl: "https://github.com/hamdy/udacity-third-project",
      coverImage: OnlineStoreImg,
      features: [
        "Front-end and back-end integration",
        "Automated CI/CD pipeline with CircleCI",
        "Fully functional full-stack application",
      ],
    },
    
  ]

  const hoverCard = {
    hover: { scale: 1.04, boxShadow: "0px 25px 50px rgba(0,0,0,0.2)" },
  }

  const techHover = {
    hover: { scale: 1.1, backgroundColor: "#3b82f6", color: "#fff" },
  }

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work demonstrating backend and full-stack development skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={hoverCard.hover}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 cursor-pointer w-full"
            >
              {/* Project Image */}
              <div className="relative w-full rounded-t-3xl overflow-hidden group">
                <div className="w-full h-0 pt-[56.25%] relative">
                  <img
                    src={project.coverImage}
                    alt={`${project.title} cover`}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 sm:left-6 sm:bottom-6 text-white">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg ">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 text-base sm:text-lg line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      variants={techHover}
                      whileHover="hover"
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm sm:text-base rounded-full transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                    Key Features:
                  </h4>
                  <ul className="text-gray-600 text-sm sm:text-base space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm sm:text-base"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg sm:text-xl">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 sm:py-3 text-lg sm:text-xl transition-all duration-200"
            onClick={() => window.open("https://github.com/hamdywaleed", "_blank")}
          >
            <Github className="w-6 h-6 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects
