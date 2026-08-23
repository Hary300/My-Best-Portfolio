import Container from '@/components/layouts/Container';
import darkAboutMe from '@/assets/images/dark-about-me.webp';
import lightAboutMe from '@/assets/images/light-about-me.webp';
import { themeStore } from '@/store/themeStore';

const About = () => {
  const isDark = themeStore((state) => state.isDark);
  return (
    <Container title='About'>
      <div className='w-200'>
        <img
          src={isDark ? darkAboutMe : lightAboutMe}
          alt='about me image'
          className='brightness-90 w-full'
        />
      </div>
    </Container>
  );
};

export default About;
