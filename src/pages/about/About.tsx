import Container from '@/components/layouts/Container';
import AboutHeader from './sections/AboutHeader';
import AboutWhatIDo from './sections/AboutWhatIDo';
import AboutCta from './sections/AboutCta';
import AboutWhatIValue from './sections/AboutWhatIValue';

const About = () => {
  return (
    <Container title='About' className='pb-25'>
      <AboutHeader />
      <div className='flex flex-col xl:flex-row gap-4'>
        <AboutWhatIDo />
        <AboutWhatIValue />
      </div>
      <AboutCta />
    </Container>
  );
};

export default About;
