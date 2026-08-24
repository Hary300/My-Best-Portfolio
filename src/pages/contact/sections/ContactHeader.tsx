import { contactData } from '@/data/contact';
// import { themeStore } from '@/store/themeStore';

const ContactHeader = () => {
  // const isDark = themeStore((state) => state.isDark);
  const data = contactData.header;
  return (
    <section
      id='contact-header'
      className='flex justify-between flex-col xl:flex-row xl:items-center gap-4'
    >
      <div className='flex flex-col gap-2 sm:gap-3 xl:gap-6 flex-[50%]'>
        <p className='text-xl sm:text-3xl font-bold xl:text-5xl'>
          {data.title}{' '}
          <span className='text-portfolio-green'>{data.highlightTitle}</span>
        </p>
        <div className='flex flex-col gap-2 max-w-95'>{data.description}</div>
      </div>

      <div className='flex-[50%] w-full max-w-200'>
        {/* <img
          src={isDark ? darkAboutMe : lightAboutMe}
          alt='about me image'
          className='brightness-90 w-full'
        /> */}
        <div className='h-70 w-full bg-zinc-600' />
      </div>
    </section>
  );
};

export default ContactHeader;
