'use client';
import SectionHeader from '@/components/Web/SectionHeader';
import Hospitality from '@/components/Web/Services/Hospitality';
import { apartments } from '@/data/data';
import { Card, CardBody, CardFooter } from '@heroui/react';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <section className="container mx-auto min-h-screen max-w-7xl sm:p-8 flex flex-col sm:gap-10">
      {/* <div className="text-center flex flex-col gap-4 items-center">
        {' '}
        <h1 className="sm:text-5xl text-4xl font-bold">
          Inside Design: Stories and Interviews
        </h1>
        <p className="sm:text-xl text-xs">
          Subscribe to learn more about space transformation & practical design
          inspiration.
        </p>
      </div> */}
      <Hospitality />

      <div className="text-black sm:px-0 p-4 block">
        <SectionHeader
          introText=""
          headerText="Available apartments"
          paragraphText="Instantly book an apartment online with variety of homes that suit your tour."
        />
      </div>

      <div className="gap-2 grid grid-cols-2 sm:px-0 p-4 sm:grid-cols-6 w-full">
        {apartments.map((item, index) => (
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
            <CardFooter className="text-small flex flex-col justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
