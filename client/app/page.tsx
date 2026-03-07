import TypewriterComponent from '@/components/Web/TypewriterComponent';
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { BiSolidCctv } from 'react-icons/bi';

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        poster="/sd-video-hero-placeholder.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/dcd8gvgup/video/upload/f_auto,q_auto/v1771591956/vecteezy_interior-of-modern-cozy-bedroom-with-large-bed-and-ambient_59018780_jchrtp.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex sm:mt-20 mt-24 min-h-screen items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto flex sm:flex-row flex-col justify-between">
          {' '}
          <div className="sm:w-[55%] w-full">
            <h1 className="text-4xl md:text-6xl font-montserrat uppercase font-extrabold tracking-wide">
              The Future of Smart Interior Design in Nigeria
            </h1>

            <h2 className="mt-4 hidden  text-gray-200 sm:block">
              {/* Transforming Homes & Commercial Spaces */}
              We transform spaces into modern, intelligent environments designed
              for comfort, elegance, and connection.
            </h2>

            <div className="mt-6 sm:mb-10 flex flex-col sm:flex-row items-center font-semibold  mx-auto">
              <div className="sm:w-[39rem] sm:h-auto h-[10rem] flex flex-col sm:flex-row sm:items-center   font-semibold">
                {/* <TypewriterComponent /> */}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="#"
                className="w-1/2 sm:w-auto px-2 py-2 sm:px-8 rounded-lg bg-orange-400 border border-orange-400 text-black font-semibold text-center text-xs sm:text-sm justify-center"
              >
                Start project
              </Link>

              <Link
                href="#"
                className="w-1/2 sm:w-auto px-4 py-2 sm:px-8 rounded-lg border border-white bg-transparent text-white font-semibold text-center text-xs sm:text-sm flex justify-center"
              >
                Visit Store
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center sm:w-[40%] bg-green-300">
            <div className="relative w-full">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <FaSpotify color="#1DB954" className="size-10 " />
              </div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <FaYoutube color="#FF0033" className="size-10 " />
              </div>
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-white p-2">
                <BiSolidCctv className="size-10 " />
              </div>
              <p className="absolute bottom-0 w-full">
                Experience your Space Different
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
