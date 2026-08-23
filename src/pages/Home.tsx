import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';
import ViewAllProjectsButton from '@/components/ViewAllProjectsButton';

import darkHeroImage from '@/assets/images/dark-group.png';
import lightHeroImage from '@/assets/images/light-group.png';
import { themeStore } from '@/store/themeStore';
import { projects } from '@/data/projects';
import ProjectGrid from '@/components/ProjectGrid';

const Home = () => {
  const featuredProjects = projects.featuredProjects;
  const isDark = themeStore((state) => state.isDark);
  return (
    <Container title='Home'>
      <div className='flex justify-between flex-col md:flex-row items-center gap-4'>
        <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-1 sm:flex-2'>
          <p className='text-xl sm:text-3xl font-bold xl:text-5xl'>
            Hi, I'm Hary
          </p>
          <p className='text-xl sm:text-3xl xl:text-5xl font-bold text-portfolio-green-secondary dark:text-portfolio-green'>
            Full Stack Developer
          </p>
          <p className='text-sm xl:text-lg'>
            I build modern, responsive web applications with React, TypeScript,
            Node.js, and modern backend technologies.
          </p>
          <div className='flex gap-2 mt-4'>
            <ViewAllProjectsButton />
            <a
              href='https://github.com/Hary300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                variant='outline'
                className='border-portfolio-green-secondary h-10'
              >
                My GitHub
              </Button>
            </a>
          </div>
        </div>
        <div className='flex-1 md:min-w-70 lg:max-w-150 '>
          <img src={isDark ? darkHeroImage : lightHeroImage} alt='hero image' />
        </div>
      </div>
      <div className='mt-10 flex flex-col gap-4 pb-20'>
        <h3 className='font-semibold text-2xl'>Featured Projects</h3>
        <ProjectGrid projects={featuredProjects} />
      </div>
    </Container>
  );
};

export default Home;
