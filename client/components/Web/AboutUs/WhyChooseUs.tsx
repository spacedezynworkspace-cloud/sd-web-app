import {
  BuildingLibraryIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import React, { ReactNode } from 'react';

const WhyChooseUs = () => {
  const WHYCHOOSEUS: { title: string; body: string; icon: ReactNode }[] = [
    {
      title: 'Design + Technology Fusion',
      body: 'A balance of creativity and smart living solutions.',
      icon: <FingerPrintIcon className="size-6" />,
    },
    {
      title: 'Client-Focused Approach',
      body: 'Every project is shaped around your needs.',
      icon: <UsersIcon className="size-6" />,
    },
    {
      title: 'Comprehensive Expertise',
      body: 'Residential, commercial, hospitality, and more.',
      icon: <BuildingLibraryIcon className="size-6" />,
    },
    {
      title: 'Quality You Can Trust',
      body: 'Precision, attention to detail, and lasting value.',
      icon: <ShieldCheckIcon className="size-6" />,
    },
  ];
  return (
    <div className="flex  flex-col gap-10">
      {WHYCHOOSEUS.map((data, key) => {
        return (
          <div key={key}>
            <div className="text-[#F19645] flex items-center gap-1 mb-2">
              {data.icon}
              <h2 className=" font-semibold">{data.title}</h2>
            </div>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseUs;
