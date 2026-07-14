'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import SectionHeader from './SectionHeader';
import { testimonials } from '@/data/data';
import { Card, CardBody, CardFooter, CardHeader, Divider } from '@heroui/react';
import {
  ChatBubbleLeftEllipsisIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const Testimonials = () => {
  const autoplay = Autoplay();

  const emblaOptions: EmblaOptionsType = {
    align: 'start',
    containScroll: 'trimSnaps',
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [autoplay]);

  return (
    <section className="bg-black py-40 ">
      <div className="max-w-7xl px-4 sm:px-6 items-center flex justify-center sm:flex-row flex-col gap-10 lg:px-8 mx-auto">
        <div className="text-white sm:w-1/2 w-full flex flex-col gap-4 p">
          <SectionHeader
            introText="Testimonials"
            headerText="What Our Clients Say About Us"
          />
          <h2 className=" text-white text-sm dark:text-gray-200 sm:block">
            Transforming Spaces, Elevating Experiences. At Space Deszyn, we
            believe in transforming spaces into reflections of our clients'
            personalities and lifestyles.
          </h2>
        </div>
        {/* Main Carousel */}
        <div className="overflow-hidden sm:w-1/2 w-full" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((testimonial, index) => (
              <Card className="min-w-[80%] sm:min-w-[55%]" key={index}>
                <CardHeader className="flex gap-3">
                  <StarIcon className="size-6 text-orange-300" />
                  <StarIcon className="size-6 text-orange-300" />
                  <StarIcon className="size-6 text-orange-300" />
                  <StarIcon className="size-6 text-orange-300" />
                  <StarIcon className="size-6 text-orange-300" />
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-sm">{testimonial.body}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">
                  <ChatBubbleLeftEllipsisIcon className="size-8" />
                  <div className="flex flex-col">
                    <p className="text-md">{testimonial.username}</p>
                    <p className="text-small text-default-500">
                      {testimonial.title}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
