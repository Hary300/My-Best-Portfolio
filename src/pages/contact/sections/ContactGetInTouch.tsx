import { contactData } from '@/data/contact';

const ContactGetInTouch = () => {
  const data = contactData.getInTouch;
  return (
    <section
      id='contact-get-in-touch'
      className='p-4 rounded-md bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-2 flex flex-col gap-4 lg:flex-1 shadow-subtle'
    >
      <div className='flex flex-col gap-2'>
        <p className='pb-1 border-b-3 border-portfolio-green font-semibold text-lg w-fit'>
          {data.title}
        </p>
        <p className='text-xs'>{data.description}</p>
      </div>
      <div className='flex flex-col gap-5'>
        {data.items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className='flex gap-4 items-center'>
              <Icon className='size-7 text-portfolio-green dark:text-emerald-300 dark:drop-shadow-glow-icon' />
              <div className='flex flex-col'>
                <p className='text-sm font-semibold'>{item.label}</p>
                <p className='text-xs'>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactGetInTouch;
