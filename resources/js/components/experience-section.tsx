import { motion } from 'framer-motion';
import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { BentoCard } from './magic-bento';

export interface TimelineItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
  logo?: string;
}

interface ExperienceSectionProps {
  items: TimelineItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center gap-2 text-xl font-bold text-amber-900 dark:text-amber-300">
        <FiBriefcase className="text-amber-600" size={22} />
        Work Experience
      </h4>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BentoCard 
              className="border-amber-200 dark:border-amber-800" 
              enableTilt={true} 
              glowColor="245, 158, 11"
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-amber-100 bg-white p-0.5 shadow-sm dark:border-amber-900/30 dark:bg-white">
                    {item.logo ? (
                      <img src={item.logo} alt={item.company} className="h-full w-full object-contain" />
                    ) : (
                      <div className="h-4 w-4 rounded-full bg-amber-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-amber-600 dark:text-amber-400">{item.period}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    {item.company && (
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {item.company}
                        {item.location && <span className="ml-2 text-sm text-gray-500">({item.location})</span>}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2">
                      {item.description.map((desc, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                        >
                          • {desc}
                        </motion.li>
                      ))}
                    </ul>
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
