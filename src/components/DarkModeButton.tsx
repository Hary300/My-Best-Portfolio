import { cn } from '@/lib/utils';
import { themeStore } from '@/store/themeStore';
import { Moon, Sun } from 'lucide-react';

const DarkModeButton = () => {
  const isDark = themeStore((state) => state.isDark);
  const toggleDark = themeStore((state) => state.toggleTheme);

  const handleClickDarkMode = () => {
    toggleDark();
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      type='button'
      onClick={handleClickDarkMode}
      aria-label='Toggle dark mode'
      className='relative flex items-center justify-between w-16 h-8 px-1.5 shrink-0 rounded-full bg-portfolio-gray/20 dark:bg-portfolio-card-secondary/80 border border-portfolio-border/40 dark:border-portfolio-border/20 cursor-pointer transition-colors duration-300 hover:border-portfolio-green/50'
    >
      <div
        className={cn(
          'absolute top-1/2 -translate-y-1/2 size-5 rounded-full bg-portfolio-green shadow-sm transition-all duration-300 flex items-center justify-center',
          isDark ? 'left-1' : 'left-9'
        )}
      >
        {isDark ? (
          <Moon className='size-3 text-portfolio-dark' />
        ) : (
          <Sun className='size-3 text-portfolio-light' />
        )}
      </div>

      <Moon
        className={cn(
          'size-3.5 transition-opacity duration-200',
          isDark ? 'opacity-30 text-portfolio-gray' : 'text-emerald-700'
        )}
      />
      <Sun
        className={cn(
          'size-3.5 transition-opacity duration-200',
          isDark
            ? 'text-portfolio-green drop-shadow-glow-adaptive'
            : 'opacity-30 text-portfolio-zinc'
        )}
      />
    </button>
  );
};

export default DarkModeButton;
