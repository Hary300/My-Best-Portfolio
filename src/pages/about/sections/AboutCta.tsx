import { Button } from '@/components/ui/button';
import { aboutMe } from '@/data/about-me';
import { useSearchParams } from 'react-router-dom';

const AboutCta = () => {
  const [, setSearchParams] = useSearchParams();
  const data = aboutMe.cta;
  const TitleIcon = data.icon;
  const ButtonIcon = data.buttonIcon;

  const handleClickGetInTouchButton = () => {
    const params = new URLSearchParams();
    params.set('tab', 'contact');
    setSearchParams(params);
  };
  return (
    <section
      id='about-cta'
      className='p-4 rounded-md bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-2 flex flex-col gap-4 shadow-subtle'
    >
      <div className='flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='size-8 aspect-square shrink-0 rounded-full flex justify-center items-center bg-portfolio-green-soft dark:bg-portfolio-green/40'>
            <TitleIcon className='text-portfolio-green dark:text-emerald-400 dark:drop-shadow-glow-icon' />
          </div>
          <div>
            <p className=' font-semibold text-lg'>{data.title}</p>
            <p className='text-xs'>{data.subtitle}</p>
          </div>
        </div>
        <Button
          className='bg-portfolio-green text-portfolio-white flex items-center gap-2 px-4'
          onClick={handleClickGetInTouchButton}
        >
          <p>{data.buttonText}</p>
          <ButtonIcon />
        </Button>
      </div>
    </section>
  );
};

export default AboutCta;
