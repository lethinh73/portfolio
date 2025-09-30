import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { BentoCard } from './magic-bento';

export interface TimelineItem {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description: string[];
  logo?: string;
}

interface EducationSectionProps {
  items: TimelineItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center gap-2 text-xl font-bold text-emerald-900 dark:text-emerald-300">
        <FiCalendar className="text-emerald-600" size={22} />
        Education
      </h4>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <BentoCard key={index} className="border-emerald-200 p-5 dark:border-emerald-800" enableTilt={true} glowColor="16, 185, 129">
            <div className="flex items-center gap-2">
              {item.logo ? (
                <img src={item.logo} alt={item.company} className="h-10 w-10 rounded-full border-2 border-emerald-800 dark:border-emerald-200" />
              ) : (
                <FiCalendar className="h-10 w-10 border-2 border-emerald-800 text-emerald-600 dark:border-emerald-200 dark:text-emerald-400" />
              )}
              <div>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{item.period}</p>
                <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="font-medium text-gray-700 dark:text-gray-300">{item.company}</p>
                {item.location && <p className="text-sm text-gray-500">{item.location}</p>}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};
