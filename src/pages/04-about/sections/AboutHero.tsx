import PageHeader from '@/components/shared/PageHeader';
import { aboutMe } from '@/data/aboutMeData';
import { themeStore } from '@/store/themeStore';

const AboutHero = () => {
  const heroImg = aboutMe.heroImg;
  const header = aboutMe.header;
  const isDark = themeStore((state) => state.isDark);
  const quoteHighlight = aboutMe.quote.highlight;
  const quoteParts = aboutMe.quote.text.split(quoteHighlight);
  const QuoteIcon = aboutMe.quote.icon;
  return (
    <section
      id='about-header'
      className='flex justify-between flex-col xl:flex-row xl:items-center gap-4'
    >
      <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-[57%]'>
        <PageHeader
          title={header.title}
          description={header.description}
          highlightTitle={header.highlightTitle}
          hasDescriptionBreak
        />

        <div className='bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary p-4 rounded-md border-2 flex gap-4 shadow-subtle'>
          <QuoteIcon className='size-8 text-portfolio-green' />
          <p className='max-w-60 py-1'>
            {quoteParts[0]}{' '}
            <strong className='font-bold'>{quoteHighlight}</strong>{' '}
            {quoteParts[1]}
          </p>
        </div>
      </div>

      <div className='flex-[43%] w-full max-w-200'>
        <img
          src={isDark ? heroImg.dark : heroImg.light}
          alt='about me image'
          className='brightness-90 w-full'
        />
      </div>
    </section>
  );
};

export default AboutHero;
