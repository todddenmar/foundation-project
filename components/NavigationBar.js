'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';
import ContainerLayout from './ContainerLayout';
import { MenuIcon } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

function NavigationBar() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const pathname = usePathname();
  const sampleData = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Our Campaigns',
      path: '/campaigns',
    },
    {
      text: 'Donations',
      path: '/donations',
    },
    {
      text: 'About',
      path: '/about',
    },
  ];
  return (
    <nav className="bg-lowlight w-full border-b border-b-separator h-[60px] flex flex-col justify-center">
      <ContainerLayout>
        <div className="flex justify-between items-center text-white">
          <Link href={'/'} className="flex gap-2 md:gap-4 items-center">
            <div className="h-[40px] w-[40px] rounded-full bg-gradient-to-br from-white to-highlight"></div>
            <span className="font-bold md:text-xl uppercase">Foundation</span>
          </Link>

          <div className=" items-center justify-between hidden lg:flex gap-10">
            <ul className=" gap-10 items-center hidden md:flex ">
              {sampleData.map((item, idx) => {
                return (
                  <LinkItem
                    key={`link-item-${idx}`}
                    text={item.text}
                    path={item.path}
                    isActive={item.path === pathname}
                  />
                );
              })}
            </ul>
            <div className=" items-center justify-between flex gap-2">
              <Button className="bg-highlight">Join our Team</Button>
              <div
                style={{
                  alignSelf: 'stretch',
                  width: '1px',
                }}
                className="mx-2 bg-separator"
              />
              <Link href="/sign-in" className="text-sm">
                Sign in
              </Link>
            </div>
          </div>
          <Sheet open={isOpenMobileMenu} onOpenChange={setIsOpenMobileMenu}>
            <SheetTrigger asChild>
              <button
                onClick={() => setIsOpenMobileMenu(true)}
                className="block lg:hidden"
              >
                <MenuIcon className="text-white" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="h-full w-full flex justify-center items-center">
                <ul className="grid">
                  {sampleData.map((item, idx) => {
                    return (
                      <li
                        key={`mobile-link-item-${idx}`}
                        className="py-2"
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        <Link className="block" href={item.path}>
                          {item.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </ContainerLayout>
    </nav>
  );
}

function LinkItem({ text, path, isActive }) {
  return (
    <li
      className={cn(
        'text-white text-sm h-[60px] flex flex-col justify-center',
        {
          'border-b-highlight border-b-2': isActive,
        }
      )}
    >
      <Link href={path}>{text}</Link>
    </li>
  );
}

export default NavigationBar;
