import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { FiMail, FiBriefcase, FiBookOpen, FiChevronDown } from 'react-icons/fi';

import TextType from '@/components/TextType';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import {
  FiGithub,
  FiFacebook,
  FiLinkedin,
} from 'react-icons/fi';
import logoSource from '@/images/logos/source.png';
import logoLabs196 from '@/images/logos/labs196.jpeg';
import logoAccredo from '@/images/logos/accredo.jpeg';
import logoWGU from '@/images/logos/wgu.jpeg';
import logoUHCL from '@/images/logos/uhcl.jpg';
import logoSanjac from '@/images/logos/sanjac.jpeg';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Contact() {
  return (
    <form
      action="/thankyou"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FiMail className="h-6 w-6 flex-none" />
        <span className="ml-3">Have a question?</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Please feel free to enter any questions you may have and I will try my
        best to get back to you as soon as I can.
      </p>
      <div className="mt-6 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full name"
          aria-label="Full name"
          required
          className="appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />

        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />

        <textarea
          placeholder="Message"
          aria-label="Message"
          required
          className="appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />

        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </div>
    </form>
  );
}

function Role({ role }) {
  const start = role.start;
  const end = role.end;
  const title = role.company || role.school;
  const logo = role.logo;
  const subtitle = role.title || role.degree;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          {start} <span aria-hidden="true">—</span> {end}
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let work = [
    {
      company: 'Source Web Solutions',
      title: 'Software Developer',
      logo: logoSource,
      start: 'May, 2022',
      end: 'Present',
    },
    {
      company: 'Labs196',
      title: 'Tech Intern',
      logo: logoLabs196,
      start: 'Aug, 2021',
      end: 'Nov, 2021',
    },
    {
      company: 'Accredo Packaging',
      title: 'ERP Support Specialist',
      logo: logoAccredo,
      start: '2011',
      end: '2014',
    },
  ];

  let education = [
    {
      school: 'Western Governors University',
      degree: 'B.S. in Computer Science',
      logo: logoWGU,
      start: '2025',
      end: '2026',
    },
    {
      school: 'University of Houston - Clear Lake',
      degree: 'B.S. in Computer Science',
      logo: logoUHCL,
      start: '2020',
      end: '2022',
    },
    {
      school: 'San Jacinto College',
      degree: 'A.S. in Computer Science',
      logo: logoSanjac,
      start: '2016',
      end: '2019',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FiBriefcase className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {work.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <h2 className="mt-6 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <FiBookOpen className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <Button
        href="/documents/RESUME.pdf"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        My Resume
        <FiChevronDown className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

function Photos() {
  let rotations = ['-rotate-2', 'rotate-2', 'rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Thinh Le
            <br />
            <TextType
              text={['Software Developer', 'Game Lover', 'Lifelong Learner']}
              typingSpeed={65}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="_"
            />
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi, I’m Thinh — a software developer based in Houston. I specialize
            in building modern, scalable web applications that help people and
            businesses achieve their goals. Outside of work, I enjoy exploring
            new technologies, gaming, and creating side projects that bring
            value to my friends and family.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://facebook.com/lethinh7373"
              target="_blank"
              aria-label="Follow on Facebook"
              icon={FiFacebook}
            />
            <SocialLink
              href="https://github.com/lethinh73"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={FiGithub}
            />
            <SocialLink
              href="https://linkedin.com/in/lethinh73"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={FiLinkedin}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Contact />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
