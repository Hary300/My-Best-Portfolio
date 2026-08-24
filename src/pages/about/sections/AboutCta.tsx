import { aboutMe } from '@/data/about-me';

const AboutCta = () => {
  const data = aboutMe.cta;
  const TitleIcon = data.icon;
  return (
    <section
      id='about-cta'
      className='p-4 rounded-md bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-2 flex flex-col gap-4 flex-1'
    >
      <div className='flex gap-2 items-center'>
        <div className='size-8 aspect-square shrink-0 rounded-full flex justify-center items-center bg-portfolio-green-soft dark:bg-portfolio-green/40'>
          <TitleIcon className='text-portfolio-green dark:text-emerald-400 dark:drop-shadow-glow-icon' />
        </div>
        <div>
          <p className=' font-semibold text-lg'>{data.title}</p>
          <p className='text-xs'>{data.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
