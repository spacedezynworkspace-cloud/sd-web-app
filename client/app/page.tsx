import ContactForm from '@/components/Web/ContactForm';
import DezynLab from '@/components/Web/HomePage/DezynLab';
import FeaturedProject from '@/components/Web/HomePage/FeaturedProject';
import HeroSection from '@/components/Web/HomePage/HeroSection';
import OurExperience from '@/components/Web/HomePage/OurExperience';
import VRBanner from '@/components/Web/HomePage/VRBanner';
import YoutubeCTA from '@/components/Web/HomePage/YoutubeCTA';
import SectionHeader from '@/components/Web/SectionHeader';
import Hospitality from '@/components/Web/Services/Hospitality';
import ShizenLivingBanner from '@/components/Web/ShizenLivingBanner';
import Statistics from '@/components/Web/Statistics';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Hero */}
      <HeroSection />

      {/* Statistics  */}
      <Statistics />

      {/* Hospitality  */}
      <Hospitality />

      {/* VR Banner  */}
      <VRBanner />

      {/* Our Experience  */}
      <OurExperience />

      {/* DezynLab  */}
      <DezynLab />

      {/* Featured projects  */}
      <FeaturedProject />

      {/* Youtube CTA */}
      <YoutubeCTA />

      {/* Shizen Living Banner  */}
      <ShizenLivingBanner />

      <div className="lg:h-[500px] bg-white dark:bg-black h-[650px] px-4 flex mb-20 sm:flex-row flex-col justify-center w-full lg:px-44 ">
        <div className="text-black mb-10 sm:mb-0 py-10">
          <SectionHeader
            introText="How to find us"
            headerText="Visit Our Office"
            paragraphText="Bookings for consultation use this map to find our office. We also have a Smart switch storefront at our physical location."
          />
        </div>
        <div className="w-full h-full rounded-lg overflow-hidden ">
          <iframe
            src="https://storage.googleapis.com/maps-solutions-ovf0o6vfm1/locator-plus/7bx4/locator-plus.html"
            width="100%"
            height="100%"
            className="w-full h-full lg:shadow-2xl rounded-lg"
            // style="border:0;"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
}
