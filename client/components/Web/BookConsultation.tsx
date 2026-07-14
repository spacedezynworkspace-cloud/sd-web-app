'use client';
import { InlineWidget } from 'react-calendly';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const BookConsultation = () => {
  return (
    <section className="min-h-[800px] sm:mt-20 mt-10 lg:mt-0">
      <div className="mb-20">
        <div className=" text-black w-full flex sm:flex-row flex-col-reverse sm:gap-40 gap-4 items-start">
          <SectionHeader
            introText="Need a one to one meeting?"
            headerText="Schedule a meeting, time & place that works for you"
            paragraphText="We offer consultational services to help clients understand what they really need for the best project outcome."
          />
          <Image
            src={'/consultation.png'}
            alt="A man and a woman in a consultating session"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="w-full dark:bg-black rounded-2xl">
        <InlineWidget
          url="https://calendly.com/spacedezynng?primary_color=F19645"
          styles={{ height: '600px', background: 'transparent' }}
        />
      </div>
    </section>
  );
};

export default BookConsultation;
