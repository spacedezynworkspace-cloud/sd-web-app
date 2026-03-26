import React from 'react';
import SectionHeader from '../SectionHeader';
import Link from 'next/link';
import { FaYoutube } from 'react-icons/fa';

const YoutubeCTA = () => {
  return (
    <section className="bg-white dark:bg-black sm:py-20 py-10">
      <div className="max-w-7xl px-4 sm:px-6 items-center flex justify-center flex-col lg:px-8 mx-auto">
        <div className="text-black mb-10">
          <SectionHeader
            introText="We Bring You to The Future"
            headerText="smart is the future"
            paragraphText="Our smart home design service focuses on blending sophisticated technology with elegant design. From automated lighting and climate control to advanced security systems, we ensure that your home is equipped with the latest innovations, enhancing both convenience and luxury."
          />
        </div>
        <div className="flex items-start flex-col gap-10 w-full">
          <div className="bg-white rounded-3xl w-full sm:h-[500px] h-[250px] shadow-2xl">
            <Link
              href={'https://www.youtube.com/@SpaceDezyn/shorts'}
              className="h-full w-full flex items-center justify-center"
            >
              <FaYoutube color="#FF0033" className="size-20" />
            </Link>
          </div>
          <div className="w-full sm:justify-start justify-center">
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

export default YoutubeCTA;
