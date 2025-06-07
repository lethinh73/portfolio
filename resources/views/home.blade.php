<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Thinh Le, a Full-Stack Web Developer based in Houston, Texas." />
  <title>Thinh Le - Web Developer</title>

  @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  @endif

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/167adbfcdc.js" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="{{ asset('css/home.css') }}" />
  <script src="//unpkg.com/alpinejs" defer></script>
</head>

<body class="bg-gray-950 text-gray-200 antialiased font-inter">
  <nav class="sticky top-0 z-50 p-4 bg-gray-900 shadow-xl border-b border-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <a href="#hero" class="text-3xl font-extrabold text-cyan-400 tracking-wide font-lexend">Thinh Le</a>
      <div class="space-x-6 text-lg hidden md:flex" id="nav-links">
        <x-home.nav-link href="#about">About</x-home.nav-link>
        <x-home.nav-link href="#skills">Skills</x-home.nav-link>
        <x-home.nav-link href="#experience">Experience</x-home.nav-link>
        <x-home.nav-link href="#projects">Projects</x-home.nav-link>
        <x-home.nav-link href="#education">Education</x-home.nav-link>
        <x-home.nav-link href="#family">Family</x-home.nav-link>
      </div>
      <button id="mobile-toggle" class="md:hidden text-gray-300 text-2xl hover:text-cyan-400 focus:outline-none"
        aria-label="Toggle navigation menu" aria-expanded="false">
        <i class="fas fa-bars" id="menu-icon"></i>
      </button>
    </div>
    <div class="mobile-nav hidden md:hidden" id="mobile-nav">
      <div class="flex flex-col space-y-4 p-4 text-lg">
        <x-home.mobile-nav-link href="#about">About</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#skills">Skills</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#experience">Experience</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#projects">Projects</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#education">Education</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#family">Family</x-home.mobile-nav-link>
        <x-home.mobile-nav-link href="#contact">Contact</x-home.mobile-nav-link>
      </div>
    </div>
  </nav>

  <section
    class="relative flex items-center justify-center min-h-[80vh] text-center text-white py-12 hero-gradient-animated"
    id="hero">
    <div class="absolute inset-0 bg-dark-grid opacity-70"></div>
    <div class="container p-6 relative z-10">
      <img src="{{ asset('images/avatar.jpg') }}" alt="Thinh Le Headshot"
        class="mx-auto mb-5 rounded-full border-4 border-cyan-400 shadow-2xl animate-float transform transition-transform duration-500 hover:scale-105 w-48 h-48 object-cover"
        loading="lazy" />
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
          <a href="tel:+17138150775" class="text-cyan-400 hover:underline transition duration-300 text-nowrap"><i
              class="fas fa-phone mr-1"></i>(713) 815-0775</a>
          or
          <a href="mailto:lethinh73@gmail.com" class="text-cyan-400 hover:underline transition duration-300 text-nowrap"><i
              class="fas fa-envelope mr-1"></i>lethinh73@gmail.com</a>.
        </p>

        <x-weather-widget class="mt-8 mx-auto max-w-xl" />
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-950 text-gray-300 section-divider-bottom" id="skills">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">Top Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <x-home.skill-card title="Programming Languages & Frameworks" icon="fas fa-code">
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
        </x-home.skill-card>
        <x-home.skill-card title="Design & Methodologies" icon="fas fa-palette">
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="font-medium"><i class="fas fa-users-cog mr-2 text-pink-400"></i>Agile Methodology</span>
            </li>
            <li><span class="font-medium"><i class="fas fa-people-group mr-2 text-orange-400"></i>Scrum
                Methodology</span></li>
            <li><span class="font-medium"><i class="fas fa-cogs mr-2 text-gray-400"></i>DevOps</span></li>
            <li><span class="font-medium"><i class="fas fa-sync-alt mr-2 text-blue-400"></i>CI/CD</span></li>
            <li><span class="font-medium"><i class="fas fa-vial mr-2 text-green-400"></i>Unit Testing</span></li>
          </ul>
        </x-home.skill-card>
        <x-home.skill-card title="Tools & Platforms" icon="fas fa-tools">
          <ul class="space-y-1 text-gray-300 text-sm">
            <li><span class="font-medium"><i class="fab fa-aws mr-2 text-orange-500"></i>AWS</span></li>
            <li><span class="font-medium"><i class="fab fa-linux mr-2 text-yellow-500"></i>Linux Administration (Ubuntu,
                Debian, Amazon Linux)</span></li>
            <li><span class="font-medium"><i class="fab fa-github mr-2 text-white"></i>GitHub</span></li>
            <li><span class="font-medium"><i class="fab fa-docker mr-2 text-blue-500"></i>Docker</span></li>
          </ul>
        </x-home.skill-card>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-900 text-gray-300 section-divider-top" id="experience">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        Experience
      </h2>

      <div class="max-w-4xl mx-auto space-y-4">
        <x-home.collapse-card
          title="Software Developer"
          subtitle="SOURCE Web Solutions, Inc."
          dates="May 2022 - Feb 2025" 
          location="Friendswood, Texas, United States"
          icon-class="fas fa-briefcase"
          border-color="border-blue-600">
          <li>Collaborated with clients and developers to strategize and implement 75+ feature requests, meeting strict
            timelines and budgets.</li>
          <li>Deployed features and patches with detailed patch notes, enhancing application reliability, reducing
            post-deployment issues by 15%.</li>
          <li>Developed web applications for real estate, education, finance, and logistics using PHP 7 and 8, MySQL 8,
            and JavaScript (ES6), improving client workflows.</li>
          <li>Integrated APIs (Twilio, Stripe, Mailgun) for automated communication and payment processing, streamlining
            operations.</li>
          <li>Designed user-friendly front-end interfaces paired with robust backends, boosting user engagement.</li>
          <li>Documented code comprehensively, which increased team productivity by 15%.</li>
          <li>Deployed applications on AWS and Digital Ocean, resolving bugs to ensure 99.9% uptime.</li>
        </x-home.collapse-card>

        <x-home.collapse-card
          title="Technology Intern"
          subtitle="Labs196"
          dates="Aug 2021 - Nov 2021"
          location="Sugar Land, Texas, United States"
          icon-class="fas fa-flask"
          border-color="border-blue-600">
          <li>Built and deployed websites using ReactJS, React Native, and VueJS, improving user experience.</li>
          <li>Collaborated with the Tech Intern Team to troubleshoot coding and deployment issues, improving web
            application stability and performance.</li>
          <li>Assisted in database management, ensuring data integrity and smooth operational workflows, reducing data
            retrieval times by 50%.</li>
        </x-home.collapse-card>

        <x-home.collapse-card
          title="ERP Support Specialist"
          subtitle="Accredo Packaging, Inc."
          dates="Jun 2019 - Mar 2021"
          location="Sugar Land, Texas, United States"
          icon-class="fas fa-desktop"
          border-color="border-blue-600">
          <li>Provided technical and functional support for ERP systems, including system administration, problem
            resolution, and process mapping, improving operational efficiency.</li>
          <li>Designed and implemented data processing solutions, boosting ERP performance by 10%.</li>
          <li>Implemented best practices for ERP systems, ensuring scalability and reliability, reducing downtime.</li>
        </x-home.collapse-card>
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
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <x-home.project-card imgSrc="{{ asset('images/project1.png') }}" imgAlt="Form Prefill UI Screenshot">
          <h3 class="mb-2 text-xl font-semibold text-gray-100">
            Form Prefill Configuration UI
          </h3>
          <p class="mb-4 text-gray-300 text-sm">
            This project provides a user interface to visualize a flow graph of forms aånd configure field prefill
            mappings.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <x-home.project-skill-pill textColor="text-blue-200" bgColor="bg-blue-700">React</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-green-200"
              bgColor="bg-green-700">HTML5</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-purple-200"
              bgColor="bg-purple-700">ReactFlow</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-red-200" bgColor="bg-red-700">Tailwind
              CSS</x-home.project-skill-pill>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a href="https://github.com/lethinh73/0dc41e"
              class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
              GitHub <i class="fab fa-github ml-2 text-sm"></i>
            </a>
          </div>
        </x-home.project-card>

        <x-home.project-card imgSrc="{{ asset('images/project2.png') }}" imgAlt="Unit Converter Screenshot">
          <h3 class="mb-2 text-xl font-semibold text-gray-100">
            Unit Converter
          </h3>
          <p class="mb-4 text-gray-300 text-sm">
            This is a project that combines a number converter and a calculator, supporting Decimal, Binary (IEEE-754
            Floating Point), and Hexadecimal formats.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <x-home.project-skill-pill textColor="text-blue-200"
              bgColor="bg-blue-700">Python3</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-green-200"
              bgColor="bg-green-700">PyQt5</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-purple-200" bgColor="bg-purple-700">IEEE-754
              Standard</x-home.project-skill-pill>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a href="https://github.com/lethinh73/unit-converter"
              class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
              GitHub <i class="fab fa-github ml-2 text-sm"></i>
            </a>
          </div>
        </x-home.project-card>

        <x-home.project-card imgSrc="{{ asset('images/project3.png') }}" imgAlt="Grab Easy Screenshot">
          <h3 class="mb-2 text-xl font-semibold text-gray-100">
            Grab Easy
          </h3>
          <p class="mb-4 text-gray-300 text-sm">
            A modern, responsive front-end web application designed to simulate a seamless mobile food ordering
            experience
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <x-home.project-skill-pill textColor="text-blue-200"
              bgColor="bg-blue-700">Vue.js</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-green-200"
              bgColor="bg-green-700">Javascript</x-home.project-skill-pill>
            <x-home.project-skill-pill textColor="text-purple-200"
              bgColor="bg-purple-700">CSS</x-home.project-skill-pill>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a href="https://github.com/lethinh73/grab-easy"
              class="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300">
              GitHub <i class="fab fa-github ml-2 text-sm"></i>
            </a>
          </div>
        </x-home.project-card>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gray-900 text-gray-300 section-divider-top" id="education">
    <div class="container px-4 mx-auto">
      <h2 class="mb-8 md:mb-10 text-4xl font-bold text-center text-cyan-400 font-lexend">
        Education & Certifications
      </h2>
      <div class="max-w-4xl mx-auto space-y-4">
        <x-home.collapse-card
          title="University of Houston - Clear Lake"
          subtitle="Bachelor of Science - Computer Science"
          location="Houston, TX"
          icon-class="fas fa-graduation-cap"
          border-color="border-orange-600">
            <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
              <li>
                Relevant coursework in Data Structures, Software Engineer
              </li>
            </ul>
        </x-home.collapse-card>

        <x-home.collapse-card
          title="San Jacinto College - South"
          subtitle="Associate of Science - Computer Science"
          location="Houston, TX"
          icon-class="fas fa-graduation-cap"
          border-color="border-orange-600">
          <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>
              Focused on foundational computer science principles.
            </li>
            <li>
              Transferred credits to University of Houston-Clear Lake.
            </li>
          </ul>
        </x-home.collapse-card>


        <x-home.collapse-card
          title="Cetifications"
          icon-class="fas fa-certificate"
          border-color="border-orange-600">
          <ul class="list-disc list-inside space-y-1 text-gray-300 text-sm">
            <li>
              Building Full-Stack Apps with React and Spring: LinkedIn, 2023
            </li>
            <li>
              Software Engineer: HackerRank, 2025
            </li>
            <li>
              Programming Foundations: Fundamentals: LinkedIn, 2021
            </li>
          </ul>
        </x-home.collapse-card>
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

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <x-home.family-photo imgSrc="{{ asset('images/family1.jpg') }}" imgAlt="Everyone showing their drinks" />
        <x-home.family-photo imgSrc="{{ asset('images/family2.jpg') }}"
          imgAlt="Everyone at the balcony of a restaurant" />
        <x-home.family-photo imgSrc="{{ asset('images/family3.jpg') }}"
          imgAlt="Everyone standing in front of a coffee shop" />
      </div>
    </div>
  </section>

  <section class="py-16 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative hero-gradient-animated" id="contact">
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
        <form id="contact-message" method="POST" action="{{ route('contactmessage.store') }}"
          class="p-8 bg-gray-800 rounded-lg shadow-xl text-gray-800 border border-gray-700 card-hover-effect">
          @csrf
          <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">

          <x-home.form-input id="name" name="name" label="Name" placeholder="Your Name" aria-describedby="name-desc" />
          @error('name')
            <p class="text-xs text-red-500 font-semibold mt-2">
              {{ $message }}
            </p>
          @enderror

          <x-home.form-input id="email" name="email" type="email" label="Email" placeholder="your.email@example.com" aria-describedby="email-desc" />
          @error('email')
            <p class="text-xs text-red-500 font-semibold mt-2">
              {{ $message }}
            </p>
          @enderror

          <x-home.form-input id="message" name="message" label="Message" placeholder="Your message..." aria-describedby="message-desc" is-text-area />
          @error('message')
            <p class="text-xs text-red-500 font-semibold">
              {{ $message }}
            </p>
          @enderror

          <div class="flex items-center justify-center mt-4">
            <button type="submit"
              class="px-8 py-3 font-bold text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 animate-pulse-btn">
              Send Message <i class="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </form>
        <div class="mt-8 text-center">
          <p class="text-white text-lg mb-4">Or connect with me:</p>
          <div class="flex justify-center space-x-6">
            <x-home.social-link href="https://www.linkedin.com/in/lethinh73/" icon-class="fab fa-linkedin"
              label="LinkedIn" />
            <x-home.social-link href="https://github.com/lethinh73" icon-class="fab fa-github" label="GitHub" />
            <x-home.social-link href="https://thinhsoft.com" icon-class="fas fa-globe" label="Portfolio Website" />
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

  <x-notification />
  <script src="https://www.google.com/recaptcha/api.js?render={{ config('services.recaptcha.site_key') }}"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      // Inject ReCaptcha to the form when submit
      document.getElementById('contact-message').addEventListener('submit', function (event) {
        event.preventDefault();

        grecaptcha.ready(function() {
          grecaptcha.execute('{{ config('services.recaptcha.site_key') }}', {action: 'submit'}).then(function(token) {
            document.getElementById('g-recaptcha-response').value = token;
            document.getElementById('contact-message').submit();
          });
        });
      });

      // Mobile menu toggle
      const toggleButton = document.getElementById('mobile-toggle');
      const mobileNav = document.getElementById('mobile-nav');
      const menuIcon = document.getElementById('menu-icon');

      toggleButton.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        const isOpen = !mobileNav.classList.contains('hidden');
        toggleButton.setAttribute('aria-expanded', isOpen);
        menuIcon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      });

      // Accordion icon rotation
      const detailsElements = document.querySelectorAll('details');

      detailsElements.forEach(detailElement => {
        const summaryElement = detailElement.querySelector('summary');
        if (!summaryElement) return;

        const icon = summaryElement.querySelector('.accordion-icon');

        if (icon) {
          detailElement.addEventListener('toggle', function() {
            if (this.open) {
              icon.classList.add('rotate-90');
            } else {
              icon.classList.remove('rotate-90');
            }
          });
        }
      });
    });
  </script>
  @if ($errors->any())
    <script>
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    </script>
  @endif
</body>

</html>