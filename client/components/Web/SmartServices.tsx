'use client';
import React from 'react';
import SectionHeader from './SectionHeader';
import Link from 'next/link';
import { Button, Card, CardBody, CardFooter } from '@heroui/react';
import Image from 'next/image';

type SmartServicesTypes = {
  headerText: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  hrefText: string;
  bgColor?: string;
  hrefBg?: string;
  imageUrl: string;
  service: string;
};

const SmartServices = () => {
  const SMART_SERVICES: SmartServicesTypes[] = [
    {
      headerText: 'smart living',
      subtitle:
        '  Automate your home environment with our smart lighting solutions. Create ambiance, save energy, and enhance your living experience with intuitive controls.',
      href: '/',
      icon: '',
      hrefText: 'discover more',
      hrefBg: 'bg-[#1FD3FF]',
      imageUrl:
        'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773059770/ChatGPT_Image_Mar_9_2026_01_18_06_PM_x9pmpn.png',
      bgColor: 'bg-white',
      service: 'Smart  switches',
    },
    {
      headerText: 'space living',
      subtitle:
        'Get smart and luxury furnitures that blend technology with elegance. Our smart furniture collection offers innovative designs that enhance comfort and functionality in your living spaces.',
      href: '/',
      icon: '',
      hrefText: 'Add to cart',
      hrefBg: 'bg-[#640D14]',
      imageUrl:
        'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773059845/5168Ba_L3_L._SS1000__mgxnmt.jpg',
      bgColor: 'bg-[#A9BA9D]',
      service: 'Shizen living',
    },
    {
      headerText: 'space energy',
      subtitle:
        'Optimize your energy consumption with our smart energy management solutions. Monitor and control your energy usage to reduce costs and minimize your environmental footprint.',
      href: '/',
      icon: '',
      hrefText: 'discover more',
      hrefBg: 'bg-green-600',
      imageUrl:
        'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773060050/1714296316575_vzc2oz.png',
      bgColor: 'bg-green-200',
      service: 'Smart grid',
    },
    {
      headerText: 'space clean',
      subtitle:
        'Keep your space fresh and healthy with our smart air quality solutions. Monitor and control your indoor environment to ensure optimal air quality and comfort.',
      href: '/',
      icon: '',
      hrefText: 'discover more',
      hrefBg: 'bg-blue-600',
      imageUrl:
        'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773060050/1714296316575_vzc2oz.png',
      bgColor: 'bg-blue-300',
      service: 'Smart cleaning',
    },
    {
      headerText: 'space academy',
      subtitle: ' ',
      href: '/',
      icon: '',
      hrefText: 'Apply now',
      hrefBg: 'bg-white text-black',
      imageUrl:
        'https://res.cloudinary.com/dcd8gvgup/image/upload/v1773060050/1714296316575_vzc2oz.png',
      bgColor: 'bg-[#640D14]',
      service: 'DezynLab',
    },
  ];
  return (
    <section className="bg-white dark:bg-black sm:py-20 py-10">
      <div className="max-w-7xl px-4 sm:px-6 items-center flex justify-center flex-col lg:px-8 mx-auto">
        <div className="text-black mb-10">
          <SectionHeader
            introText="We Bring You to The Future"
            headerText="smart is good living"
            paragraphText="Our smart home design service focuses on blending sophisticated technology with elegant design. From automated lighting and climate control to advanced security systems, we ensure that your home is equipped with the latest innovations, enhancing both convenience and luxury."
          />
        </div>
        <div className="flex items-start flex-col gap-10">
          <div>
            <Link
              href="/"
              className=" bg-[#F19645]  w-[14rem] text-black rounded-md px-2 py-3 text-sm flex gap-2 justify-center font-semibold items-center"
              // aria-label=""
            >
              <span>Discover more</span>
            </Link>
          </div>
          {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
            {SMART_SERVICES.map((service, key) => {
              return (
                <Card
                  key={key}
                  isFooterBlurred
                  className={`border-none w-full sm:w-[29.5rem] h-[238px] relative overflow-hidden rounded-lg ${service.bgColor} shadow-small`}
                  radius="lg"
                >
                  <CardBody className="z-10">
                    <div>
                      <p className="text-tiny text-gray-500 uppercase font-bold">
                        {service.headerText}
                      </p>
                      <h4 className="text-black uppercase font-bold text-lg mb-3">
                        {service.service}
                      </h4>
                      <p className="text-gray-900 text-sm sm:flex hidden">
                        {service.subtitle}
                      </p>
                    </div>
                  </CardBody>
                  <CardFooter
                    className={`justify-between  overflow-hidden py-1  before:rounded-xl ${service.bgColor} rounded-lg bottom-1 w-auto pb-3 ml-1 z-10`}
                  >
                    <Link
                      href={service.href}
                      className={`text-tiny ${service.hrefBg} px-2 py-1 rounded text-white font-semibold flex justify-center items-center capitalize`}
                      aria-label={service.service}
                    >
                      {service.hrefText}
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SmartServices;
