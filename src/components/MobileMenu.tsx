import { mobileMenus, type MobileMenuSlug } from '@/data/mobile-menus';
import { Button } from './ui/button';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQuery = searchParams.get('tab');
  const activeTab = tabQuery ? tabQuery : 'home';

  const handleClickMenu = (mobileMenuSlug: MobileMenuSlug) => {
    const params = new URLSearchParams();
    if (mobileMenuSlug === 'home') {
      params.delete('tab');
    } else {
      params.set('tab', mobileMenuSlug);
    }

    setSearchParams(params);
  };
  return (
    <div className='fixed bottom-0 sm:hidden flex justify-between dark:bg-portfolio-dark-secondary bg-portfolio-light-secondary items-center w-full dark:border-t-[1.5px] z-10'>
      {mobileMenus.map((menu) => {
        const Icon = menu.icon;
        return (
          <Button
            variant='ghost'
            key={menu.id}
            className={cn(
              'flex-1 flex flex-col gap-1 items-center h-20 rounded-none hover:bg-portfolio-green-soft/70 dark:hover:bg-portfolio-green/40',
              menu.slug === activeTab &&
                'bg-portfolio-green-soft/70 dark:bg-portfolio-green/40'
            )}
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
