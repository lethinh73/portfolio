import { motion } from 'framer-motion';
import React from 'react';
import { FiBriefcase } from 'react-icons/fi';

export interface TimelineItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
}

interface ExperienceSectionProps {
  items: TimelineItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <motion.div
      className="rounded-xl border bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-lg dark:border-gray-700 dark:from-gray-800 dark:to-amber-900/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="mb-4 flex items-center gap-2 text-xl font-bold text-amber-900 dark:text-amber-300">
        <FiBriefcase className="text-amber-600" />
        Work Experience
      </h4>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-amber-200 dark:bg-amber-900/50" />
        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative pl-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white shadow-md dark:border-amber-900/30 dark:bg-gray-800">
                <div className="h-3 w-3 rounded-full bg-amber-500" />
              </div>
              <div className="rounded-lg border border-amber-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-amber-900/30 dark:bg-gray-800/50">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                {item.company && (
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    {item.company}
                    {item.location && <span className="ml-2 text-sm text-gray-500">({item.location})</span>}
                  </p>
                )}
                <p className="text-sm text-amber-600 dark:text-amber-400">{item.period}</p>
                <ul className="mt-2 space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
