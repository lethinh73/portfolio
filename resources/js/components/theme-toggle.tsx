import { Appearance } from '@/hooks/use-appearance';
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const appearanceSequence: Appearance[] = ['light', 'dark', 'system'];

function ThemeToggle({ appearance, updateAppearance }: { appearance: Appearance; updateAppearance: (mode: Appearance) => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentIndex = appearanceSequence.indexOf(appearance);
  const nextAppearance = appearanceSequence[(currentIndex + 1) % appearanceSequence.length];
  const nextAppearanceLabel = nextAppearance.charAt(0).toUpperCase() + nextAppearance.slice(1);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${nextAppearanceLabel} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => updateAppearance(nextAppearance)}
    >
      {!mounted && <div className="h-6 w-6" />}

      {mounted && appearance === 'light' && (
        <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700" />
      )}
      {mounted && appearance === 'dark' && (
        <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:fill-zinc-600 group-hover:stroke-zinc-400" />
      )}
      {mounted && appearance === 'system' && (
        <MonitorIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:fill-zinc-700 dark:group-hover:fill-zinc-600 dark:group-hover:stroke-zinc-400" />
      )}
    </button>
  );
}

export default ThemeToggle;
