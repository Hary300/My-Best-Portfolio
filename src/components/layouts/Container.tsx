import { useEffect, useRef, useState, type ReactNode } from 'react';
import Header from '../Header';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { FaArrowUpLong } from 'react-icons/fa6';
import type { LucideIcon } from 'lucide-react';

interface ContainerProps {
  Icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className, title, Icon }: ContainerProps) => {
  const [isScroll, setIsScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScroll(container.scrollTop > 10);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        'relative p-4 sm:px-10  w-full flex flex-col gap-4 overflow-y-auto h-screen',
        className
      )}
    >
      <div className='block sm:hidden'>
        <Header />
      </div>
      <div className='flex gap-1 items-center'>
        <Icon className='size-4 text-portfolio-green' />
        <h2 className='font-semibold text-md sm:text-xl'>{title}</h2>
      </div>
      {children}
      <Button
        className={cn(
          'fixed bottom-23 right-4 sm:bottom-4 lg:right-8 lg:bottom-8 xl:right-10 xl:bottom-10 size-12 bg-portfolio-green rounded-full opacity-0',

          isScroll && 'opacity-100'
        )}
        onClick={scrollUp}
      >
        <FaArrowUpLong className='size-6 text-portfolio-white ' />
      </Button>
    </div>
  );
};

export default Container;
