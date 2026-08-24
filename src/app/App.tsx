import MobileMenu from '../components/MobileMenu';
import { themeStore } from '@/store/themeStore';
import { useEffect } from 'react';
import SidebarMenu from '@/components/SidebarMenu';
import { useSearchParams } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import About from '@/pages/about/About';
import Contact from '@/pages/Contact';

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
    </div>
  );
}

export default App;
