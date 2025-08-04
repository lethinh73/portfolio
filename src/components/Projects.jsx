import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaGlobe } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import AnimatedBackground from './ui/animated-background'

const Projects = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"],
      features: [
        "Feature description placeholder one",
        "Feature description placeholder two",
        "Feature description placeholder three",
        "Feature description placeholder four",
        "Feature description placeholder five",
        "Feature description placeholder six"
      ],
      github: "https://github.com/lethinh73",
      demo: "#",
      gradient: "from-[#D4AF37] to-[#B8860B]",
      image: "/images/project1.png"
    },
    {
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      technologies: ["Vue.js", "Laravel", "MySQL", "PHP", "JavaScript", "Docker"],
      features: [
        "Feature description placeholder one",
        "Feature description placeholder two",
        "Feature description placeholder three",
        "Feature description placeholder four",
        "Feature description placeholder five",
        "Feature description placeholder six"
      ],
      github: "https://github.com/lethinh73",
      demo: "#",
      gradient: "from-orange-500 to-amber-600",
      image: "/images/project2.png"
    },
    {
      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "API", "Linux"],
      features: [
        "Feature description placeholder one",
        "Feature description placeholder two",
        "Feature description placeholder three",
        "Feature description placeholder four",
        "Feature description placeholder five",
        "Feature description placeholder six"
      ],
      github: "https://github.com/lethinh73",
      demo: "#",
      gradient: "from-[#2B2B2B] to-[#423F3E]",
      image: "/images/project3.png"
    }
  ]

  return (
    <section id="projects" className="relative bg-gradient-to-r from-[#362222] to-[#423F3E] text-white py-16 overflow-hidden">
      <AnimatedBackground variant="projects" />
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
                <div className="lg:w-1/2 flex items-center justify-center p-4">
                  <div className="h-64 w-full relative overflow-hidden bg-slate-600 rounded-xl border border-slate-500 shadow-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with project title */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
                    </div>
                    
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-8 h-8 bg-white/20 rounded-full"
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute top-1/2 left-4 w-4 h-4 bg-white/15 rounded-full"
                      animate={{ x: [0, 20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
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
