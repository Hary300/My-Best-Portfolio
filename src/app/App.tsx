import DarkModeButton from '@/components/DarkModeButton';
import MobileMenu from '../components/MobileMenu';
import { themeStore } from '@/store/themeStore';
import { useEffect } from 'react';
import SidebarMenu from '@/components/SidebarMenu';

function App() {
  const isDark = themeStore((state) => state.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <>
      <SidebarMenu />
      <DarkModeButton />
      <MobileMenu />
    </>
  );
}

export default App;
