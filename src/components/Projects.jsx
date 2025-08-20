import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing. Features include user authentication, product catalog, shopping cart, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application built with React Native for cross-platform mobile development. Includes real-time updates, offline sync, and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      features: [
        "Cross-platform mobile application",
        "Real-time collaboration",
        "Offline data synchronization"
      ]
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "An interactive business analytics dashboard featuring real-time data visualization, custom charts, and export functionality. Built with modern web technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/alexjohnson/analytics-dashboard",
      features: [
        "Interactive data visualizations",
        "Real-time data updates",
        "Custom chart configurations"
      ]
    },
    {
      id: 4,
      title: "Open Source Contribution",
      description: "Significant contributions to popular open-source projects including bug fixes, feature implementations, and documentation improvements. Active maintainer of several community projects.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "TypeScript", "Python", "Documentation"],
      githubUrl: "https://github.com/alexjohnson/opensource-contributions",
      features: [
        "Bug fixes and performance improvements",
        "New feature implementations",
        "Documentation enhancements"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects, demonstrating my skills across different technologies and domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects

