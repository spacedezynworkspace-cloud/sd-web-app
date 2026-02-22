import TypewriterComponent from '@/components/Web/TypewriterComponent';
import Link from 'next/link';

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
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Smart Home Interior Design
          </h1>

          <h2 className="mt-4 hidden text-xl md:text-2xl text-gray-200 sm:block">
            {/* Transforming Homes & Commercial Spaces */}
            We transform spaces into modern, intelligent environments designed
            for comfort, elegance, and connection.
          </h2>

          <div className="mt-6 sm:mb-10 flex flex-col sm:flex-row items-center justify-center text-2xl md:text-3xl font-semibold  mx-auto">
            <div className="sm:w-[39rem] sm:h-auto h-[10rem] flex flex-col sm:flex-row items-center sm:justify-between text-2xl md:text-3xl font-semibold">
              <p>We specialize in</p>
              <TypewriterComponent />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#"
              className="w-1/2 sm:w-auto px-2 py-2 sm:px-8 rounded-lg bg-orange-400 border border-orange-400 text-black font-semibold justify-center"
            >
              Start project
            </Link>

            <Link
              href="#"
              className="w-1/2 sm:w-auto px-4 py-2 sm:px-8 rounded-lg border border-white bg-transparent text-white font-semibold text-center flex justify-center"
            >
              Visit Store
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
