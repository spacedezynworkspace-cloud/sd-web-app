'use client';
import React from 'react';
import { FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Card, CardHeader, CardFooter, Image, Button } from '@heroui/react';
import { IoHome } from 'react-icons/io5';

import SectionHeader from '../SectionHeader';
import Link from 'next/link';
const DezynLab = () => {
  return (
    <section className="w-full bg-white dark:bg-black flex items-center sm:pt-20 sm:pb-40 h-auto py-10 justify-center">
      {' '}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex sm:flex-row flex-col-reverse items-center gap-10">
        {/* <div>
          <div className="relative w-full">
            <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-white p-2">
              <SiBlender color="#EA7600" className="size-10 " />
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-white p-2">
              <TbBrandAdobePhotoshop color="#31A8FF" className="size-10 " />
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-white p-2">
              <FaHouseChimney color="black" className="size-10 " />
            </div>
            <div className="h-96 w-96 flex items-center justify-center rounded-lg  p-2">
              <IoCloudy color="white" className="size-96" />
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-white p-2">
              <BsHeadsetVr color="#3480ba" className="size-10 " />
            </div>
          </div>
        </div> */}
        <div className="flex sm:hidden sm:flex-row flex-col gap-4 items-center">
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
        </div>

        <div className="sm:w-1/2 gap-2 grid grid-cols-12 grid-rows-2">
          <Card className="col-span-12 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start!">
              <p className="text-tiny text-black uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-gray-500 font-medium text-large">
                3D Visualization beginner class 1
              </h4>
            </CardHeader>
            <Link
              href={'https://www.youtube.com/@SpaceDezyn/shorts'}
              className="h-full w-full flex items-center justify-center"
            >
              <FaYoutube color="#FF0033" className="size-20" />
            </Link>
            {/* <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-4.jpeg"
            /> */}
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New course</p>
              <h4 className="text-black font-medium text-2xl">Principles of interior design</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available now.</p>
                <p className="text-black text-tiny">Register online.</p>
              </div>
              <Button className="text-tiny bg-[#F19645]" radius="sm" size="sm">
                Visit DezynLab
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your plan, your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better designs
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex grow gap-2 items-center">
                <IoHome color="#F19645" className="size-8" />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Design planning</p>
                  <p className="text-tiny text-white/60">
                    Get interior design tips.
                  </p>
                </div>
              </div>
              <Button radius="sm" size="sm" className="bg-[#F19645]">
                Get started
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-black sm:w-1/2 w-full flex flex-col gap-4">
          <SectionHeader
            introText="Our academy"
            headerText="DEZYNLAB — Where Creative Talent Becomes Career-Ready"
            paragraphText="At DEZYNLAB, we train the next generation of design professionals through hands-on Interior Design education, advanced 3D visualization, structured mentorship, and real-world internship programs."
          />

          <div className="sm:flex hidden sm:flex-row flex-col gap-4 items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DezynLab;
