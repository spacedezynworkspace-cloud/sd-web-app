import ContactForm from '@/components/Web/ContactForm';
import DezynLab from '@/components/Web/HomePage/DezynLab';
import FeaturedProject from '@/components/Web/HomePage/FeaturedProject';
import HeroSection from '@/components/Web/HomePage/HeroSection';
import OurExperience from '@/components/Web/HomePage/OurExperience';
import VRBanner from '@/components/Web/HomePage/VRBanner';
import TypewriterComponent from '@/components/Web/TypewriterComponent';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Hero */}
      <HeroSection />

      {/* VR Banner  */}
      <VRBanner />

      {/* Our Experience  */}
      <OurExperience />

      {/* DezynLab  */}
      <DezynLab />

      {/* Featured projects  */}
      <FeaturedProject />

      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
}
