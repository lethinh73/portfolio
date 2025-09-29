import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';
import { FiCode, FiDownload, FiUser } from 'react-icons/fi';
import { BentoCard } from './magic-bento';

interface SummarySectionProps {
  name: string;
  title: string;
  summary: string;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ name, title, summary }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center gap-2 text-xl font-bold text-sky-900 dark:text-sky-300">
        <FiCode className="text-sky-600" size={22} />
        Education
      </h4>
      <BentoCard className="border-sky-200 p-6 dark:border-sky-800" enableTilt={true} enableMagnetism={true} glowColor="14, 165, 233">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <FiUser className="text-sky-600" size={24} />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{name}</h4>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">{title}</p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500" size="lg" asChild>
              <a href="/documents/RESUME.pdf" download="Resume.pdf" className="flex items-center gap-2">
                <FiDownload className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="mt-6">
          <h5 className="mb-2 text-lg font-semibold text-sky-900 dark:text-sky-300">Summary</h5>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      </BentoCard>
    </div>
  );
};
