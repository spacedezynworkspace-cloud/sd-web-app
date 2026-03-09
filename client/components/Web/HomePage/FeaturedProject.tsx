'use client';
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import SectionHeader from '../SectionHeader';

interface FeaturedProjectProps {
  header: string;
  image_link: string;
  category: string;
  filter: string;
}

const FEATURED_PROJECT: FeaturedProjectProps[] = [
  {
    header: 'Northside Commerce (Commercial Office - Kaduna)',
    image_link:
      'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469001/IMG_5479_cw9qc7.heic',
    category: 'Commercial',
    filter: 'smart-homes',
  },
  {
    header: 'Warm Nest (Boho homes)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757961391/IMG_3748_ogzjkm.heic',
    category: 'home',
    filter: 'smart-homes',
  },
  {
    header: 'Vintage Barrel (Wine Store)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948056/IMG_5259_uub9e4.heic',
    category: 'Vintage',
    filter: 'smart-homes',
  },
  {
    header: 'Project Haven (3 Bed Shortlet)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948066/IMG_5094_a9fadb.heic',
    category: 'Shortlet',
    filter: 'smart-homes',
  },
  {
    header: 'Project Stone (Smart Modern Office)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/v1757948042/IMG_5360_ehdjbv.jpg',
    category: 'Smart',
    filter: 'smart-homes',
  },
  {
    header: 'Project Ruby (Transitional Modern Home Design)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948093/IMG_7250_obw94r.heic',
    category: 'Transitional',
    filter: 'smart-homes',
  },
  {
    header: 'Project Luxe (Transitional Home Design)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948044/IMG_5370_xigu4s.jpg',
    category: 'Transitional',
    filter: 'transitional-homes',
  },
  {
    header: 'Project Indigo (Comtemporary 4 Bed Home)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948035/IMG_2331_p2mack.heic',
    category: 'Contemporary',
    filter: 'smart-homes',
  },
  {
    header: 'Project Freezy (Modern Home)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948091/IMG_8083_igevag.heic',
    category: 'Modern',
    filter: 'smart-homes',
  },
  {
    header: 'Project Eco (Minimalist Home)',
    image_link:
      'https://res.cloudinary.com/dodzjccey/image/upload/f_auto,q_auto/v1757948104/IMG_6097_fwn3qu.heic',
    category: 'Minimalist',
    filter: 'smart-homes',
  },
];

const FeaturedProject = () => {
  const autoplay = Autoplay();

  const emblaOptions: EmblaOptionsType = {
    align: 'start',
    containScroll: 'trimSnaps',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoplay]);
  console.log(emblaApi);

  return (
    <section className="bg-black py-40 ">
      <div className="max-w-7xl px-4 sm:px-6 items-center flex justify-center sm:flex-row flex-col gap-10 lg:px-8 mx-auto">
        <div className="text-white sm:w-1/2 w-full flex flex-col gap-4 p">
          <SectionHeader
            introText="Projects gallery"
            headerText="Featured Projects"
          />
          <h2 className=" text-white dark:text-gray-200 sm:block">
            Transforming Spaces, Elevating Experiences. At Space Deszyn, we
            believe in transforming spaces into reflections of our clients'
            personalities and lifestyles.
          </h2>

          {/* <div className="sm:flex hidden sm:flex-row flex-col gap-4 items-center">
            <Link
              href="/"
              className=" bg-[#F19645]  w-[14rem] text-white rounded-md px-2 py-3 text-sm flex gap-2 justify-center font-semibold items-center"
              aria-label="Chat on WhatsApp"
            >
              <span>Apply now</span>
            </Link>
            <Link
              href="https://wa.me/2348160750898?text=Hello%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-green-600 w-[14rem] rounded-md px-2 py-3 text-sm flex gap-2 justify-center font-semibold items-center"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="size-6" color="green" />
              <span>Chat on whatsApp</span>
            </Link>
          </div> */}
        </div>
        {/* Main Carousel */}
        <div className="overflow-hidden sm:w-1/2 w-full" ref={emblaRef}>
          <div className="flex gap-5">
            {emblaApi &&
              FEATURED_PROJECT.map((project, index) => (
                <div key={index} className="min-w-[80%] sm:min-w-[45%]">
                  <button
                    className={`group relative sm:h-[350px] h-[280px] w-full overflow-hidden rounded-lg transition`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center " />
                    <Image
                      alt="Card example background"
                      className="z-0 w-full h-full scale-125 -translate-y-6 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      src={project.image_link}
                      fill
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 transition-opacity duration-500 ease-in-out group-hover:from-black/60 group-hover:via-black/70 group-hover:to-black/90" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col items-start justify-between sm:p-6 pb-6 p-4 text-white transition-all duration-500 ease-in-out ">
                      {/* Title */}
                      <h3 className="text-xl text-left leading-tight font-bold capitalize transition-transform duration-500 ease-in-out group-hover:translate-y-2">
                        {project.header}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-2 translate-y-4 text-left text-xs opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                        {project.category}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Thumbs / Indicators */}
        {/* <div className='mt-4 flex justify-center gap-2'>
        {BOOKING_SESSIONS.map((session, index) => (
          <button
            key={session._id}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition ${
              selectedSession === session._id ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div> */}
      </div>
    </section>
  );
};

export default FeaturedProject;
