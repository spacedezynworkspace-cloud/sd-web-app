'use client';
import { Alert } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function DezynLabPage() {
  return (
    <div className="items-center dark:bg-black px-4 flex flex-col justify-center w-full sm:gap-20 ">
      <div className="absolute w-full h-[500px] flex items-center justify-center inset-0 z-10">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-lg pointer-events-none z-20" />

        <div className="h-full absolute max-w-7xl mx-auto justify-start z-20 w-full sm:px-0 px-4 flex items-center">
          <div>
            <div className="pl-0 my-4">
              <h1 className="text-white sm:text-4xl text-4xl font-extrabold">
                Next Cohort <span className="text-orange-500">2026</span>
              </h1>
              <p className="uppercase text-white font-bold">
                4th aug 2026 | 9am - 12noon | abuja
              </p>
              <p className="text-orange-500 uppercase font-bold">
                Interior design professional program
              </p>
              <p className="text-white uppercase mb-20 font-bold">
                Monday, wednesday, & friday
              </p>
              <small className="text-white ">Limited slots available</small>
            </div>

            <Link
              href={'#hs-form-frame'}
              className="bg-orange-500  ml-0 rounded-xs shadow px-3 py-1"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <Image
          src="https://res.cloudinary.com/dcd8gvgup/image/upload/v1781873699/LX_AZ85_HOM_Magni_16_sfmlin.jpg"
          alt="Dezynlab hero image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="flex w-full -mt-20 sm:-mb-10 mb-3">
        <div>
          <Alert
            color={'danger'}
            title={`Limited slots available. Join waitlist now!`}
          />
        </div>
      </div>
      <div
        className="block w-full sm:h-full shadow rounded-2xl border-t-3 border-b-3 border-orange-500 mb-10 max-h-[1900px]"
        id="registration"
      >
        <div
          className="hs-form-frame w-full p-2"
          data-region="eu1"
          data-form-id="02679091-3eb9-4281-847c-7b30d0f77ee5"
          data-portal-id="148723280"
          id="hs-form-frame"
        ></div>
      </div>
    </div>
  );
}
