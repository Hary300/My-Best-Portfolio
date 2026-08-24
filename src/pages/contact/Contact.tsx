import Container from '@/components/layouts/Container';
import ContactHeader from './sections/ContactHeader';
import ContactForm from './sections/ContactForm';
import ContactGetInTouch from './sections/ContactGetInTouch';

const Contact = () => {
  return (
    <Container title='Contact' className='pb-25'>
      <ContactHeader />
      <div className='flex flex-col lg:flex-row gap-4 '>
        <ContactForm />
        <ContactGetInTouch />
      </div>
    </Container>
  );
};

export default Contact;
