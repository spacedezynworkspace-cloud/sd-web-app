import { Metadata } from 'next';
import OurProcess from '@/components/Web/AboutUs/OurProcess';
import SectionHeader from '@/components/Web/SectionHeader';
import Services from '@/components/Web/Services/Services';
import Testimonials from '@/components/Web/Testimonials';

export const metadata: Metadata = {
  title: {
    default: 'Services',
    template: `%s - All services`,
  },
  description: '',
  icons: {
    icon: '/logo.jpg',
  },
};
export default async function BlogPage() {
  return (
    <section className="  min-h-screen w-full  flex flex-col sm:gap-20 gap-14">
      <div className="container mx-auto max-w-7xl sm:p-8 p-4">
        <Services />
      </div>
      <Testimonials />

      {/* Our process  */}
      <div className="sm:max-w-7xl sm:mb-40 w-full px-4 sm:px-6 sm:gap-20 items-end flex flex-col justify-start lg:px-8 mx-auto">
        <div className="text-black sm:mb-0 mb-10 sm:w-1/2">
          <SectionHeader
            introText="OUR PROCESS"
            headerText="This is how we work"
            paragraphText="Space Dezyn can ensure a high-quality, client-focused approach to interior design projects, resulting in beautifully designed spaces that meet the clients’ needs and exceed their expectations."
          />
        </div>

        <OurProcess />
      </div>
    </section>
  );
}
