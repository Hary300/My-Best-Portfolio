import { mobileMenus, type MobileMenuSlug } from '@/data/mobile-menus';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import { socialLinks } from '@/data/social-links';
import Header from './Header';

const SidebarMenu = () => {
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
    <div className='hidden sm:flex flex-col justify-between lg:min-w-70 bg-portfolio-light-secondary dark:bg-portfolio-dark-secondary border-r-2 h-screen p-4'>
      <div className='flex flex-col gap-4'>
        <Header />
        <div className='flex gap-3 bg-portfolio-green-soft/70 dark:bg-portfolio-green/40 px-3 py-2 rounded-md items-center border'>
          <div className='size-2 rounded-full aspect-square shrink-0 bg-green-500' />
          <p className='dark:text-zinc-300'>Available for opportunities</p>
        </div>
        <div className='flex flex-col gap-1'>
          {mobileMenus.map((menu) => {
            const Icon = menu.icon;
            return (
              <Button
                variant='ghost'
                key={menu.id}
                className={cn(
                  'flex px-3 h-10 items-center rounded-md justify-between hover:bg-portfolio-green-soft/70 dark:hover:bg-portfolio-green/40',
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
            );
          })}
        </div>
      </div>
      <div className='flex flex-col gap-4 border-t-2 pt-4'>
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.id}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-2 cursor-pointer items-center'
            >
              <Icon />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;
