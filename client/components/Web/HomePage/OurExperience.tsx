import React from 'react';
import SectionHeader from '../SectionHeader';
import { BrandIcons, iconTypes } from '@/assets/icons';

interface CardData {
  icon: iconTypes;
  header: string;
  paragraph: string;
}

const CARD_DATA: CardData[] = [
  {
    icon: 'star',
    header: 'EXCLUSIVITY',
    paragraph:
      "At Space Dezyn, the client isn't just a spectator; they're the conductor of their own symphony of style and functionality.",
  },
  {
    icon: 'shapes',
    header: '3D Visuals',
    paragraph:
      'Every detail, from furniture placement to color palette, is meticulously crafted in lifelike 3D, granting clients unprecedented insight and agency throughout the design process.',
  },
  {
    icon: 'shield',
    header: 'Security',
    paragraph:
      'At Space Deszyn, Our advanced security solutions are designed to protect your interests and provide you with peace of mind.',
  },
];

const OurExperience = () => {
  return (
    <section className="flex items-center bg-white dark:bg-black text-black sm:py-40 py-14 justify-center">
      <div className=" max-w-7xl px-4 sm:px-6 items-center flex justify-center flex-col lg:px-8 mx-auto">
        <div className="max-w-5xl text-center  mb-10 flex justify-center">
          <SectionHeader
            introText="Our Experience"
            headerText="WHAT ARE WE ABOUT?"
            paragraphText="At Space Dezyn, we believe design goes beyond aesthetics, We create spaces that feel alive, functional, and uniquely yours. Our expertise spans residential, commercial, hospitality, and retail design, as well as renovations and consultations. From luxury apartments and private homes to corporate offices, hotels, restaurants, salons, and design studios, we transform every space into a statement of style, comfort, and innovation. (Essentially, we are your plug)."
          />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 text-left gap-2">
          {CARD_DATA.map((data, key) => {
            return (
              <div
                key={key}
                className="bg-[#FFF2FC] border-1 border-[#F19645] hover:shadow-lg hover:scale-110 hover:cursor-pointer transition-all ease-in-out delay-150 rounded-lg shadow p-4 flex flex-col gap-4"
              >
                <BrandIcons value={data.icon} />
                <h4 className="font-semibold">{data.header}</h4>
                <p>{data.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurExperience;
