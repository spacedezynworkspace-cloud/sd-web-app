'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TypewriterComponent from '@/components/Web/TypewriterComponent';
import StartProjectCTAForm from '@/components/StartProjectCTAForm';
import { Button } from '@heroui/react';
const HeroSection = () => {
  return (
    <section className="relative w-full sm:min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        poster="/sd-video-hero-placeholder.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dcd8gvgup/video/upload/f_auto,q_auto/v1771591956/vecteezy_interior-of-modern-cozy-bedroom-with-large-bed-and-ambient_59018780_jchrtp.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* content  */}
      <div className="relative z-20 flex sm:mt-20 mt-24 min-h-screen items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto flex sm:flex-row flex-col justify-between">
          {' '}
          <div className="sm:w-[55%] w-full">
            <p className="text-[#F19645] uppercase font-semibold mb-4">
              <span className="text-white">Welcome to</span> Space Dezyn
            </p>
            <h1 className="text-4xl md:text-6xl font-montserrat uppercase font-extrabold tracking-wide">
              The Future of Smart Interior Design in Nigeria
            </h1>

            <h2 className="mt-4 hidden  text-gray-200 sm:block">
              {/* Transforming Homes & Commercial Spaces */}
              We transform spaces into modern, intelligent environments designed
              for comfort, elegance, and connection.
            </h2>

            <div className="mt-6 sm:mb-10 flex flex-col sm:flex-row items-center font-semibold  mx-auto">
              <div className="sm:w-[39rem] sm:h-auto h-[7rem] flex flex-col sm:flex-row sm:items-center   font-semibold  w-full">
                <TypewriterComponent />
              </div>
            </div>

            <div className="flex sm:items-center gap-6">
              <StartProjectCTAForm bgBtn={true} />

              <Button
                as={'a'}
                className="w-1/2 sm:w-auto px-4 py-2 sm:px-8 rounded-xl border border-white bg-transparent text-white font-semibold text-center text-xs sm:text-sm flex justify-center"
              >
                Visit Store
              </Button>
            </div>
          </div>
          <div className="relative sm:flex hidden items-center justify-center sm:w-[40%] ">
            {/* <div className="relative w-full">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <FaSpotify color="#1DB954" className="size-10 " />
              </div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <FaYoutube color="#FF0033" className="size-10 " />
              </div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <BiSolidCctv className="size-10 " />
              </div>
              <p className="absolute bottom-0 w-full">
                Experience your Space Different
              </p>
            </div> */}
            <Image
              src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1773004918/ChatGPT_Image_Mar_8_2026_10_14_35_PM_mu9sch.png"
              alt="Smart Home Panel"
              width={1000}
              height={500}
              priority
            />
            <p className="absolute bottom-0 w-full">
              Experience your Space Different
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
