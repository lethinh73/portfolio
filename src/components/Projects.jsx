import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaGlobe } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import AnimatedBackground from './ui/animated-background'

const Projects = () => {
  const projects = [
    {
      title: "Form Prefill Configuration UI",
      description: "A sophisticated React application that provides an interactive user interface to visualize flow graphs of forms and configure field prefill mappings. Built with modern React patterns and styled with Tailwind CSS for optimal user experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "REST API", "Flow Graph"],
      features: [
        "Interactive Flow Graph with clickable form nodes for detailed views",
        "Prefill Configuration system for mapping form fields to data sources",
        "Intuitive modal-based UI for selecting and configuring prefill sources",
        "Modern React architecture with functional components and hooks",
        "Clean separation of concerns with organized component structure",
        "Extensible design supporting multiple data source types"
      ],
      github: "https://github.com/lethinh73/form-prefill",
      demo: "#",
      image: "/images/project1.png"
    },
    {
      title: "Unit Converter and Calculator",
      description: "A comprehensive desktop application developed for University Software Engineering course, combining advanced number conversion and calculator functionality. Features support for Decimal, Binary (32-bit), and Hexadecimal formats with IEEE 754 representation breakdown.",
      technologies: ["Python 3", "PyQt5", "GUI Development", "IEEE 754", "Binary Operations", "Desktop App"],
      features: [
        "Multi-format number conversion between Decimal, Binary, and Hexadecimal",
        "IEEE 754 floating-point representation with Sign, Exponent, and Mantissa breakdown",
        "Comprehensive calculator with arithmetic operations (Add, Subtract, Multiply, Divide)",
        "Advanced bitwise operations (AND, OR, XOR, NOT, Left Shift, Right Shift)",
        "Professional PyQt5 GUI with intuitive tabbed interface design",
        "Team collaboration project showcasing software engineering best practices"
      ],
      github: "https://github.com/lethinh73/unit-converter",
      demo: "#",
      image: "/images/project2.png"
    },
    {
      title: "Grab Easy - Mobile Food Ordering UI",
      description: "A sophisticated front-end mobile web application built with Vue.js 3 that simulates a complete food ordering experience. Features modern mobile-first design with intuitive navigation and responsive UI optimized for smartphone screens.",
      technologies: ["Vue.js 3", "Vue Router 4", "JavaScript", "Mobile UI/UX", "Responsive Design", "Axios"],
      features: [
        "User onboarding system with mobile number and OTP simulation",
        "Intuitive bottom navigation for Home, Orders, Offers, and Profile sections",
        "Dynamic home screen with promotional content and food outlet placeholders",
        "Comprehensive user profile view with notifications and social links",
        "Mobile-first responsive design optimized for smartphone experience",
        "Team collaboration showcasing modern frontend development practices"
      ],
      github: "https://github.com/lethinh73/grab-easy",
      demo: "#",
      image: "/images/project3.png"
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })

  return (
    <section ref={ref} id="projects" className="relative bg-gradient-to-r from-[#362222] to-[#423F3E] text-white py-16 overflow-hidden">
      {isInView && <AnimatedBackground variant="projects" />}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-slate-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] border border-slate-500"
            >
              <div className="lg:flex">
                {/* Project Image/Visual */}
                <div className="lg:w-1/3 flex items-center justify-center p-4">
                  <div className="max-h-[400px] w-full relative overflow-hidden bg-slate-600 rounded-xl border border-slate-500 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with project title */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                                    <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="flex space-x-3">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-slate-700 transition-colors duration-300"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
                        >
                          <FaGithub size={20} />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white hover:bg-slate-700 transition-colors duration-300"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <FaExternalLinkAlt size={20} />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-600 text-white text-sm rounded-full border border-slate-500 hover:border-slate-400 hover:bg-slate-500 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-3 h-auto rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-500"
          >
            <a href="https://github.com/lethinh73" className="inline-flex items-center space-x-2">
              <FaGithub size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
