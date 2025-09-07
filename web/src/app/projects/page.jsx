import { SimpleLayout } from '@/components/SimpleLayout';
import MagicBento from '@/components/MagicBento';
import Image from 'next/image';

export const metadata = {
  title: 'Projects',
  description: 'My projects that I’m most proud of.',
};

export default function Projects() {
  const cardData = [
    {
      color: '#3E0703',
      content: (
        <>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl dark:bg-gray-800" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"></div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl dark:outline-white/15" />
          </div>
        </>
      ),
    },
    {
      color: '#060010',
      content: '',
    },
    {
      color: '#060010',
      content: (
        <>
          <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
            <div className="p-10">
              <h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400"></h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white"></p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400"></p>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <SimpleLayout
      title="My projects"
      intro="These are the projects that have been most meaningful to me — whether personally, professionally, or both."
    >

      Will be updated soon!

      {/* <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        cardData={cardData}
      /> */}
    </SimpleLayout>
  );
}
