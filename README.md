# Thinh Le's Portfolio Website

Hi, I'm Thinh Le 👋. Welcome to the official repository for my personal portfolio website. This project showcases my skills, projects, and professional background as a Full-Stack Software Developer with 5+ years of experience.

<img width="1685" height="864" alt="screenshot" src="https://github.com/user-attachments/assets/2759ac47-131e-4e79-8379-3f29c61f1eb3" />

### [View Live Site →](https://thinhsoft.com)

## ✨ Features

* **Modern React Architecture:** Built with React 19 and Vite for lightning-fast development and optimal performance
* **Responsive Design:** Fully responsive layout that looks stunning on desktops, tablets, and mobile devices
* **Beautiful Animations:** Smooth animations and transitions powered by Framer Motion
* **shadcn/ui Components:** Standardized, accessible UI components with consistent styling
* **Project Showcase:** Interactive gallery displaying my professional work with detailed case studies
* **Dynamic Contact Form:** Functional contact form with form validation and user feedback
* **Modern Styling:** Built with Tailwind CSS v4.1 for rapid, utility-first styling
* **Dark Theme:** Professional dark theme with purple/blue/slate color palette
* **Interactive Elements:** Hover effects, animated backgrounds, and engaging user interactions

## 🛠️ Tech Stack

This project is built with a cutting-edge web development stack:

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Backend:

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Slim 4](https://img.shields.io/badge/Slim-4.x-4A4A4A?style=for-the-badge)
![PHPUnit](https://img.shields.io/badge/PHPUnit-9.x-4A4A4A?style=for-the-badge)

### Core Technologies:
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Next-generation frontend tooling
- **Tailwind CSS 4.1.0** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **shadcn/ui** - High-quality, accessible component system
- **Slim 4** - Backend microframework for APIs
- **PHP-DI** - Dependency Injection container
- **Monolog** - Structured logging
- **PHPUnit** - Backend testing framework

### Key Libraries:
- **@radix-ui/react-slot** - Primitive component composition
- **class-variance-authority** - Type-safe component variants
- **tailwind-merge** - Intelligent Tailwind class merging
- **react-icons** - Popular icon library with 5,000+ icons

## 🚀 Running the Project Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lethinh73/portfolio.git
   cd portfolio
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend dev server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5174` to view the portfolio

### Available Scripts:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🧩 Backend (Slim 4 API)

The backend is a Slim 4 PHP API located in `backend/`. It powers dynamic features like the system monitor and future contact form.

### Prerequisites
- PHP 8.0+ (7.4 supported, but 8.x recommended)
- Composer

Optionally for Docker: Docker Desktop

### Install and run (local PHP)
```bash
cd backend
composer install

# Start API at http://localhost:8080
composer start
```

### Run with Docker
```bash
cd backend
docker compose up -d
```
This starts the API at `http://localhost:8080` inside a PHP 7 Alpine container.

### Configure the frontend to talk to the API
Set the API base URL via Vite environment variable:

```bash
# at project root
echo "VITE_API_BASE_URL=http://localhost:8080" >> .env.local
```

The frontend reads this from `src/config/api.js`.

### API Endpoints
- `GET /` → Basic health payload: `{ message: "ThinhSoft API", status: "success" }`
- `GET /system` → System metrics payload:
   - `cpu_percent` (number)
   - `memory_percent` (number)
   - `disk_percent` (number)
   - `process_count` (number)
   - `uptime` (string, e.g., `0 days, 05:42`)
   - `platform_info` (object: `system`, `machine`)
   - `network_stats` (object: `bytes_sent`, `bytes_recv`, `packets_sent`, `packets_recv`)

Notes:
- CORS headers are emitted dynamically based on the request Origin, so calling the API from `http://localhost:5174` works out of the box.
- Some metrics (e.g., uptime and network stats) rely on Linux `/proc` and may be partial on macOS/Windows. Docker provides full metrics.

### Backend tests
```bash
cd backend
composer test
```

## ▶️ Running frontend + backend together

Use two terminals:
- Terminal 1 (frontend): `npm run dev` → http://localhost:5174
- Terminal 2 (backend): `cd backend && composer start` → http://localhost:8080

Ensure `.env.local` has `VITE_API_BASE_URL=http://localhost:8080`.

## 📁 Project Structure

```
portfolio/
├── backend/                 # Slim 4 API
│   ├── public/              # App front controller (index.php)
│   ├── app/                 # Settings, routes, middleware
│   ├── src/                 # Application code (handlers, middleware, etc.)
│   ├── tests/               # PHPUnit tests
│   ├── vendor/              # Composer dependencies
│   ├── composer.json        # Backend dependencies & scripts
│   └── docker-compose.yml   # Optional Docker setup (port 8080)
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Landing section
│   │   ├── Projects.jsx     # Projects showcase
│   │   └── Skills.jsx       # Skills & technologies
│   ├── assets/
│   │   ├── images/          # Project and personal images
│   │   └── RESUME.pdf       # Professional resume
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── eslint.config.js         # ESLint flat config
├── tsconfig.json            # TS config (used by tooling)
└── vite.config.js          # Vite configuration
```

## 🎨 Design Features

- **Dark Theme:** Professional color scheme with purple/blue/slate palette
- **Responsive Layout:** Mobile-first design with seamless desktop scaling
- **Smooth Animations:** Page transitions, hover effects, and scroll-triggered animations
- **Interactive Elements:** Animated backgrounds, floating particles, and dynamic effects
- **Accessible Components:** WCAG-compliant UI elements with proper focus management
- **Modern Typography:** Clean, readable fonts with proper hierarchy

## 🏗️ Components Overview

### Core Sections:
- **Hero:** Landing section with animated background and call-to-action buttons
- **About:** Personal introduction with professional highlights
- **Skills:** Technology stack organized by categories
- **Projects:** Featured work with detailed descriptions and live links
- **Contact:** Professional contact form with validation
- **Footer:** Additional links and social media connections

### UI Components:
- **Button:** Standardized button component with multiple variants
- **Input/Textarea:** Form controls with consistent styling
- **Responsive Navigation:** Mobile-friendly header with smooth animations

## 🌟 Key Highlights

- **Performance Optimized:** Built with Vite for fast builds and hot module replacement
- **Type Safety:** TypeScript configuration for better development experience
- **Modern CSS:** Tailwind CSS v4.1 with custom design system
- **Component Library:** shadcn/ui for consistent, accessible components
- **Responsive Images:** Optimized image loading and display
- **SEO Ready:** Proper meta tags and semantic HTML structure

## 📬 Contact

I'm always open to connecting and discussing new opportunities.

* **Email:** [lethinh73@gmail.com](mailto:lethinh73@gmail.com)
* **LinkedIn:** [linkedin.com/in/lethinh73](https://www.linkedin.com/in/lethinh73)
* **GitHub:** [github.com/lethinh73](https://github.com/lethinh73)
* **Portfolio:** [thinhsoft.com](https://thinhsoft.com)

---
*This README was last updated on August 11, 2025.*
