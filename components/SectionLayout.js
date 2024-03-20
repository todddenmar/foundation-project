import { cn } from '@/lib/utils';
import React from 'react';

function SectionLayout({ children, className }) {
  return (
    <section className={cn('py-5 md:py-10 lg:py-20', className)}>
      {children}
    </section>
  );
}

export default SectionLayout;
