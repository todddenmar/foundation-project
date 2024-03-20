import { cn } from '@/lib/utils';
import React from 'react';

function ContainerLayout({ children, className }) {
  return (
    <div
      className={cn('px-5 md:px-10 mx-auto w-full max-w-[1500px]', className)}
    >
      {children}
    </div>
  );
}

export default ContainerLayout;
