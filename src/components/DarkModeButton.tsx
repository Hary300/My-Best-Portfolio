import { themeStore } from '@/store/themeStore';
import { Button } from './ui/button';
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
    <Button
      onClick={handleClickDarkMode}
      className='h-10 flex items-center justify-center bg-[#191c1f] dark:bg-[#e9e9e3]'
    >
      {isDark ? <Sun className='size-5' /> : <Moon className='size-5' />}
    </Button>
  );
};

export default DarkModeButton;
