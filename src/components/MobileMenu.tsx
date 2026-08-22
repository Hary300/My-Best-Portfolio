import { mobileMenus, type MobileMenuSlug } from '@/data/mobile-menus';
import { Button } from './ui/button';
import { useSearchParams } from 'react-router-dom';

const MobileMenu = () => {
  const [, setSearchParams] = useSearchParams();

  const handleClickMenu = (mobileMenuSlug: MobileMenuSlug) => {
    const params = new URLSearchParams();
    params.set('tab', mobileMenuSlug);
    setSearchParams(params);
  };
  return (
    <div className='fixed bottom-0 sm:hidden flex justify-between dark:bg-[#191C1F] bg-[#CCCCCC] items-center w-full'>
      {mobileMenus.map((menu) => {
        const Icon = menu.icon;
        return (
          <Button
            variant='ghost'
            key={menu.id}
            className='flex-1 flex flex-col gap-1 items-center h-20 rounded-none'
            onClick={() => handleClickMenu(menu.slug)}
          >
            <Icon className='size-6' />
            <p>{menu.label}</p>
          </Button>
        );
      })}
    </div>
  );
};

export default MobileMenu;
