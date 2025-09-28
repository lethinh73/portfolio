import { CertificationsSection } from '@/components/certifications-section';
import CircularGallery from '@/components/circular-gallery';
import { ContactForm } from '@/components/contact-form';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import MagicBento from '@/components/magic-bento';
import NavBar from '@/components/nav-bar';
import Particles from '@/components/particles';
import { ProjectsSection } from '@/components/projects-section';
import { SummarySection } from '@/components/summary-section';
import TechnologyLoop from '@/components/technology-loop';
import TextType from '@/components/text-type';
import ThemeToggle from '@/components/theme-toggle';
import ThinhLogo from '@/components/thinh-logo';
import { Separator } from '@/components/ui/separator';
import { useAppearance } from '@/hooks/use-appearance';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Home() {
  const { appearance, updateAppearance, isDarkMode } = useAppearance();

  return (
    <>
      <Head title="Home" />

      <div className="fixed top-0 left-0 h-full w-full">
        <Particles
          particleColors={['#ffffff', '#000000']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <div id="home" className="mx-auto max-w-4xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="fixed top-5 left-0 z-50 flex w-full items-center">
          <div className="flex w-full justify-center">
            <NavBar className="pointer-events-auto" />
          </div>
          <div className="absolute right-10">
            <ThemeToggle appearance={appearance} updateAppearance={updateAppearance} />
          </div>
        </div>

        <div className="mt-20">
          <ThinhLogo />
        </div>

        <div className="md:row mt-20 flex flex-col md:mt-10 md:flex-row md:space-x-6">
          <div className="text-left md:col-3 md:w-1/2 md:pl-5">
            <h5 className="font-semibold">Hello, I'm Thinh Le</h5>
            <TextType
              text={['A Full-Stack Developer', 'A Lifelong Learner', 'A JRPG Enthusiast']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              textColors={isDarkMode ? ['#ffffff'] : ['#000000']}
              cursorCharacter="_"
              className="mt-5 text-4xl font-bold"
            />
          </div>
          <div className="mt-6 text-left md:col-9 md:mt-0 md:w-1/2 md:pl-5">
            <p className="text-gray-700 dark:text-gray-300">
              Hi, I’m Thinh — a software developer based in Houston. I specialize in building modern, scalable web applications that help people and
              businesses achieve their goals. Outside of work, I enjoy exploring new technologies, gaming, and creating side projects that bring value
              to my friends and family.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <TechnologyLoop />
        </div>

        <Separator className="my-10" />

        <motion.div
          id="gallery"
          className="relative mt-20 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-5 text-center text-2xl font-bold">Life & Adventures</h3>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600 dark:text-gray-400">
            Capturing moments with friends, family, and places I've explored. Swipe or scroll horizontally to view more photos.
          </p>
          <div className="mt-5" style={{ height: '500px' }}>
            <CircularGallery
              bend={0.5}
              textColor={isDarkMode ? '#ffffff' : '#000000'}
              borderRadius={0.05}
              scrollSpeed={1}
              scrollEase={0.05}
              items={[
                {
                  image: '/images/gallery/southernmost-point.jpg',
                  text: 'Key West Trip',
                },
                {
                  image: '/images/gallery/night-view.jpg',
                  text: 'Evening Drinks',
                },
                {
                  image: '/images/gallery/flight-view.jpg',
                  text: 'Flying Above',
                },
              ]}
            />
          </div>
        </motion.div>

        <Separator className="my-10" />

        <motion.div
          id="projects"
          className="relative mt-20 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-5 text-center text-2xl font-bold">My Projects</h3>
          <MagicBento enableSpotlight={true} glowColor="124, 58, 237">
            <ProjectsSection
              projects={[
                {
                  title: 'Unit Converter and Calculator',
                  description:
                    'A Python application that combines a number converter and a calculator, supporting Decimal, 32-bit Binary, and Hexadecimal formats. Built with PyQt5 and the struct module for IEEE 754 breakdown.',
                  image: '/images/unit-converter.png',
                  techStack: ['Python 3', 'PyQt5', 'struct'],
                  githubUrl: 'https://github.com/lethinh73/unit-converter',
                },
                {
                  title: 'Portfolio Project',
                  description:
                    'A modern web application built with Laravel 12, React 19, and Inertia.js. Features a dynamic contact form, interactive photo gallery, dark mode support, and responsive design.',
                  image: 'https://github.com/user-attachments/assets/d6e2add7-3d7b-4ed0-ba19-eee0ff76c19f',
                  techStack: ['Laravel 12', 'Inertia.js', 'React 19', 'TailwindCSS 4', 'ShadCN UI'],
                  githubUrl: 'https://github.com/lethinh73/portfolio',
                  demoUrl: 'https://thinhsoft.com',
                },
                {
                  title: 'ERP System Integration',
                  description:
                    'A SAP S/4HANA Cloud integration solution for manufacturing companies. Enhances data processing efficiency and provides seamless system administration across departments.',
                  image: '/images/image-3.jpg',
                  techStack: ['SAP', 'S/4HANA', 'ABAP Cloud', 'RESTful APIs'],
                },
              ]}
            />
          </MagicBento>
        </motion.div>

        <Separator className="my-10" />

        <motion.div
          id="resume"
          className="relative mt-20 mb-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-5 text-2xl font-bold">My Resume</h3>

          <div className="w-full max-w-5xl">
            <MagicBento enableSpotlight={true} glowColor="66, 99, 235">
              <SummarySection
                name="Thinh Le"
                title="Software Development Professional"
                summary="Accomplished and detail-oriented Software Development Professional with 3+ years of experience in building scalable applications for real estate, education, finance, and logistics industries. Delivered feature enhancements and RESTful API integrations, improving client satisfaction and operational efficiency. Passionate about creating innovative, efficient digital solutions and bridging communication between technical teams and stakeholders."
              />

              <EducationSection
                items={[
                  {
                    title: 'Bachelor of Science - BS, Software Engineering',
                    company: 'Western Governors University',
                    location: 'Houston, TX',
                    period: 'Nov 2025 - Present',
                    description: [],
                    logo: '/images/logos/wgu.jpeg',
                  },
                  {
                    title: 'Coursework toward Bachelor of Science - BS, Computer Science',
                    company: 'University of Houston-Clear Lake',
                    location: 'Houston, TX',
                    period: 'Jan 2020 - Dec 2022',
                    description: [],
                    logo: '/images/logos/uhcl.jpg',
                  },
                  {
                    title: 'Associate of Science - AS, Computer Science',
                    company: 'San Jacinto College',
                    location: 'Houston, TX',
                    period: 'Jan 2016 - Dec 2019',
                    description: [],
                    logo: '/images/logos/sanjac.jpeg',
                  },
                ]}
              />

              <CertificationsSection
                certifications={[
                  {
                    title: 'SAP Certified Associate - Back-End Developer - ABAP Cloud',
                    issuer: 'SAP',
                    year: '2025',
                  },
                  {
                    title: 'Building Full-Stack Apps with React and Spring',
                    issuer: 'LinkedIn',
                    year: '2023',
                  },
                  {
                    title: 'Software Engineer',
                    issuer: 'HackerRank',
                    year: '2025',
                  },
                  {
                    title: 'Programming Foundations: Fundamentals',
                    issuer: 'LinkedIn',
                    year: '2021',
                  },
                ]}
              />
            </MagicBento>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MagicBento enableSpotlight={true} glowColor="245, 158, 11">
                <ExperienceSection
                  items={[
                    {
                      title: 'Software Developer',
                      company: 'SOURCE Web Solutions, Inc.',
                      location: 'Friendswood, Texas, United States',
                      period: 'May 2022 - Feb 2025',
                      logo: '/images/logos/source.png',
                      description: [
                        'Strategized new feature requests, communicated with clientele and fellow developers, programmed features under strict timelines and budgets.',
                        'Facilitated direct communication with users to solve problems and assisted management in translating technical terminologies into simple language.',
                        'Developed and maintained robust web applications for clients across real estate, education, finance, and logistics industries.',
                        'Integrated APIs for automated communication (Twilio), data retrieval (RETS), payment processing (Stripe), and bank transactions (Plaid).',
                        'Deployed applications to AWS and Digital Ocean hosts, ensuring reliability and scalability with 99.9% uptime for clients.',
                      ],
                    },
                    {
                      title: 'Technology Intern',
                      company: 'Labs196',
                      location: 'Sugar Land, Texas, United States',
                      period: 'Aug 2021 - Nov 2021',
                      logo: '/images/logos/labs196.jpeg',
                      description: [
                        'Built and deployed websites using ReactJS, React Native, and VueJS, improving user experience.',
                        'Assisted in database management, ensuring data integrity and smooth operational workflows, reducing data retrieval times by 50%.',
                      ],
                    },
                    {
                      title: 'ERP Specialist',
                      company: 'Accredo Packaging, Inc.',
                      location: 'Sugar Land, Texas, United States',
                      period: 'Jun 2019 - Mar 2021',
                      logo: '/images/logos/accredo.jpeg',
                      description: [
                        'Provided technical and functional support for ERP systems, improving operational efficiency.',
                        'Implemented best practices for ERP systems, ensuring scalability and reliability, reducing downtime.',
                      ],
                    },
                  ]}
                />
              </MagicBento>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="my-10" />

        <motion.div>
          <motion.div
            id="contact"
            className="relative mt-20 mb-10 flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-5 text-2xl font-bold">Contact Me</h3>
            <motion.div
              className="flex w-full justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="my-5" />

        <motion.footer
          className="mb-5 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Thinh Le. All rights reserved.
        </motion.footer>
      </div>
    </>
  );
}
