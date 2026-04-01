'use client';
import Image from 'next/image';
import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import SectionHeader from './SectionHeader';
import Link from 'next/link';

const BeforeAndAfter = () => {
  return (
    <section className="bg-white w-full dark:bg-black sm:py-20 py-10 sm:mb-0 mb-10">
      <div className="sm:max-w-7xl w-full px-4 items-center flex justify-center flex-col sm:px-0 mx-auto">
        <div className="flex sm:flex-row flex-col sm:gap-32 gap-10 w-full">
          <div className="flex-col text-black w-full flex items-start">
            <SectionHeader
              introText="Before & After Interior Design"
              headerText="transform your space in just a swipe"
              paragraphText="We transform your space seamlessly with ease. Luxury and simplicity balances quality and ease"
            />
            <Link
              href="#"
              className="sm:w-auto hidden  mt-8 px-4 py-3 sm:px-8 rounded-lg  bg-[#F19645]   text-white font-semibold text-center text-xs sm:text-sm sm:flex justify-center"
            >
              Explore transformation
            </Link>
          </div>
          <div className="w-full rounded-lg">
            <ReactCompareSlider
              itemOne={
                <div className="w-full h-full ">
                  <Image
                    src="/before.jpg"
                    width={100}
                    height={100}
                    alt="Image one"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              }
              itemTwo={
                <div className="w-full h-full ">
                  <Image
                    src="/after.jpg"
                    width={100}
                    height={100}
                    alt="Image two"
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              }
              changePositionOnHover
              style={{
                flexGrow: 1,
                width: '100%',
                height: '100%',
                maxHeight: '100dvh',
                backgroundColor: 'white',
                backgroundImage:
                  ' linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                borderRadius: '10px',
              }}
            />
            <Link
              href="#"
              className="sm:w-auto sm:hidden  mt-8 px-4 py-3 sm:px-8 rounded-lg  bg-[#F19645]   text-white font-semibold text-center text-xs sm:text-sm flex justify-center"
            >
              Explore transformation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfter;
