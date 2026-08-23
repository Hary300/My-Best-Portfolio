import DarkModeButton from './DarkModeButton';

const Header = () => {
  return (
    <div className='flex  justify-between items-center'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl'>
          HARY<span className='text-portfolio-green'>300</span>
        </h1>
        <p className='text-zinc-500'>Full Stack developer</p>
      </div>
      <DarkModeButton />
    </div>
  );
};

export default Header;
