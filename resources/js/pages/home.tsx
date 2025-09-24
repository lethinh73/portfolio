import CircularGallery from '@/components/circular-gallery';
import { ContactForm } from '@/components/contact-form';
import NavBar from '@/components/nav-bar';
import Particles from '@/components/particles';
import SpotlightCard from '@/components/spotlight-card';
import TechnologyLoop from '@/components/technology-loop';
import TextType from '@/components/text-type';
import ThemeToggle from '@/components/theme-toggle';
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
          <h3 className="mb-5 text-2xl font-bold">My Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SpotlightCard
              className="rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <img src="/images/unit-converter.png" alt="Unit Converter and Calculator" className="h-48 w-full rounded-t-lg object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Unit Converter and Calculator</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A Python application that combines a number converter and a calculator, supporting Decimal, 32-bit Binary, and Hexadecimal formats.
                  Built with PyQt5 and the struct module for IEEE 754 breakdown.
                </p>
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</h5>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">Python 3</li>
                    <li className="rounded bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">PyQt5</li>
                    <li className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-800 dark:bg-purple-900 dark:text-purple-200">struct</li>
                  </ul>
                </div>

                <div className="mt-4 flex justify-between gap-2">
                  <a
                    href="https://github.com/lethinh73/unit-converter"
                    className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View Source
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="pointer-events-none inline-block text-sm font-medium text-gray-500 opacity-50 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <img
                src="https://github.com/user-attachments/assets/d6e2add7-3d7b-4ed0-ba19-eee0ff76c19f"
                alt="Portfolio Project"
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Portfolio Project</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A modern web application built with Laravel 12, React 19, and Inertia.js. Features a dynamic contact form, interactive photo
                  gallery, dark mode support, and responsive design.
                </p>
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</h5>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="rounded bg-indigo-100 px-2 py-1 text-xs text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">Laravel 12</li>
                    <li className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">Inertia.js</li>
                    <li className="rounded bg-sky-100 px-2 py-1 text-xs text-sky-800 dark:bg-sky-900 dark:text-sky-200">React 19</li>
                    <li className="rounded bg-teal-100 px-2 py-1 text-xs text-teal-800 dark:bg-teal-900 dark:text-teal-200">TailwindCSS 4</li>
                    <li className="rounded bg-pink-100 px-2 py-1 text-xs text-pink-800 dark:bg-pink-900 dark:text-pink-200">ShadCN UI</li>
                  </ul>
                </div>

                <div className="mt-4 flex justify-between gap-2">
                  <a
                    href="https://github.com/lethinh73/portfolio"
                    className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                  >
                    View Source
                  </a>
                  <a href="https://thinhsoft.com" className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    Live Demo
                  </a>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <img src="https://placehold.co/600x400" alt="Sample Project" className="h-48 w-full rounded-t-lg object-cover" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">Sample Project</h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  A brief showcase project with placeholder content. Replace with your actual project details.
                </p>
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</h5>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-800 dark:bg-gray-900 dark:text-gray-200">Placeholder</li>
                  </ul>
                </div>
                <div className="mt-4 flex justify-between gap-2">
                  <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    View Source
                  </a>
                  <a href="#" className="inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    Live Demo
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
