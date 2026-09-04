import MobileMenu from '../components/MobileMenu';
import { themeStore } from '@/store/themeStore';
import { useEffect } from 'react';
import SidebarMenu from '@/components/SidebarMenu';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'sonner';
import type { MenuSlug } from '@/data/menusData';
import Home from '@/pages/01-home';
import Projects from '@/pages/02-projects';
import Skills from '@/pages/03-skills';
import About from '@/pages/04-about';
import Achievement from '@/pages/05-achievement';
import Contact from '@/pages/06-contact';

const menuSlug: MenuSlug[] = [
  'home',
  'projects',
  'skills',
  'about',
  'contact',
  'achievement',
] as const;

const isMenuSlug = (value: string | null): value is MenuSlug => {
  return value !== null && menuSlug.includes(value as MenuSlug);
};

function App() {
  const [searchParams] = useSearchParams();
  const tabQuery = searchParams.get('tab');
  const activeTab: MenuSlug = isMenuSlug(tabQuery) ? tabQuery : 'home';
  const isDark = themeStore((state) => state.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className='flex max-w-500 mx-auto'>
      <SidebarMenu />
      <MobileMenu />
      {activeTab === 'home' && <Home />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'about' && <About />}
      {activeTab === 'achievement' && <Achievement />}
      {activeTab === 'contact' && <Contact />}
      <Toaster
        duration={3000}
        position='top-center'
        toastOptions={{
          classNames: {
            toast:
              'dark:!bg-portfolio-dark-secondary !bg-portfolio-green-soft dark:!border-2 dark:!border-portfolio-card-secondary !bg-portfolio-green-soft dark:!bg-portfolio-dark-secondary',

            success: '!text-portfolio-green dark:!text-portfolio-green',

            error: '!text-red-600',
          },
        }}
      />
    </div>
  );
}

export default App;
