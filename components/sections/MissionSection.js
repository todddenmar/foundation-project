import React from 'react';
import ContainerLayout from '../ContainerLayout';
import SectionHeader from '../SectionHeader';
import {
  GraduationCapIcon,
  HomeIcon,
  HospitalIcon,
  ImageIcon,
  UtensilsIcon,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import SectionLayout from '../SectionLayout';

function MissionSection() {
  const sampleData = [
    {
      title: 'Residence',
      description:
        'Providing safe and stable living environments for children to thrive and focus on their education without worrying about basic shelter needs.',
      Icon: <HomeIcon className="h-[50px] w-[50px]" />,
    },
    {
      title: 'Healthy Food',
      description:
        "Ensuring access to nutritious meals to support children's physical health, cognitive development, and overall well-being.",
      Icon: <UtensilsIcon className="h-[50px] w-[50px]" />,
    },
    {
      title: 'Education',
      description:
        'Offering high-quality and inclusive educational opportunities that nurture curiosity, critical thinking, and a love for learning, preparing children for success in school and beyond.',
      Icon: <GraduationCapIcon className="h-[50px] w-[50px]" />,
    },
    {
      title: 'Treatment',
      description:
        'Offering access to medical care and support services to address any physical or mental health needs, ensuring that children can reach their full potential and participate fully in their education and community.',
      Icon: <HospitalIcon className="h-[50px] w-[50px]" />,
    },
  ];

  return (
    <SectionLayout>
      <ContainerLayout>
        <div>
          <SectionHeader
            title={'Our Mission'}
            description={
              'Empowering children through education, [Foundation Name] fosters curiosity, creativity, and equitable access to quality learning. Our innovative programs and partnerships inspire lifelong learning and cultivate empowered global citizens'
            }
          />

          <div className="mt-12 sm:p-5 rounded-[50px] bg-transparent sm:bg-gradient-to-br from-red-300 to-highlight text-white">
            <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5 ">
              {sampleData.map((item, idx) => {
                return (
                  <div
                    key={`mission-item-${idx}`}
                    className="w-full hover:bg-lowlight group md:p-10 rounded-[50px] hover:-mt-10 transition-all duration-100 hover:shadow-xl"
                  >
                    <div className="rounded-[50px] group-hover:from-slate-400 group-hover:to-lowlight border-white border-[1px] bg-gradient-to-br from-red-300 to-highlight p-5 flex flex-col items-center justify-center w-[200px] h-[200px] mx-auto">
                      {item.Icon}
                    </div>
                    <div className="flex flex-col items-center text-center mt-5">
                      <h5 className="text-lg font-bold">{item.title}</h5>
                      <p className="mt-5">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Carousel className="sm:hidden  rounded-[50px]">
              <CarouselContent className="-ml-5">
                {sampleData.map((item, idx) => {
                  return (
                    <CarouselItem key={`mission-item-${idx}`} className="pl-5">
                      <div className="p-5 bg-gradient-to-br group w-full rounded-[50px] from-red-300 to-highlight transition-all duration-100">
                        <div className="rounded-[50px]  border-white border-[1px] bg-gradient-to-br from-red-300 to-highlight p-5 flex flex-col items-center justify-center mx-auto w-full max-w-[200px] h-[200px]">
                          {item.Icon}
                        </div>
                        <div className="flex flex-col items-center text-center mt-5">
                          <h5 className="text-lg font-bold">{item.title}</h5>
                          <p className="mt-5">{item.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default MissionSection;
