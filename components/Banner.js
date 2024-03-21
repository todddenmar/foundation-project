import React from 'react';
import { Button } from './ui/button';
import ContainerLayout from './ContainerLayout';
import Image from 'next/image';

function Banner() {
  return (
    <div className="w-full bg-[#122f3f]">
      <div className="sm:py-10">
        <ContainerLayout className={'px-0 sm:px-5'}>
          <div className="md:h-[600px] w-full bg-gradient-to-br from-red-300 to-highlight sm:rounded-[50px] flex flex-col justify-center items-center px-5 py-10 lg:p-10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:px-10 xl:px-20 sm:gap-10 items-center">
              <div className="max-w-md py-10 sm:py-0 flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0">
                <h1 className="text-white text-2xl sm:text-4xl lg:text-6xl uppercase font-bold transition-all duration-300">
                  Discover what our foundation does with its influence
                </h1>
                <Button className="bg-lowlight mt-5 md:h-[50px] font-bold">
                  Explore all work
                </Button>
              </div>
              <div className="w-full transition-all duration-300 aspect-square mx-auto relative ">
                <Image
                  src={'/sample-images/sample-1.png'}
                  alt="sample banner image"
                  fill
                  sizes="100%"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
}

export default Banner;
