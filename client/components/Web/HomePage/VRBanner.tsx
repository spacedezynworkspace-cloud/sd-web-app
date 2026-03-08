import Image from 'next/image';
import React from 'react';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';

const VRBanner = () => {
  return (
    <section className="flex items-center bg-white dark:bg-black sm:py-14">
      <div className="bg-[#F19645] sm:h-[30rem] sm:flex-row gap-10 flex-col-reverse flex items-end shadow-2xl sm:rounded-lg max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 mx-auto">
        <div>
          <Image
            src={
              'https://res.cloudinary.com/dcd8gvgup/image/upload/v1772928601/ChatGPT_Image_Mar_8_2026_01_07_59_AM_s6cykm.png'
            }
            alt="Image of a young ma using a virtual reality headgear to view his interior design plan"
            width={800}
            height={700}
            className=""
          />
        </div>
        <div className="sm:w-[45%] w-full sm:pr-16 sm:mb-10">
          <SectionHeader
            headerText="3D Virtual Space Visualization"
            paragraphText="We provide an immersive and interactive experience that enables you to visualize and understand complex concepts, simulate human experiences, and explore virtual worlds. We enable you to see your dream space in reality before they come true."
          />
          <Link
            href="#"
            className="w-1/2 mt-4 px-4 py-3 sm:px-8 rounded-lg  bg-black  text-white font-semibold text-center text-xs sm:text-sm flex justify-center"
          >
            Book consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VRBanner;
