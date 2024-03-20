import { StarIcon } from 'lucide-react';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ContainerLayout from './ContainerLayout';

function ProjectList() {
  const sampleData = [
    {
      title: 'lorem ipsum',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
    },
    {
      title: 'lorem ipsum',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
    },
    {
      title: 'lorem ipsum',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
    },
    {
      title: 'lorem ipsum',
    },
    {
      title: 'Lorem Ipsum is simply dummy text',
    },
    {
      title: 'lorem ipsum',
    },
  ];
  return (
    <div className="bg-neutral-200 w-full overflow-hidden">
      <ContainerLayout>
        <div className=" py-5 md:flex items-center gap-10 ">
          <span className="font-bold text-nowrap ">On going projects:</span>
          <Carousel className="flex-1 w-full mt-2 md:mt-0">
            <CarouselContent>
              {sampleData.map((item, idx) => (
                <CarouselItem
                  key={`proj-item-${idx}`}
                  className="basis-1/1 md:basis-1/3 lg:basis-1/5 flex justify-center"
                >
                  <span className="italic flex items-center text-nowrap">
                    <StarIcon className="h-[10px]" />
                    {item.title}
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ProjectList;
