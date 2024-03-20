import React from 'react';
import SectionLayout from '../SectionLayout';
import ContainerLayout from '../ContainerLayout';
import SectionHeader from '../SectionHeader';
import { ImageIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import Image from 'next/image';

function CampaignsSection() {
  const sampleData = [
    {
      title: 'Back-to-School Drive',
      description:
        'Help us equip underprivileged children with essential school supplies, ensuring they start the academic year prepared and confident.',
      src: '/sample-images/sample-2.jpg',
    },
    {
      title: 'Nutrition Initiative',
      description:
        'Join us in promoting healthy eating habits by supporting our initiative to provide nutritious meals to children in need, fostering their growth and well-being.',
      src: '/sample-images/sample-3.jpg',
    },
    {
      title: 'STEM Education Program',
      description:
        'Support our STEM education program aimed at inspiring curiosity and innovation among children, preparing them for future success in science, technology, engineering, and mathematics.',
      src: '/sample-images/sample-4.jpg',
    },
    {
      title: 'Healthcare Outreach',
      description:
        'Contribute to our healthcare outreach efforts, enabling us to provide essential medical treatment and services to children, ensuring their overall well-being and development.',
      src: '/sample-images/sample-5.jpg',
    },
  ];
  return (
    <SectionLayout>
      <ContainerLayout>
        <SectionHeader title={'Our Campaigns'} />

        <Carousel>
          <CarouselContent className=" -ml-0 2xl:-ml-5">
            {sampleData?.map((item, idx) => {
              return (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3 pl-0 2xl:pl-5"
                  key={`campaign-item-${idx}`}
                >
                  <CampaignCard
                    title={item.title}
                    description={item.description}
                    imageSrc={item.src}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:inline-flex ml-5" />
          <CarouselNext className="hidden lg:inline-flex mr-5" />
        </Carousel>

        <div className="flex justify-center mt-5">
          <Button className="bg-gradient-to-br from-red-300 to-highlight">
            See More
          </Button>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

function CampaignCard({ title, description, imageSrc }) {
  return (
    <div className="p-5 pt-0 md:pt-5">
      <div className="p-5 shadow-lg rounded-[50px] rounded-bl-none">
        <div className="w-full aspect-video flex flex-col items-center justify-center bg-neutral-500 mt-5 relative overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              sizes="100%"
              className="h-full w-full object-cover"
            />
          ) : (
            <ImageIcon className="text-white" />
          )}
        </div>
        <div className="mt-5">
          <div className="font-bold">{title}</div>
          <p className="h-[48px] mt-2 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CampaignsSection;
