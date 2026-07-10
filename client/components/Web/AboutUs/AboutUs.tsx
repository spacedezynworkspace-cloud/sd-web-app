import React from 'react';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';
import Image from 'next/image';
import OurProcess from './OurProcess';
import OurTeam from './OurTeam';
import WhyChooseUs from './WhyChooseUs';
import ContactForm from '../ContactForm';

const AboutUs = () => {
  return (
    <section className="w-full bg-white dark:bg-black sm:py-20 py-10">
      <div className="sm:max-w-7xl w-full px-4 sm:px-6 sm:gap-20 items-center flex sm:flex-row flex-col justify-start lg:px-8 mx-auto sm:mb-32 mb-20">
        <div className="text-black sm:block hidden sm:w-1/2">
          <SectionHeader
            introText="Designing purposeful, modern spaces across Nigeria."
            headerText=" where craft meets technology"
            paragraphText="Space Dezyn transforms spaces into purposeful, modern environments. We deliver full-service interior design, renovation and consultation across residential, commercial, hospitality and retail sectors, blending considered aesthetics, practical planning and smart integrations so every project is beautiful, functional and future-ready."
          />
          <div className=" mt-8 flex justify-start">
            <Link
              href="https://blog.spacedezyn.com"
              className="sm:w-auto px-4 py-3 rounded-lg  bg-[#F19645]   text-white font-semibold text-center text-xs sm:text-sm "
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="text-black sm:hidden block  w-full">
          <SectionHeader
            introText="Designing purposeful, modern spaces across Nigeria."
            headerText=" where craft meets technology"
            paragraphText=""
          />
        </div>

        <div>
          <Image
            src={
              'https://res.cloudinary.com/dcd8gvgup/image/upload/v1783612328/1706512782-img1-01_c8wdzi.jpg'
            }
            alt="Image of an interior space with technological components for smart home experience"
            width={800}
            height={700}
            className="rounded-3xl"
          />
          <div className="mt-8 flex sm:hidden justify-start">
            <Link
              href="https://blog.spacedezyn.com"
              className="sm:w-auto px-4 py-3 rounded-lg  bg-[#F19645]   text-white font-semibold text-center text-xs sm:text-sm "
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

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

      {/* Our Team  */}
      <div className="sm:max-w-7xl w-full px-4 sm:px-6 sm:gap-20 items-end flex flex-col justify-start lg:px-8 mx-auto mb-40">
        <div className="text-black sm:hidden mt-20">
          <SectionHeader
            introText="OUR TEAM"
            headerText="Meet our team"
            paragraphText="Every home and space is unique in a way only the dreamer understands. Our aim at Space Dezyn is simple: to design places that restore joy, encourage rest, and become the sanctuary people long for."
          />
        </div>

        <OurTeam />
      </div>

      {/* Why choose us  */}
      <div className="sm:max-w-7xl w-full px-4 sm:px-6 sm:gap-20 items-start flex sm:flex-row flex-col justify-start lg:px-8 mx-auto sm:mb-32 mb-20">
        <div className="text-black sm:block hidden sm:w-1/2">
          <SectionHeader
            introText="Work with us"
            headerText="Why Choose Space Dezyn"
            paragraphText="We prioritize efficiency, ensuring your project is completed quickly, while maintaining a sharp focus on smart execution and meticulous planning."
          />
        </div>
        <WhyChooseUs />
      </div>

      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
};

export default AboutUs;
