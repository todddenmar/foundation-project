import Banner from '@/components/Banner';
import ProjectList from '@/components/ProjectList';
import CampaignsSection from '@/components/sections/CampaignsSection';
import DonationSection from '@/components/sections/DonationSection';
import MissionSection from '@/components/sections/MissionSection';
import Image from 'next/image';
export const metadata = {
  title: 'Foundation',
  description: 'Discover what our foundation does with its influence',
};
export default function Home() {
  return (
    <main className="">
      <Banner />
      <ProjectList />
      <MissionSection />
      <DonationSection />
      <CampaignsSection />
    </main>
  );
}
