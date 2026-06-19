import Link from 'next/link';
import React from 'react';
import { IoLogoInstagram, IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  const SOCIAL_ICONS = [
    {
      icon: <IoLogoInstagram className="size-4" />,
      link: '',
    },
    {
      icon: <IoLogoTiktok className="size-4" />,
      link: '',
    },
    {
      icon: <IoLogoYoutube className="size-4" />,
      link: '',
    },
  ];
  return (
    <footer className="pt-4">
      <div className="w-full flex items-center gap-5 justify-center py-3">
        {SOCIAL_ICONS.map((icon, key) => {
          return (
            <Link href={icon.link} key={key}>
              {icon.icon}
            </Link>
          );
        })}
      </div>
      <div className="w-full flex items-center gap-5 justify-center py-3">
        <div className=" text-xs text-black">
          Read{' '}
          <Link className="text-[#f19645]" href={'/terms-and-conditions'}>
            Terms & Condition
          </Link>{' '}
          and{' '}
          <Link className="text-[#f19645]" href={'/privacy-policy'}>
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-3">
        <Link
          className="flex text-sm  items-center gap-1 text-current"
          href="https://www.advantageng.com"
          title="Advantage homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-orange-400">Advantage</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
