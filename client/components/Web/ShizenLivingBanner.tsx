import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShizenLivingBanner = () => {
  return (
    <section className="w-full sm:py-20 py-10 bg-white  dark:bg-black p-4">
      <div className="max-w-7xl relative px-4 sm:px-6 items-center sm:h-[35rem] h-[25rem] flex justify-center flex-col lg:px-8 mx-auto bg-[#A9BA9D] rounded-3xl">
        <Image
          src={
            'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773064582/virender-singh-wlrGF9qkXFw-unsplash_vvq16g.jpg'
          }
          alt="Shizen Living"
          width={500}
          height={500}
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl opacity-80"
        />
        <div className="relative z-10 text-center max-w-2xl">
          <p>Smart Living</p>
          <h1 className="sm:text-6xl text-2xl font-extrabold">Shizen Living</h1>
          <p className="sm:text-lg text-xs sm:flex hidden mb-10">
            Get smart and luxury furnitures that blend technology with elegance.
            Our smart furniture collection offers innovative designs that
            enhance comfort and functionality in your living spaces.
          </p>
          <p className="sm:text-lg text-xs flex sm:hidden mb-10">
            Explore our range of smart furniture and elevate your living space
          </p>
          <Link
            href={''}
            className="bg-amber-950 text-white rounded-lg text-xs px-2 py-3 sm:text-sm font-semibold"
          >
            Visit our store
          </Link>
        </div>
        <div>hhhh</div>
      </div>
    </section>
  );
};

export default ShizenLivingBanner;
