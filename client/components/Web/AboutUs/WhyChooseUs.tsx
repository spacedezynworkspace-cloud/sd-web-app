import React from 'react';

const WhyChooseUs = () => {
  const WHYCHOOSEUS: { title: string; body: string }[] = [
    {
      title: 'Design + Technology Fusion',
      body: 'A balance of creativity and smart living solutions.',
    },
    {
      title: 'Client-Focused Approach',
      body: 'Every project is shaped around your needs.',
    },
    {
      title: 'Comprehensive Expertise',
      body: 'Residential, commercial, hospitality, and more.',
    },
    {
      title: 'Quality You Can Trust',
      body: 'Precision, attention to detail, and lasting value.',
    },
  ];
  return (
    <div className="flex  flex-col gap-10">
      {WHYCHOOSEUS.map((data, key) => {
        return (
          <div key={key}>
            <h2 className="text-[#F19645] font-semibold">{data.title}</h2>
            <p>{data.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseUs;
