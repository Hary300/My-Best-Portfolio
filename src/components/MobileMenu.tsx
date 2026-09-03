import { Button } from './ui/button';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { menus, type MenuSlug } from '@/data/menusData';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoMenu } from 'react-icons/io5';

const MobileMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQuery = searchParams.get('tab');
  const activeTab = tabQuery ? tabQuery : 'home';

  const mobileVisibleMenus = menus.slice(0, 4);
  const mobileHiddenMenus = menus.slice(4);

  const handleClickMenu = (mobileMenuSlug: MenuSlug) => {
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
      {mobileVisibleMenus.map((menu) => {
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className={cn(
              'flex-1 flex flex-col gap-1 items-center h-20 rounded-none hover:bg-portfolio-green-soft/70 dark:hover:bg-portfolio-green/40'
            )}
          >
            <IoMenu className='size-6' />
            <p>More</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-full' alignOffset={5}>
          {mobileHiddenMenus.map((menu) => {
            const Icon = menu.icon;
            return (
              <DropdownMenuItem key={menu.id}>
                <Button
                  variant='ghost'
                  className={cn(
                    'flex px-3 h-10 items-center rounded-md justify-between hover:bg-portfolio-green-soft/70 dark:hover:bg-portfolio-green/40 w-full',
                    menu.slug === activeTab &&
                      'bg-portfolio-green-soft/70 dark:bg-portfolio-green/40'
                  )}
                  onClick={() => handleClickMenu(menu.slug)}
                >
                  <div className='flex gap-2 '>
                    <Icon />
                    <span>{menu.label}</span>
                  </div>
                </Button>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
