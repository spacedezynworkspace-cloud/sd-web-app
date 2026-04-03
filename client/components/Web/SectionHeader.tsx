import React from 'react';

interface SectionHeaderProps {
  headerText?: string;
  paragraphText?: string;
  introText?: string;
}
const SectionHeader = ({
  headerText,
  paragraphText,
  introText,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {' '}
      <p className="text-[#F19645] font-semibold uppercase">{introText}</p>
      <h1 className="text-4xl w-full text-wrap dark:text-white md:text-6xl font-montserrat uppercase font-extrabold tracking-wide">
        {headerText}.
      </h1>
      <h2 className=" text-gray-950 text-sm dark:text-gray-200 sm:block">
        {/* Transforming Homes & Commercial Spaces */}
        {paragraphText}
      </h2>
    </div>
  );
};

export default SectionHeader;
