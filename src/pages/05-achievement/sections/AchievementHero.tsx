import PageHeader from '@/components/shared/PageHeader';
import { achievementData } from '@/data/achievementData';
import { themeStore } from '@/store/themeStore';

const AchievementHero = () => {
  const isDark = themeStore((state) => state.isDark);
  const heroImg = achievementData.heroImg;
  const header = achievementData.header;
  return (
    <section
      id='achievement-hero'
      className='flex flex-col md:flex-row md:justify-between md:items-center gap-2'
    >
      <div className='flex-[60%]'>
        <PageHeader
          title={header.title}
          description={header.description}
          highlightTitle={header.highlightTitle}
        />
      </div>
      <div className='flex-[40%] md:min-w-60 lg:max-w-200'>
        <img
          src={isDark ? heroImg.dark : heroImg.light}
          alt='hero image'
          className={isDark ? 'brightness-70' : ''}
        />
      </div>
    </section>
  );
};

export default AchievementHero;
