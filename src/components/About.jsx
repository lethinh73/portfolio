import { motion } from 'framer-motion'
import { FaCode, FaCoffee, FaHeart, FaLightbulb } from 'react-icons/fa'
import AnimatedBackground from './ui/animated-background'

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, efficient code that stands the test of time"
    },
    {
      icon: FaLightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding innovative solutions"
    },
    {
      icon: FaCoffee,
      title: "Always Learning",
      description: "Continuously expanding my knowledge and staying updated with latest tech"
    },
    {
      icon: FaHeart,
      title: "User-Focused",
      description: "Creating experiences that users love and find genuinely helpful"
    }
  ]

  return (
    <section id="about" className="relative bg-gradient-to-r from-[#171010] to-[#362222] text-white py-20 overflow-hidden">
      <AnimatedBackground variant="about" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate software developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-square">
                <img 
                  src="/images/family.jpg" 
                  alt="Thinh Le with family"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#D4AF37] rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#423F3E] rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Thinh Le, an accomplished Software Development Professional with 5+ years of experience 
                building scalable applications for real estate, education, finance, and logistics industries. 
                Currently based in Houston, Texas, I specialize in delivering feature enhancements and RESTful API integrations.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                At SOURCE Web Solutions, Inc., I've strategized new feature requests, programmed features under strict 
                timelines, and deployed up to 75 feature requests with clear documentation. I excel at facilitating 
                direct communication with users and translating technical terminologies into simple language for clients.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My technical expertise spans JavaScript, PHP, ABAP, React, Vue, Laravel, and AWS. I've designed robust 
                web applications, integrated comprehensive APIs (Twilio, RETS, Stripe, Plaid), and managed complex 
                invoicing systems using RESTful APIs and MySQL, achieving 99.9% uptime for clients.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about creating innovative, efficient digital solutions and continuously expanding my 
                knowledge. I hold certifications in SAP ABAP Cloud, Full-Stack Development, and maintain expertise 
                in Agile methodology, DevOps, and CI/CD practices.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                What drives me
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-600 p-4 rounded-lg hover:bg-slate-500 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                        <item.icon size={16} className="text-slate-300" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <p className="text-lg text-gray-300 italic">
                "The best way to predict the future is to invent it." - Alan Kay
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
