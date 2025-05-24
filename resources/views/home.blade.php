<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Thinh Le, a Full-Stack Web Developer based in Houston, Texas." />
  <title>Thinh Le - Full-Stack Web Developer</title>

  @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  @endif

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lexend:wght@400;600;700&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="{{ asset('css/home.css') }}" />
</head>

<body class="bg-gray-950 text-gray-200 antialiased">
  <nav class="sticky top-0 z-50 p-4 bg-gray-900 shadow-xl border-b border-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <a href="#hero" class="text-3xl font-extrabold text-cyan-400 tracking-wide font-lexend">Thinh Le</a>
      <div class="space-x-6 text-lg hidden md:flex" id="nav-links">
        <a href="#about"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">About</a>
        <a href="#skills"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Skills</a>
        <a href="#experience"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Experience</a>
        <a href="#projects"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Projects</a>
        <a href="#education"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Education</a>
        <a href="#family"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Family</a>
        <a href="#contact"
          class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out relative nav-link-underline">Contact</a>
      </div>
      <button id="mobile-toggle" class="md:hidden text-gray-300 text-2xl hover:text-cyan-400 focus:outline-none" aria-label="Toggle navigation menu" aria-expanded="false">
        <i class="fas fa-bars" id="menu-icon"></i>
      </button>
    </div>
    <div class="mobile-nav hidden md:hidden" id="mobile-nav">
      <div class="flex flex-col space-y-4 p-4 text-lg">
        <a href="#about" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">About</a>
        <a href="#skills" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Skills</a>
        <a href="#experience" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Experience</a>
        <a href="#projects" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Projects</a>
        <a href="#education" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Education</a>
        <a href="#family" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Family</a>
        <a href="#contact" class="text-gray-300 hover:text-cyan-400 transition duration-300 ease-in-out">Contact</a>
      </div>
    </div>
  </nav>

  <section
    class="relative flex items-center justify-center min-h-[80vh] text-center text-white py-12 hero-gradient-animated"
    id="hero">
    <div class="absolute inset-0 bg-dark-grid opacity-70"></div>
    <div class="container p-6 relative z-10">
      <img src="{{ asset('images/avatar.jpg') }}" alt="Thinh Le Headshot"
        class="mx-auto mb-5 rounded-full border-4 border-cyan-400 shadow-2xl animate-float transform transition-transform duration-500 hover:scale-105 w-48 h-48 object-cover" loading="lazy" />
      <h1
        class="mb-3 text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-white font-lexend">
        Thinh Le
      </h1>
      <p class="mb-6 text-2xl md:text-3xl font-light text-gray-300">
        Full-Stack Web Developer
      </p>
      <p class="max-w-4xl mx-auto text-lg leading-relaxed mb-8 text-gray-300">
        Software Developer with nearly three years of dedicated experience
        building scalable applications for real estate, education, finance,
        and logistics industries. Delivered 75+ feature enhancements and
        RESTful API integrations, improving client satisfaction and
        operational efficiency. Passionate about creating innovative,
        efficient digital solutions and bridging communication between
        technical teams and stakeholders.
      </p>
      <a href="#projects"
        class="inline-block px-8 py-3 text-xl font-semibold text-gray-900 bg-cyan-400 rounded-full shadow-lg hover:bg-cyan-300 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105 animate-pulse-btn">View
        My Work <i class="fas fa-arrow-right ml-2"></i></a>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-900 text-gray-300 section-divider-top" id="about">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        About Me
      </h2>
      <div class="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
        <p class="mb-4">
          Hi, I'm Thinh Le, a passionate Full-Stack Web Developer based in
          Houston, Texas, United States. My journey in software development
          has been focused on building scalable applications that make a real
          impact. I have a strong foundation in both front-end and back-end
          technologies, allowing me to craft comprehensive digital solutions.
        </p>
        <p class="mb-4">
          During my nearly three years of experience, I've had the opportunity
          to work across various sectors, including real estate, education,
          finance, and logistics. I thrive on delivering innovative and
          efficient solutions that not only meet but exceed client
          expectations.
        </p>
        <p>
          Beyond coding, I'm adept at bridging communication gaps between
          technical teams and stakeholders, ensuring that projects align with
          business goals. I am continuously expanding my knowledge and
          embracing new challenges in the ever-evolving world of web
          development. You can reach me at
          <a href="tel:+17138150775" class="text-cyan-400 hover:underline transition duration-300"><i
              class="fas fa-phone mr-1"></i>(713) 815-0775</a>
          or
          <a href="mailto:lethinh73@gmail.com" class="text-cyan-400 hover:underline transition duration-300"><i
              class="fas fa-envelope mr-1"></i>lethinh73@gmail.com</a>.
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-950 text-gray-300 section-divider-bottom" id="skills">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">Top Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <div class="p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 card-hover-effect">
          <h3 class="mb-3 text-xl font-semibold text-teal-400"><i class="fas fa-code mr-2"></i>Programming Languages & Frameworks</h3>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="font-medium"><i class="fab fa-js mr-2 text-yellow-400"></i>JavaScript</span></li>
            <li><span class="font-medium"><i class="fab fa-php mr-2 text-purple-400"></i>PHP</span></li>
            <li><span class="font-medium"><i class="fab fa-html5 mr-2 text-orange-400"></i>HTML5</span></li>
            <li><span class="font-medium"><i class="fab fa-css3-alt mr-2 text-blue-400"></i>CSS</span></li>
            <li><span class="font-medium"><i class="fas fa-database mr-2 text-indigo-400"></i>MySQL</span></li>
            <li><span class="font-medium"><i class="fab fa-laravel mr-2 text-red-400"></i>Laravel</span></li>
            <li><span class="font-medium"><i class="fab fa-react mr-2 text-cyan-400"></i>React</span></li>
            <li><span class="font-medium"><i class="fab fa-vuejs mr-2 text-green-400"></i>Vue.js</span></li>
            <li><span class="font-medium"><i class="fas fa-exchange-alt mr-2 text-gray-400"></i>RESTful APIs</span></li>
          </ul>
        </div>
        <div class="p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 card-hover-effect">
          <h3 class="mb-3 text-xl font-semibold text-teal-400"><i class="fas fa-project-diagram mr-2"></i>Design & Methodologies</h3>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="font-medium"><i class="fas fa-users-cog mr-2 text-pink-400"></i>Agile Methodology</span></li>
            <li><span class="font-medium"><i class="fas fa-people-group mr-2 text-orange-400"></i>Scrum Methodology</span></li>
            <li><span class="font-medium"><i class="fas fa-cogs mr-2 text-gray-400"></i>DevOps</span></li>
            <li><span class="font-medium"><i class="fas fa-sync-alt mr-2 text-blue-400"></i>CI/CD</span></li>
            <li><span class="font-medium"><i class="fas fa-vial mr-2 text-green-400"></i>Unit Testing</span></li>
          </ul>
        </div>
        <div class="p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 card-hover-effect">
          <h3 class="mb-3 text-xl font-semibold text-teal-400"><i class="fas fa-tools mr-2"></i>Tools & Platforms</h3>
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="font-medium"><i class="fab fa-aws mr-2 text-orange-500"></i>AWS</span></li>
            <li><span class="font-medium"><i class="fab fa-linux mr-2 text-yellow-500"></i>Linux Administration (Ubuntu, Debian, Amazon Linux)</span></li>
            <li><span class="font-medium"><i class="fab fa-github mr-2 text-white"></i>GitHub</span></li>
            <li><span class="font-medium"><i class="fab fa-docker mr-2 text-blue-500"></i>Docker</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-900 text-gray-300 section-divider-top" id="experience">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        Experience
      </h2>

      <div class="max-w-4xl mx-auto space-y-4">
        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-briefcase text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-2xl font-bold">Software Developer</h3>
                <p class="text-lg text-blue-500">
                  SOURCE Web Solutions, Inc.
                </p>
              </div>
            </div>
            <p class="text-gray-400 text-md ml-4 hidden md:block">
              May 2022 - Feb 2025 | Friendswood, Texas, United States
            </p>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Collaborated with clients and developers to strategize and
                implement 75+ feature requests, meeting strict timelines and
                budgets.
              </li>
              <li>
                Deployed features and patches with detailed patch notes,
                enhancing application reliability, reducing post-deployment
                issues by 15%.
              </li>
              <li>
                Developed web applications for real estate, education,
                finance, and logistics using PHP 7 and 8, MySQL 8, and
                JavaScript (ES6), improving client workflows.
              </li>
              <li>
                Integrated APIs (Twilio, Stripe, Mailgun) for automated
                communication and payment processing, streamlining operations.
              </li>
              <li>
                Designed user-friendly front-end interfaces paired with robust
                backends, boosting user engagement.
              </li>
              <li>
                Documented code comprehensively, which increased team
                productivity by 15%.
              </li>
              <li>
                Deployed applications on AWS and Digital Ocean, resolving bugs
                to ensure 99.9% uptime.
              </li>
            </ul>
          </div>
        </details>

        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-flask text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-2xl font-bold">Technology Intern</h3>
                <p class="text-lg text-blue-500">Labs196</p>
              </div>
            </div>
            <p class="text-gray-400 text-md ml-4 hidden md:block">
              Aug 2021 - Nov 2021 | Sugar Land, Texas, United States
            </p>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Built and deployed websites using ReactJS, React Native, and
                VueJS, improving user experience.
              </li>
              <li>
                Collaborated with the Tech Intern Team to troubleshoot coding
                and deployment issues, improving web application stability and
                performance.
              </li>
              <li>
                Assisted in database management, ensuring data integrity and
                smooth operational workflows, reducing data retrieval times by
                50%.
              </li>
            </ul>
          </div>
        </details>

        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-desktop text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-2xl font-bold">ERP Support Specialist</h3>
                <p class="text-lg text-blue-500">Accredo Packaging, Inc.</p>
              </div>
            </div>
            <p class="text-gray-400 text-md ml-4 hidden md:block">
              Jun 2019 - Mar 2021 | Sugar Land, Texas, United States
            </p>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Provided technical and functional support for ERP systems,
                including system administration, problem resolution, and
                process mapping, improving operational efficiency.
              </li>
              <li>
                Designed and implemented data processing solutions, boosting
                ERP performance by 10%.
              </li>
              <li>
                Implemented best practices for ERP systems, ensuring
                scalability and reliability, reducing downtime.
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-950 text-gray-300 section-divider-bottom" id="projects">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        My Projects
      </h2>
      <p class="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-8">
        Here are some of the projects I've worked on, showcasing my skills and experience in full-stack web development.
      </p>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">  <!-- This is the main grid container for all projects -->
        <div class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 card-hover-effect group">
          <img src="{{ asset('images/project1.png') }}" alt="Form Prefill Configuration UI Screenshot"
            class="w-full h-48 object-cover" loading="lazy" />
          <div class="p-5">
            <h3 class="mb-2 text-xl font-semibold text-gray-100">
              Form Prefill Configuration UI
            </h3>
            <p class="mb-4 text-gray-300 text-sm">
              This project provides a user interface to visualize a flow graph of forms and configure field prefill mappings.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-700 rounded-full">React</span>
              <span class="px-2 py-1 text-xs font-semibold text-green-200 bg-green-700 rounded-full">HTML5</span>
              <span class="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-700 rounded-full">ReactFlow</span>
              <span class="px-2 py-1 text-xs font-semibold text-red-200 bg-red-700 rounded-full">Tailwind CSS</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/lethinh73/0dc41e"
                class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
                GitHub <i class="fab fa-github ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 card-hover-effect group">
          <img src="{{ asset('images/project2.png') }}" alt="Unit Converter UI Screenshot"
            class="w-full h-48 object-cover" loading="lazy" />
          <div class="p-5">
            <h3 class="mb-2 text-xl font-semibold text-gray-100">
              Unit Converter
            </h3>
            <p class="mb-4 text-gray-300 text-sm">
              This is a project that combines a number converter and a calculator, supporting Decimal, Binary (IEEE-754 Floating Point), and Hexadecimal formats.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-700 rounded-full">Python3</span>
              <span class="px-2 py-1 text-xs font-semibold text-green-200 bg-green-700 rounded-full">PyQt5</span>
              <span class="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-700 rounded-full">IEEE-754 Standard</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/lethinh73/unit-converter"
                class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
                GitHub <i class="fab fa-github ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-lg border border-gray-700 card-hover-effect group">
          <img src="{{ asset('images/project3.png') }}" alt="Grab Easy UI Screenshot"
            class="w-full h-48 object-cover" loading="lazy" />
          <div class="p-5">
            <h3 class="mb-2 text-xl font-semibold text-gray-100">
              Grab Easy
            </h3>
            <p class="mb-4 text-gray-300 text-sm">
              A modern, responsive front-end web application designed to simulate a seamless mobile food ordering experience
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-700 rounded-full">Vue.js</span>
              <span class="px-2 py-1 text-xs font-semibold text-green-200 bg-green-700 rounded-full">Javascript</span>
              <span class="px-2 py-1 text-xs font-semibold text-purple-200 bg-purple-700 rounded-full">CSS</span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <a href="https://github.com/lethinh73/grab-easy"
                class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
                GitHub <i class="fab fa-github ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-900 text-gray-300 section-divider-top" id="education">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        Education & Certifications
      </h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-orange-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-university text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-xl font-bold">
                  University of Houston-Clear Lake
                </h3>
                <p class="text-lg text-orange-400">
                  Bachelor of Science - BS, Computer Science
                </p>
              </div>
            </div>
            <p class="text-gray-400 text-sm ml-4 hidden md:block">
              Houston, TX
            </p>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Relevant coursework in Data Structures, Algorithms, Web
                Development.
              </li>
              <li>Graduated with Honors.</li>
            </ul>
          </div>
        </details>
        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-orange-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-graduation-cap text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-xl font-bold">San Jacinto College</h3>
                <p class="text-lg text-orange-400">
                  Associate of Science - AS, Computer Science
                </p>
              </div>
            </div>
            <p class="text-gray-400 text-sm ml-4 hidden md:block">
              Houston, TX
            </p>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>Focused on foundational computer science principles.</li>
              <li>
                Transferred credits to University of Houston-Clear Lake.
              </li>
            </ul>
          </div>
        </details>
        <details class="bg-gray-800 rounded-lg shadow-md border-l-4 border-orange-600 card-hover-effect">
          <summary class="flex items-center justify-between w-full p-5 text-gray-100 focus:outline-none">
            <div class="flex items-center">
              <i class="fas fa-certificate text-xl text-cyan-400 mr-3"></i>
              <div class="flex flex-col items-start">
                <h3 class="text-xl font-bold">Certifications</h3>
              </div>
            </div>
            <svg class="w-6 h-6 text-cyan-400 transition-transform duration-300 accordion-icon ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </summary>
          <div class="px-5 pb-5">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Building Full-Stack Apps with React and Spring: LinkedIn, 2023
              </li>
              <li>Software Engineer: HackerRank, 2025</li>
              <li>Programming Foundations: Fundamentals: LinkedIn, 2021</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-950 text-gray-300 section-divider-bottom" id="family">
    <div class="container px-4 mx-auto text-center">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-cyan-400 font-lexend">
        My Family <i class="fas fa-heart ml-2 text-red-500"></i>
      </h2>
      <p class="text-lg max-w-3xl mx-auto mb-8 text-gray-400">
        While my professional life is dedicated to crafting code, my greatest
        joy comes from spending time with my family. They are my inspiration
        and my greatest support system. Here's a glimpse into the people who
        make life truly special.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg shadow-xl border-4 border-cyan-400 card-hover-effect">
          <img src="{{ asset('images/family1.jpg') }}" alt="Thinh Le with family at a gathering" class="w-full" loading="lazy" />
        </div>

        <div class="bg-gray-800 rounded-lg shadow-xl border-4 border-cyan-400 card-hover-effect">
          <img src="{{ asset('images/family2.jpg') }}" alt="Thinh Le with family at a celebration" class="w-full" loading="lazy" />
        </div>

        <div class="bg-gray-800 rounded-lg shadow-xl border-4 border-cyan-400 card-hover-effect">
          <img src="{{ asset('images/family3.jpg') }}" alt="Thinh Le with family at an event" class="w-full" loading="lazy" />
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative hero-gradient-animated"
    id="contact">
    <div class="absolute inset-0 bg-dark-grid opacity-70"></div>
    <div class="container px-4 mx-auto text-center relative z-10">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold font-lexend">
        Get in Touch <i class="fas fa-comments ml-2 text-cyan-400"></i>
      </h2>
      <p class="text-lg max-w-2xl mx-auto mb-8 text-gray-300">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out to discuss how I can help bring your ideas to life.
      </p>
      <div class="max-w-xl mx-auto">
        {{-- action="{{ route('contact.submit') }}"  --}}
        <form method="POST" class="p-8 bg-gray-800 rounded-lg shadow-xl text-gray-800 border border-gray-700 card-hover-effect">
          @csrf
          <div class="mb-4">
            <label for="name" class="block mb-2 text-sm font-bold text-gray-300 text-left">Name</label>
            <input type="text" id="name" name="name" required aria-describedby="name-desc"
              class="w-full px-4 py-3 leading-tight text-gray-100 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="Your Name" />
            <p id="name-desc" class="sr-only">Enter your full name to get in touch.</p>
          </div>
          <div class="mb-4">
            <label for="email" class="block mb-2 text-sm font-bold text-gray-300 text-left">Email</label>
            <input type="email" id="email" name="email" required aria-describedby="email-desc"
              class="w-full px-4 py-3 leading-tight text-gray-100 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="your.email@example.com" />
            <p id="email-desc" class="sr-only">Enter your email address for contact.</p>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-bold text-gray-300 text-left">Message</label>
            <textarea id="message" name="message" rows="4" required aria-describedby="message-desc"
              class="w-full px-4 py-3 leading-tight text-gray-100 bg-gray-700 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-300"
              placeholder="Your message..."></textarea>
            <p id="message-desc" class="sr-only">Enter your message or inquiry.</p>
          </div>
          <div class="flex items-center justify-center">
            <button type="submit"
              class="px-8 py-3 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 animate-pulse-btn">
              Send Message <i class="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </form>
        <div class="mt-8 text-center">
          <p class="text-white text-lg mb-4">Or connect with me:</p>
          <div class="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/lethinh73/" target="_blank"
              class="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="LinkedIn">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/lethinh73" target="_blank"
              class="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="GitHub">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://thinhsoft.com" target="_blank"
              class="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-125"
              aria-label="Portfolio Website">
              <i class="fas fa-globe fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="p-6 text-center bg-gray-950 text-gray-400 border-t border-gray-800">
    <div class="container mx-auto">
      <p>© {{ date('Y') }} Thinh Le. All rights reserved.</p>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.getElementById('mobile-toggle');
      const mobileNav = document.getElementById('mobile-nav');
      const menuIcon = document.getElementById('menu-icon');

      toggleButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden'); // Toggle Tailwind's 'hidden' class
        const isOpen = !mobileNav.classList.contains('hidden'); // Check if 'hidden' is NOT present
        toggleButton.setAttribute('aria-expanded', isOpen);
        menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      });
    });
  </script>
</body>

</html>