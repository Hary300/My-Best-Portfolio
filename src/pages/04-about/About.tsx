import Container from '@/components/layouts/Container';
import AboutWhatIDo from './sections/AboutWhatIDo';
import AboutCta from './sections/AboutCta';
import AboutWhatIValue from './sections/AboutWhatIValue';
import AboutHero from './sections/AboutHero';
import { aboutMe } from '@/data/aboutMeData';

const About = () => {
  return (
    <Container title='About' Icon={aboutMe.icon} className='pb-25'>
      <AboutHero />
      <div className='flex flex-col xl:flex-row gap-4'>
        <AboutWhatIDo />
        <AboutWhatIValue />
      </div>
      <AboutCta />
    </Container>
  );
};

export default About;
