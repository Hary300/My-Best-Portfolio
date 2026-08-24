import { contactData } from '@/data/contact';
import { themeStore } from '@/store/themeStore';
import darkContact from '@/assets/images/dark-contact.webp';
import lightContact from '@/assets/images/light-contact.webp';

const ContactHeader = () => {
  const isDark = themeStore((state) => state.isDark);
  const data = contactData.header;
  return (
    <section
      id='contact-header'
      className='flex justify-between  flex-row items-center'
    >
      <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-[50%]'>
        <p className='text-xl sm:text-3xl font-bold xl:text-5xl'>
          {data.title}{' '}
          <span className='text-portfolio-green'>{data.highlightTitle}</span>
        </p>
        <div className='flex flex-col gap-2 max-w-95'>{data.description}</div>
      </div>

      <div className='flex-[50%] w-full max-w-80 lg:max-w-150 '>
        <img
          src={isDark ? darkContact : lightContact}
          alt='Contact me image'
          className='brightness-96 w-full'
        />
      </div>
    </section>
  );
};

export default ContactHeader;
