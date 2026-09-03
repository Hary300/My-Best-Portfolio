import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import ViewAllProjectsButton from '@/components/ViewAllProjectsButton';
import { homeData } from '@/data/homeData';
import { themeStore } from '@/store/themeStore';

const HomeHero = () => {
  const isDark = themeStore((state) => state.isDark);
  const header = homeData.header;
  const heroImg = homeData.heroImg;
  return (
    <section
      id='home-hero'
      className='flex md:justify-between flex-col md:flex-row md:items-center gap-2'
    >
      <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-1 sm:flex-2'>
        <PageHeader
          title={header.title}
          description={header.description}
          highlightTitle={header.highlightTitle}
          hasTitleBreak
        />

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
      <div className='flex-1 md:min-w-60 lg:max-w-150 '>
        <img src={isDark ? heroImg.dark : heroImg.light} alt='hero image' />
      </div>
    </section>
  );
};

export default HomeHero;
