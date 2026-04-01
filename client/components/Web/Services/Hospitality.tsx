'use client';
import React from 'react';
import SectionHeader from '../SectionHeader';
import { Card, CardBody, CardFooter } from '@heroui/react';
import Image from 'next/image';

const Hospitality = () => {
  const APARTMENTS = [
    {
      title: 'Haven Apartment',
      price: '₦150,000/day',
      img: 'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469167/IMG_5094_qfvv2f.heic',
    },
    {
      title: 'Space X',
      price: '₦215,000/day',
      img: 'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469214/IMG_5172_fzftvg.heic',
    },
    {
      title: 'A series',
      price: '₦120,000/day',
      img: 'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469189/IMG_5165_getmbt.heic',
    },
    {
      title: 'A series',
      price: '₦120,000/day',
      img: 'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469189/IMG_5165_getmbt.heic',
    },
    {
      title: 'Rage 4',
      price: '₦95,000/day',
      img: 'https://res.cloudinary.com/dnwqqmdee/image/upload/f_auto,q_auto/v1758469187/IMG_5126_rtursl.heic',
    },
  ];
  return (
    <section className="w-full bg-white dark:bg-black sm:py-20 py-10">
      <div className="max-w-7xl px-4 sm:px-6 items-center flex justify-start flex-col lg:px-8 mx-auto">
        <div className="text-black mb-10 sm:block hidden">
          <SectionHeader
            introText="Other services"
            headerText="Smart Airbnb & Service apartments"
            paragraphText="Our Smart Airbnb and Apartment services are designed to elevate the living experience for both hosts and guests. We integrate cutting-edge technology to create a seamless, comfortable, and secure environment. From smart locks and automated lighting to energy-efficient climate control, our solutions enhance convenience and safety while maximizing the appeal of your property."
          />
        </div>
        <div className="text-black mb-10 sm:hidden block">
          <SectionHeader
            introText="Other services"
            headerText="Smart Airbnb & Apartment services"
            paragraphText="We integrate cutting-edge technology to create a seamless, comfortable, and secure environment."
          />
        </div>

        <div className="gap-2 grid grid-cols-2 sm:grid-cols-5 w-full">
          {APARTMENTS.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
              onPress={() => console.log('item pressed')}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover sm:h-[200px]  rounded-lg shadow-md"
                  src={item.img}
                  width={400}
                  height={300}
                />
              </CardBody>
              <CardFooter className="text-small sm:gap-10 flex sm:flex-row flex-col justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hospitality;
