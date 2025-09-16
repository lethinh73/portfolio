import GooeyNav from '@/components/GooeyNav';
import LogoLoop from '@/components/LogoLoop';
import TextType from '@/components/TextType';
import { Head } from '@inertiajs/react';
import { SiMysql, SiPhp, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';

function NavBar() {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-10 flex w-full justify-center bg-transparent" style={{ height: '100px', position: 'relative' }}>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

function Logo() {
  return (
    <div className="mt-5 flex justify-center space-x-4">
      <img src="/images/avatar.jpg" alt="Logo" className="h-32 w-32 rounded-full border-4 border-white shadow-lg" />
    </div>
  );
}

function Technologies() {
  const techLogos = [
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiReact />React</span>, title: "React", href: "https://react.dev" },
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiTypescript />TypeScript</span>, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiTailwindcss />Tailwind CSS</span>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiPhp />PHP</span>, title: "PHP", href: "https://www.php.net" },
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiMysql />MySQL</span>, title: "MySQL", href: "https://www.mysql.com" },
    { node: <span className='flex flex-row items-center gap-1 text-lg'><SiPython />Python</span>, title: "Python", href: "https://www.python.org" },
  ];

  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={30}
        gap={50}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="black"
        ariaLabel="Technologies I work with"
      />
    </div>
  );
}

export default function Home() {

  return (
    <>
      <Head title="Home" />
      <NavBar />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Logo />

        <div className="mt-20 flex flex-col md:mt-10 md:flex-row md:space-x-6">
          <div></div>
          <div className="text-left md:w-1/2 md:pl-5">
            <h5 className="font-semibold">Hello, I'm Thinh Le</h5>
            <TextType
              text={['A Full-Stack Developer', 'A Role-Playing Game Enthusiast', 'A Lifelong Learner']}
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              loop
              className="mt-2 text-2xl text-blue-600"
            />
          </div>
          <div className="mt-6 text-left md:mt-0 md:w-1/2 md:pl-5">
            <p className="text-gray-600">
              Welcome to my personal website! Here you'll find information about my projects, skills, and how to get in touch with me. Feel free to
              explore and reach out if you'd like to collaborate or just say hi!
            </p>
          </div>
          <div></div>
        </div>

        <div className="mt-10 flex justify-center space-x-4">
          <Technologies />
        </div>
      </div>
    </>
  );
}
