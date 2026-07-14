'use client';
import { Image } from '@heroui/react';
import Link from 'next/link';

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Desktop  */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* row one  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473366/Favour_Akubo_1_ajpsrt.jpg'
              }
              width="100%"
            />
          </div>
          <div className="sm:w-[240px] relative p-8 sm:h-[240px]  bg-amber-400 rounded-sm">
            <h3 className="text-xl">Akubo Favour</h3>
            <p className="text-sm font-bold">creative Director</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1760597255/PHOTO-2025-10-15-09-17-46_tpnlet.jpg'
              }
              width="100%"
            />
          </div>
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-600 rounded-sm">
            <h3 className="text-xl">Chidinma Obiezekpazu</h3>
            <p className="text-sm font-bold">Lead supervisor</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* row two  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-200 text-gray-700 rounded-sm">
            <h3 className="text-xl">Sarah Ekpo</h3>
            <p className="text-sm font-bold">Digital Marketer</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="text-center">
              <h1 className="uppercase font-extrabold text-4xl">Our Team</h1>
              <p className="sm:w-[300px]">
                Every home and space is unique in a way only the dreamer
                understands.
              </p>
            </div>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758479152/Screenshot_2025-09-21_192454_xhug0f.png'
              }
              width="100%"
            />
          </div>
        </div>

        {/* row three  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473367/sarah_iuog84.jpg'
              }
              width="100%"
            />
          </div>
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-400 rounded-sm">
            <h3 className="text-xl">Akubo Devine</h3>
            <p className="text-sm font-bold">Brand Expert</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473364/divine_ovwkqm.jpg'
              }
              width="100%"
            />
          </div>
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-600 rounded-sm">
            <h3 className="text-xl">Maryam Umar</h3>
            <p className="text-sm font-bold">Admin Officer</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* row four  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-400 rounded-sm">
            <h3 className="text-xl">Wisdom White</h3>
            <p className="text-sm font-bold">Senior Visual Artist</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473368/Wisdom_White_1_qm6v9q.jpg'
              }
              width="100%"
            />
          </div>

          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-600 rounded-sm">
            <h3 className="text-xl">Adenike Ogbesoyen</h3>
            <p className="text-sm font-bold">Site Supervisor</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758478178/IMG_7807_1_sgh5ag.png'
              }
              width="100%"
            />
          </div>
        </div>

        {/* row five  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473195/IMG_6408_nqqyt4.jpg'
              }
              width="100%"
            />
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="text-center">
              <h1 className="uppercase font-extrabold text-4xl">OUR MISSION</h1>
              <p className="sm:w-[350px]">
                Our mission at Space Dezyn is simple: to design places that
                restore joy, encourage rest, and become the sanctuary people
                long for. - TEAM&apos;S NOTE
              </p>
            </div>
          </div>

          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-600 rounded-sm">
            <h3 className="text-xl">Ekong Evie Emmanuel</h3>
            <p className="text-sm font-bold">Software Engineer</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* row six  */}
        <div className="sm:grid sm:grid-cols-4 hidden">
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-400 rounded-sm">
            <h3 className="text-xl">Debola Adetokumbo</h3>
            <p className="text-sm font-bold">Architech</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>

          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dcd8gvgup/image/upload/v1784000464/lisha_jdbvek.jpg'
              }
              width="100%"
            />
          </div>
          <div className="sm:w-[240px] p-8 sm:h-[240px] relative bg-amber-400 rounded-sm">
            <h3 className="text-xl">Eborty Belisha</h3>
            <p className="text-sm font-bold">Sales & Marketing</p>
            <Link
              href={''}
              className="bg-white rounded-sm text-black font-semibold absolute bottom-8 shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
          <div>
            <Image
              alt={''}
              className="sm:w-[240px] w-full object-cover sm:h-[240px] h-[150px]"
              radius="md"
              shadow="sm"
              src={
                'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473365/ekong_xsrt48.jpg'
              }
              width="100%"
            />
          </div>
        </div>
      </div>

      {/* Mobile  */}
      <div className="w-full mt-10 sm:hidden grid grid-cols-2 gap-x-4 gap-y-6">
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473366/Favour_Akubo_1_ajpsrt.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Akubo Favour</h3>
              <p className="text-sm font-bold">creative Director</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1760597255/PHOTO-2025-10-15-09-17-46_tpnlet.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Chidinma Obi</h3>
              <p className="text-sm font-bold">Lead supervisor</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758479152/Screenshot_2025-09-21_192454_xhug0f.png'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Maryam Umar</h3>
              <p className="text-sm font-bold">Admin Officer</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473367/sarah_iuog84.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Sarah Ekpo</h3>
              <p className="text-sm font-bold">Digital Marketer</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dcd8gvgup/image/upload/v1784000464/lisha_jdbvek.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Eborty Belisha</h3>
              <p className="text-sm font-bold">Sales & Marketing</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473364/divine_ovwkqm.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Akubo Devine</h3>
              <p className="text-sm font-bold">Brand Expert</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473368/Wisdom_White_1_qm6v9q.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Wisdom White</h3>
              <p className="text-sm font-bold">Senior Visual Artist</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758478178/IMG_7807_1_sgh5ag.png'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Adenike Ogbesoyen</h3>
              <p className="text-sm font-bold">Site Supervisor</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473195/IMG_6408_nqqyt4.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Debola Adetokumbo</h3>
              <p className="text-sm font-bold">Architech</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image
            alt={''}
            className=" w-full object-cover h-[180px]"
            radius="md"
            shadow="sm"
            src={
              'https://res.cloudinary.com/dnwqqmdee/image/upload/v1758473365/ekong_xsrt48.jpg'
            }
            width="100%"
          />
          <div className="flex flex-col mt-3 w-full gap-1">
            <div>
              <h3 className="text-lg">Ekong Evie Emmanuel</h3>
              <p className="text-sm font-bold">Software Engineer</p>
            </div>
            <Link
              href={''}
              className="bg-[#F19645] text-sm rounded-sm w-max text-black font-semibold shadow px-4 py-1"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
