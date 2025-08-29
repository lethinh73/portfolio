import { SimpleLayout } from '@/components/SimpleLayout';
import MagicBento from '@/components/MagicBento';

export const metadata = {
  title: 'Projects',
  description: 'My projects that I’m most proud of.',
};

export default function Projects() {
  return (
    <SimpleLayout
      title="My projects"
      intro="These are the projects that have been most meaningful to me — whether personally, professionally, or both."
    >
      <MagicBento
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
      />
    </SimpleLayout>
  );
}
