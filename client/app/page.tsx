import ContactForm from '@/components/Web/ContactForm';
import DezynLab from '@/components/Web/HomePage/DezynLab';
import FeaturedProject from '@/components/Web/HomePage/FeaturedProject';
import HeroSection from '@/components/Web/HomePage/HeroSection';
import OurExperience from '@/components/Web/HomePage/OurExperience';
import VRBanner from '@/components/Web/HomePage/VRBanner';
import YoutubeCTA from '@/components/Web/HomePage/YoutubeCTA';
import Hospitality from '@/components/Web/Services/Hospitality';
import ShizenLivingBanner from '@/components/Web/ShizenLivingBanner';
import Statistics from '@/components/Web/Statistics';
import BeforeAndAfter from '../components/Web/BeforeAndAfter';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Hero */}
      <HeroSection />

      {/* Statistics  */}
      <Statistics />

      {/* Hospitality  */}
      <Hospitality />

      {/* Before and after  */}
      <BeforeAndAfter />

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

      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
}
