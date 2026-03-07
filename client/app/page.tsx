import ContactForm from '@/components/Web/ContactForm';
import DezynLab from '@/components/Web/HomePage/DezynLab';
import HeroSection from '@/components/Web/HomePage/HeroSection';
import TypewriterComponent from '@/components/Web/TypewriterComponent';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Hero */}
      <HeroSection />

      {/* DezynLab  */}
      <DezynLab />

      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
}
