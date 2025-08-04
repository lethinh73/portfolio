import { motion } from 'framer-motion'
import AnimatedBackground from './ui/animated-background'
import { 
  FaCode, 
  FaDatabase, 
  FaGlobe, 
  FaServer, 
  FaPalette,
  FaGitAlt,
  FaTerminal,
  FaLaptopCode,
  FaTools,
  FaCloud
} from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      color: "from-[#D4AF37] to-[#B8860B]",
      skills: ["JavaScript", "PHP", "ABAP", "HTML5/CSS", "MySQL", "Python"]
    },
    {
      title: "Frameworks & APIs",
      icon: FaServer,
      color: "from-orange-500 to-red-600",
      skills: ["Laravel", "React", "Vue.js", "RESTful APIs", "Node.js", "jQuery"]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      color: "from-[#2B2B2B] to-[#423F3E]",
      skills: ["AWS", "Docker", "Linux Admin", "CI/CD", "GitHub", "Digital Ocean"]
    },
    {
      title: "Enterprise & Methodologies",
      icon: FaDatabase,
      color: "from-[#423F3E] to-[#362222]",
      skills: ["SAP S/4HANA", "Agile/Scrum", "DevOps", "Unit Testing", "ERP Systems", "API Integration"]
    }
  ]

  const SkillTag = ({ skill, index }) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="inline-block bg-slate-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-500 hover:border-slate-400 hover:bg-slate-500 transition-all duration-300"
    >
      {skill}
    </motion.span>
  )

  return (
    <section id="skills" className="relative bg-gradient-to-r from-[#423F3E] to-[#171010] text-white py-16 overflow-hidden">
      <AnimatedBackground variant="skills" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-slate-600 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-500"
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Tools & Workflow
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaGitAlt, name: "Git & GitHub", color: "text-[#D4AF37]" },
              { icon: FaTerminal, name: "Command Line", color: "text-orange-400" },
              { icon: FaLaptopCode, name: "VS Code", color: "text-[#D4AF37]" },
              { icon: FaTools, name: "Design Tools", color: "text-[#D4AF37]" }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-600 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-500"
              >
                <tool.icon size={32} className={`mx-auto mb-3 ${tool.color}`} />
                <p className="font-medium text-white">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
