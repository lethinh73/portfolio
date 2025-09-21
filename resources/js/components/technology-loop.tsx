import { SiMysql, SiPhp, SiPython, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import LogoLoop from '@/components/logo-loop';

function TechnologyLoop() {
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

export default TechnologyLoop;
