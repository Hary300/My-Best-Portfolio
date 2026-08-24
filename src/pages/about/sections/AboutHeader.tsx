import { aboutMe } from '@/data/about-me';
import { themeStore } from '@/store/themeStore';
import darkAboutMe from '@/assets/images/dark-about-me.webp';
import lightAboutMe from '@/assets/images/light-about-me.webp';

const AboutHeader = () => {
  const isDark = themeStore((state) => state.isDark);
  const highlight = aboutMe.header.quote.highlight;
  const parts = aboutMe.header.quote.text.split(highlight);
  const QuoteIcon = aboutMe.header.quote.icon;
  return (
    <section
      id='about-header'
      className='flex justify-between flex-col xl:flex-row items-center gap-4'
    >
      <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-[57%]'>
        <p className='text-xl sm:text-3xl font-bold xl:text-5xl'>
          {aboutMe.header.firstTitle}{' '}
          <span className='text-portfolio-green'>
            {aboutMe.header.secondTitle}
          </span>
        </p>
        <div className='flex flex-col gap-2'>
          {aboutMe.header.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className='bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary p-4 rounded-md border-2 flex gap-4 '>
          <QuoteIcon className='size-8 text-portfolio-green' />
          <p className='max-w-60 py-1'>
            {parts[0]} <strong className='font-bold'>{highlight}</strong>{' '}
            {parts[1]}
          </p>
        </div>
      </div>

      <div className='flex-[43%] w-full max-w-200'>
        <img
          src={isDark ? darkAboutMe : lightAboutMe}
          alt='about me image'
          className='brightness-90 w-full'
        />
      </div>
    </section>
  );
};

export default AboutHeader;
