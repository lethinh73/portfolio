import CircularGallery from '@/components/circular-gallery';
import { ContactForm } from '@/components/contact-form';
import LogoLoop from '@/components/logo-loop';
import Particles from '@/components/particles';
import TextType from '@/components/text-type';
import { Separator } from '@/components/ui/separator';
import { Head } from '@inertiajs/react';
import { SiMysql, SiPhp, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className={'relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400'}>
        {children}
      </a>
    </li>
  );
}

function NavBar(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex justify-between rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <div className="mt-10 flex justify-center space-x-4">
      <img src="/images/avatar.jpg" alt="Logo" className="h-32 w-32 rounded-full border-4 border-white shadow-lg" />
    </div>
  );
}

function Technologies() {
  const techLogos = [
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiReact />
          React
        </span>
      ),
      title: 'React',
      href: 'https://react.dev',
    },
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiTypescript />
          TypeScript
        </span>
      ),
      title: 'TypeScript',
      href: 'https://www.typescriptlang.org',
    },
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiTailwindcss />
          Tailwind CSS
        </span>
      ),
      title: 'Tailwind CSS',
      href: 'https://tailwindcss.com',
    },
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiPhp />
          PHP
        </span>
      ),
      title: 'PHP',
      href: 'https://www.php.net',
    },
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiMysql />
          MySQL
        </span>
      ),
      title: 'MySQL',
      href: 'https://www.mysql.com',
    },
    {
      node: (
        <span className="flex flex-row items-center gap-1 text-lg">
          <SiPython />
          Python
        </span>
      ),
      title: 'Python',
      href: 'https://www.python.org',
    },
  ];

  return (
    <div style={{ height: '80px', position: 'relative', overflow: 'hidden', paddingTop: '20px' }}>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={30}
        gap={50}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}

export default function Home() {
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

      <div className="mx-auto max-w-4xl px-4 pt-5 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <NavBar className="pointer-events-auto" />
        </div>
        <Logo />

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
              cursorCharacter="_"
              className="mt-5 text-4xl font-bold dark:text-white text-black"
            />
          </div>
          <div className="mt-6 text-left md:col-9 md:mt-0 md:w-1/2 md:pl-5">
            <p className="text-gray-300">
              Hi, I’m Thinh — a software developer based in Houston. I specialize in building modern, scalable web applications that help people and
              businesses achieve their goals. Outside of work, I enjoy exploring new technologies, gaming, and creating side projects that bring value
              to my friends and family.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Technologies />
        </div>

        <Separator className="my-10" />

        <div className="mt-10" style={{ height: '500px' }}>
          <CircularGallery bend={0.5} textColor="#ffffff" borderRadius={0.05} scrollSpeed={1} scrollEase={0.05} />
        </div>

        <Separator className="my-10" />

        <div id="contact" className="relative mt-20 mb-10 flex flex-col items-center">
          <h3 className="mb-5 text-2xl font-bold">Contact Me</h3>
          <ContactForm />
        </div>

        <Separator className="my-10" />

        <footer className="mb-5 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Thinh Le. All rights reserved.</footer>
      </div>
    </>
  );
}
