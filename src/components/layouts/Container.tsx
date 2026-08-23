import type { ReactNode } from 'react';
import Header from '../Header';
import { cn } from '@/lib/utils';

interface ContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className, title }: ContainerProps) => {
  return (
    <div className={cn('p-4 sm:px-10  w-full flex flex-col gap-4', className)}>
      <div className='block sm:hidden'>
        <Header />
      </div>
      <h2 className='font-semibold text-md sm:text-xl'>{title}</h2>
      {children}
    </div>
  );
};

export default Container;
