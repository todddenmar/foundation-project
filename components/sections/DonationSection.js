import React from 'react';
import ContainerLayout from '../ContainerLayout';
import SectionHeader from '../SectionHeader';
import SectionLayout from '../SectionLayout';
import { HandCoinsIcon } from 'lucide-react';
import { Button } from '../ui/button';

function DonationSection() {
  return (
    <SectionLayout className="bg-neutral-100">
      <ContainerLayout>
        <div className="rounded-[50px] w-full p-5 shadow-lg bg-white">
          <div className="rounded-[30px] bg-gradient-to-br from-red-300 to-highlight p-10 flex flex-col items-center justify-center text-white">
            <div className="max-w-lg flex flex-col items-center">
              <div className="h-[100px] w-[100px] bg-gradient-to-br from-slate-300 to-lowlight rounded-lg border border-white flex flex-col items-center justify-center">
                <HandCoinsIcon className="h-[50px] w-[50px]" />
              </div>
              <div className="mt-5 text-center">
                <div className="text-lowlight font-bold text-lg">
                  Make a donation
                </div>
                <p className="mt-2">
                  Your contribution empowers them to thrive and reach their full
                  potential.
                </p>
                <div className="mt-5">
                  <Button variant="secondary">Donate Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}

export default DonationSection;
