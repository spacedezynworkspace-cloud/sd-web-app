import React from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <section className="w-full bg-white dark:bg-black sm:py-20 py-10">
      <div className="sm:max-w-7xl w-full px-4 sm:px-6 sm:gap-20 items-center flex sm:flex-row flex-col justify-start lg:px-8 mx-auto sm:mb-32 mb-20">
        <div className="text-black flex sm:flex-row flex-col gap-10">
          <SectionHeader
            introText="Contact us"
            headerText="Need to talk to someone?"
            paragraphText="Call, drop a message or come by the office. We are always available."
          />
          <div>
            <Image
              src={'/contact_us.jpg'}
              alt="Image of an interior space with technological components for smart home experience"
              width={800}
              height={700}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* Contact Form  */}
      <ContactForm />
    </section>
  );
};

export default ContactUs;
