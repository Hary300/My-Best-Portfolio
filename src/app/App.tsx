import MobileMenu from '../components/MobileMenu';
import { themeStore } from '@/store/themeStore';
import { useEffect } from 'react';
import SidebarMenu from '@/components/SidebarMenu';
import { useSearchParams } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import { Toaster } from 'sonner';

function App() {
  const [searchParams] = useSearchParams();
  const tabQuery = searchParams.get('tab');
  const activeTab = tabQuery ? tabQuery : 'home';
  const isDark = themeStore((state) => state.isDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className='flex'>
      <SidebarMenu />
      <MobileMenu />
      {activeTab === 'home' && <Home />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'about' && <About />}
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
