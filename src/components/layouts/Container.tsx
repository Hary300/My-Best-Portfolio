import type { ReactNode } from 'react';
import Header from '../Header';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('p-4  w-full', className)}>
      <div className='block sm:hidden'>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Container;
