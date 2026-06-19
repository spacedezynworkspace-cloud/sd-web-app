'use client';
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
import BeforeAndAfter from '../components/Web/BeforeAndAfter';
import Faqs from '@/components/Faqs';
import Image from 'next/image';
import { IoMail } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';

export default function Home() {
  const CONTACTS = [
    {
      icon: <FaPhone className="size-4" />,
      value: '(+234) 816 075 0898',
    },
    {
      icon: <IoMail className="size-4" />,
      value: 'info@spacedezyn.com',
    },
  ];
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Hero */}
      <HeroSection />

      {/* Statistics  */}
      <Statistics />

      {/* Hospitality  */}
      <Hospitality />

      {/* Our Experience  */}
      <OurExperience />

      {/* Youtube CTA */}
      <YoutubeCTA />

      {/* VR Banner  */}
      <VRBanner />

      {/* Before and after  */}
      <BeforeAndAfter />

      {/* DezynLab  */}
      <DezynLab />

      {/* Featured projects  */}
      <FeaturedProject />

      {/* Contact Form  */}
      <ContactForm />

      {/* Shizen Living Banner  */}
      <ShizenLivingBanner />

      {/* Faqs  */}
      <div className="bg-white sm:py-20">
        <Faqs />
      </div>

      {/* Maps  */}
      <div className="sm:h-[800px] relative items-center sm:pt-0 pt-10  dark:bg-black h-[650px] px-4 flex sm:flex-row flex-col justify-center w-full sm:gap-20 ">
        <div className="absolute inset-0 z-10">
          <Image
            src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1775211621/mapimage_psetbb.jpg"
            className="w-full h-full object-cover"
            alt="Sofa background image"
            width={100}
            height={100}
          />
        </div>
        <div className="relative w-full h-full z-40 flex justify-center items-center">
          <div className="sm:max-w-7xl flex items-center gap-20">
            <div className="sm:w-[1200px] sm:h-[500px] z-20 w-full h-[300px] rounded-lg overflow-hidden ">
              <iframe
                src="https://storage.googleapis.com/maps-solutions-ovf0o6vfm1/locator-plus/7bx4/locator-plus.html"
                width="100%"
                height="100%"
                className="w-full h-full lg:shadow-2xl rounded-lg"
                // style="border:0;"
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex flex-col gap-4 w-full z-20  mb-5 sm:mb-0 py-10">
              {' '}
              <p className="text-[#F19645] font-semibold uppercase">
                How to find us
              </p>
              <h1 className="text-4xl w-full text-wrap  md:text-6xl font-montserrat uppercase font-extrabold tracking-wide">
                Visit Our Office
              </h1>
              <h2 className=" text-black sm:font-semibold text-sm  sm:block">
                Bookings for consultation use this map to find our office. We
                also have a Smart switch storefront at our physical location.
              </h2>
              <ul className="flex flex-col gap-3 bg-[#F19645]/70 font-semibold p-4 rounded-2xl w-max">
                {CONTACTS.map((contact, key) => {
                  return (
                    <li key={key} className="flex text-sm items-center gap-4">
                      {contact.icon}: {contact.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
