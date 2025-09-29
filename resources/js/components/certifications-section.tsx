import React from 'react';
import { FiAward } from 'react-icons/fi';
import { BentoCard } from './magic-bento';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  logo?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="flex items-center gap-2 text-xl font-bold text-indigo-900 dark:text-indigo-300">
        <FiAward className="text-indigo-600" size={22} />
        Certifications
      </h4>

      <div className="flex flex-col gap-4">
        {certifications.map((cert, index) => (
          <BentoCard key={index} className="border-indigo-200 p-4 dark:border-indigo-800" enableTilt={true} glowColor="66, 99, 235">
            <div className="flex items-start gap-3">
              {cert.logo ? (
                <img src={cert.logo} alt={cert.title} className="h-10 w-10 rounded-full border-2 border-emerald-800 dark:border-emerald-200" />
              ) : (
                <FiAward className="h-10 w-10 border-2 border-emerald-800 text-emerald-600 dark:border-emerald-200 dark:text-emerald-400" />
              )}
              <div>
                <h4 className="text-md font-semibold text-gray-900 dark:text-gray-100">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                  <span className="mx-1">•</span>
                  {cert.year}
                </p>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};
