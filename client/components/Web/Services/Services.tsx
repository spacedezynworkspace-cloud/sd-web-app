'use client';
import React from 'react';
import SectionHeader from '../SectionHeader';
import Image from 'next/image';
import { services } from '@/data/data';
import { Alert, Card, CardFooter } from '@heroui/react';

const Services = () => {
  return (
    <div className="w-full">
      <div className="text-black w-full sm:px-0 flex sm:flex-row flex-col-reverse gap-20 items-center">
        <div className="sm:w-[1700px]">
          <SectionHeader
            introText="Services"
            headerText="Interior Design Services That Transform Spaces Across Nigeria"
            paragraphText="Our core services: Interior Dezyn, Home Development, Space Planning & Consultation, Custom Furniture Dezyn, Renovation & Remodeling, and 3D Virtual Space Visualization."
          />
        </div>
        <Image
          src={'/services/hero.jpg'}
          alt="A lady with Space dezyn sketch pad and drawing sheets"
          width={500}
          height={300}
          className="rounded-xl"
        />
        {/* <div className="bg-amber-100 relative flex justify-center items-center sm:h-[500px] sm:w-[1400px] w-[350px] h-[350px] rounded-full">
          <div className="bg-amber-500 absolute sm:h-[350px] sm:w-[350px] w-[280px] h-[280px] rounded-full"></div>
          <Alert
            color={'success'}
            title={`Interior Dezyn`}
            className="absolute z-10 left-0 top-2"
          />
          <Alert
            color={'default'}
            title={`Interior Dezyn`}
            className="absolute z-10 left-0"
          />
          <Alert color={'danger'} title={`Interior Dezyn`} />
          <Alert color={'warning'} title={`Interior Dezyn`} />
        </div> */}
      </div>

      <h2 className="mt-30 mb-10">
        EXPLORE OUR WIDE RANGE OF INTERIOR DESIGN SERVICES
      </h2>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {services.map((service, key) => {
          return (
            <div key={key}>
              <Card isFooterBlurred className="border-none" radius="lg">
                <Image
                  alt={service.title}
                  className="object-cover"
                  height={400}
                  src={service.imageUrl}
                  width={500}
                />
                <CardFooter className="justify-between dark:bg-black/40 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col items-start">
                  <h2 className="font-bold">{service.title}</h2>
                  <p className="text-sm">{service.body}</p>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
