import { motion } from 'framer-motion';
import React from 'react';
import { FiCode } from 'react-icons/fi';
import { BentoCard } from './magic-bento';

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center gap-2 text-xl font-bold text-violet-900 dark:text-violet-300">
        <FiCode className="text-violet-600" size={22} />
        My Projects
      </h4>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BentoCard className="overflow-hidden border-violet-200 dark:border-violet-800" enableTilt={true} glowColor="124, 58, 237">
              <div className="relative">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>

                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">Tech Stack:</h5>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="rounded bg-violet-100 px-2 py-1 text-xs text-violet-800 dark:bg-violet-900/30 dark:text-violet-200">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-between gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        className="inline-block text-sm font-medium text-violet-600 hover:underline dark:text-violet-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source
                      </a>
                    ) : (
                      <span className="pointer-events-none inline-block text-sm font-medium text-gray-500 opacity-50">Private Project</span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        className="inline-block text-sm font-medium text-violet-600 hover:underline dark:text-violet-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="pointer-events-none inline-block text-sm font-medium text-gray-500 opacity-50">Demo Unavailable</span>
                    )}
                  </div>
                </div>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
