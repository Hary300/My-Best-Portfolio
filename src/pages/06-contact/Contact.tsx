import Container from '@/components/layouts/Container';
import ContactForm from './sections/ContactForm';
import ContactGetInTouch from './sections/ContactGetInTouch';
import ContactHero from './sections/ContactHero';
import { contactData } from '@/data/contactData';

const Contact = () => {
  return (
    <Container title='Contact' Icon={contactData.icon} className='pb-25'>
      <ContactHero />
      <div className='flex flex-col lg:flex-row gap-4 '>
        <ContactForm />
        <ContactGetInTouch />
      </div>
    </Container>
  );
};

export default Contact;
