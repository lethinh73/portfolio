# Portfolio Project

Welcome to my portfolio project! This repository showcases my technical skills, projects, and experience as a developer. Below, you'll find details about the technologies used, the structure of the project, and how to run it locally.

<img width="888" height="626" alt="SCREENSHOT" src="https://github.com/user-attachments/assets/d6e2add7-3d7b-4ed0-ba19-eee0ff76c19f" />

---

## Live Demo
This project is live and accessible at: [https://thinhsoft.com](https://thinhsoft.com)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Contact](#contact)

---

## Overview
This portfolio project is a modern web application built with Laravel, React, and Inertia.js. It serves as a platform to showcase my projects, skills, and contact information. The application is designed to be responsive, fast, and user-friendly.

---

## Features
- **Dynamic Contact Form**: Users can send messages directly through the contact form, with real-time validation and success/error handling.
- **Projects Section**: Displays a gallery of projects with images, descriptions, and links.
- **Photo Gallery**: Interactive circular photo gallery with smooth animations.
- **Dark Mode Support**: Fully supports light and dark themes.
- **Responsive Design**: Optimized for all devices, from mobile to desktop.

---

## Tech Stack
### Backend:
- **Laravel 12**: PHP framework for building robust and scalable applications.
- **Inertia.js**: Bridges the gap between Laravel and React, enabling seamless server-side rendering.
- **PHP 8.4.10**: Latest PHP version for optimal performance.

### Frontend:
- **React 19**: Modern JavaScript library for building user interfaces.
- **TailwindCSS 4**: Utility-first CSS framework for rapid UI development.
- **ShadCN Components**: Pre-built, accessible components for consistent design.

### Tools & Libraries:
- **Sonner**: Toast notifications for success/error feedback.
- **Radix UI**: Accessible and customizable UI primitives.
- **ESLint & Prettier**: Code quality and formatting tools.
- **PestPHP**: Testing framework for unit and feature tests.

---

## Project Structure
The project follows a clean and modular structure:

```
portfolio/
├── app/                # Laravel application files
├── bootstrap/          # Application bootstrap files
├── config/             # Configuration files
├── database/           # Migrations, seeders, and factories
├── public/             # Public assets (images, favicon, etc.)
├── resources/          # Frontend resources (React, CSS, etc.)
│   ├── js/             # React components and pages
│   ├── css/            # TailwindCSS styles
├── routes/             # Application routes
├── storage/            # File storage
├── tests/              # Unit and feature tests
└── vendor/             # Composer dependencies
```

---

## Setup Instructions
To run this project locally, follow these steps:

### Prerequisites:
- **Docker**: Ensure Docker is installed and running.
- **DDEV**: Install DDEV for local development.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/lethinh73/portfolio.git
   cd portfolio
   ```

2. Start the DDEV environment:
   ```bash
   ddev start
   ```

3. Install PHP dependencies:
   ```bash
   ddev composer install
   ```

4. Install JavaScript dependencies:
   ```bash
   ddev npm install
   ```

5. Build the frontend assets:
   ```bash
   ddev npm run build
   ```

6. Run database migrations:
   ```bash
   ddev artisan migrate
   ```

7. Access the application:
   Open your browser and navigate to `http://portfolio.ddev.site`.

---

## Development Workflow
- **Start the development server**:
  ```bash
  ddev npm run dev
  ```
- **Lint the code**:
  ```bash
  ddev npm run lint
  ```
- **Run tests**:
  ```bash
  ddev artisan test
  ```

---

## Testing
This project uses PestPHP for testing. Tests are located in the `tests/` directory and include both unit and feature tests.

### Run all tests:
```bash
ddev artisan test
```

### Run a specific test:
```bash
ddev artisan test --filter=TestName
```

---

## Contact
If you have any questions or feedback, feel free to reach out:
- **Email**: [lethinh73@gmail.com](mailto:lethinh73@gmail.com)
- **LinkedIn**: [linkedin.com/in/lethinh73](https://linkedin.com/in/lethinh73)
- **GitHub**: [github.com/lethinh73](https://github.com/lethinh73)

---

Thank you for visiting my portfolio!
