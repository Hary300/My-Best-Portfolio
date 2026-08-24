import Form from '@/components/Form';
import { contactData } from '@/data/contact';

const ContactForm = () => {
  const data = contactData.form;

  return (
    <section
      id='contact-form'
      className='p-4 rounded-md bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-2 flex flex-col gap-4 xl:flex-1 shadow-subtle'
    >
      <div className='flex flex-col gap-2'>
        <p className='pb-1 border-b-3 border-portfolio-green font-semibold text-lg w-fit'>
          {data.title}
        </p>
        <p className='text-xs'>{data.description}</p>
      </div>
      <Form />
    </section>
  );
};

export default ContactForm;
