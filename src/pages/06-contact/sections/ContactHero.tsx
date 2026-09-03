import PageHeader from '@/components/shared/PageHeader';
import { contactData } from '@/data/contactData';
import { themeStore } from '@/store/themeStore';

const ContactHero = () => {
  const heroImg = contactData.heroImg;
  const isDark = themeStore((state) => state.isDark);
  const header = contactData.header;
  return (
    <section
      id='contact-hero'
      className='flex justify-between flex-row items-center'
    >
      <PageHeader
        title={header.title}
        description={header.description}
        highlightTitle={header.highlightTitle}
      />

      <div className='flex-[50%] w-full max-w-80 lg:max-w-100 '>
        <img
          src={isDark ? heroImg.dark : heroImg.light}
          alt='Contact me image'
          className='brightness-96 w-full'
        />
      </div>
    </section>
  );
};

export default ContactHero;
