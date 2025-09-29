import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, label, className }) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <div className="flex justify-between text-sm">
          <span>{label}</span>
          <span className="text-gray-500">{safeValue}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
          initial={{ width: 0 }}
          animate={{ width: `${safeValue}%` }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};