import CircularGallery from '@/components/circular-gallery';
import { ContactForm } from '@/components/contact-form';
import NavBar from '@/components/nav-bar';
import Particles from '@/components/particles';
import TechnologyLoop from '@/components/technology-loop';
import TextType from '@/components/text-type';
import ThemeToggle from '@/components/theme-toggle';
import SpotlightCard from '@/components/spotlight-card';
import ThinhLogo from '@/components/thinh-logo';
import { Separator } from '@/components/ui/separator';
import { useAppearance } from '@/hooks/use-appearance';
import { Head } from '@inertiajs/react';

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

        <div className="mt-10" style={{ height: '500px' }}>
          <CircularGallery bend={0.5} textColor="#ffffff" borderRadius={0.05} scrollSpeed={1} scrollEase={0.05} />
        </div>

        <Separator className="my-10" />

        <div id="projects" className="relative mt-20 mb-10 flex flex-col items-center">
          <h3 className="mb-5 text-2xl font-bold">Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)">
              <img src="https://placehold.co/600x400" alt="Project 2" className="h-48 w-full rounded-lg" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Project 2</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A brief description of the project goes here. Highlight its purpose and key features.
                </p>

                <div className="mt-4 flex gap-2">
                  <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    View Project
                  </a>
                  <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    Demo
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        <Separator className="my-10" />

        <div id="contact" className="relative mt-20 mb-10 flex flex-col items-center">
          <h3 className="mb-5 text-2xl font-bold">Contact Me</h3>
          <ContactForm />
        </div>

        <Separator className="my-5" />

        <footer className="mb-5 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Thinh Le. All rights reserved.</footer>
      </div>
    </>
  );
}
