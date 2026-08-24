import { aboutMe } from '@/data/about-me';

const AboutWhatIDo = () => {
  const data = aboutMe.whatIDo;
  const TitleIcon = data.icon;
  return (
    <section
      id='about-what-i-do'
      className='p-4 rounded-md bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-2 flex flex-col gap-4 flex-1'
    >
      <div className='flex gap-2 items-center'>
        <div className='size-8 aspect-square shrink-0 rounded-full flex justify-center items-center bg-portfolio-green-soft dark:bg-portfolio-green/40'>
          <TitleIcon className='text-portfolio-green dark:text-emerald-400 dark:drop-shadow-glow-icon' />
        </div>
        <p className='pb-1 border-b-3 border-portfolio-green font-semibold text-lg'>
          {data.title}
        </p>
      </div>
      <div className='flex gap-1'>
        {data.items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className='flex flex-col gap-2 p-4 rounded-md border-2'
            >
              <Icon className='size-4 text-portfolio-green dark:text-emerald-400 dark:drop-shadow-glow-icon' />
              <p className='font-semibold'>{item.title}</p>
              <p className='text-xs'>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutWhatIDo;
