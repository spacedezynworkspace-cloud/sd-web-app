import { Link } from '@heroui/link';
import TypewriterComponent from '@/components/Web/TypewriterComponent';

export default function Home() {
  return (
    <section className="relative left-0 w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 left-0">
        <Image
          src="/sd-web-hero-img.png"
          alt="Luxury Interior Design in Abuja"
          fill
          priority
          className="object-cover"
        /> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Brand Orange Gradient Blend */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-transparent to-black/40" />
      </div> */}
      {/* Content */}
      <div className="relative z-20 h-screen flex items-center w-full text-center max-w-4xl sm:px-6 px-3">
        <div className="sm:pt-20 pt-44">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Smart Home Interior Design
          </h1>

          <h2 className="mt-4 text-xl sm:flex hidden md:text-2xl text-gray-200">
            Transforming Homes & Commercial Spaces
          </h2>

          <div className="mt-6 sm:ml-36 flex sm:flex-row flex-col items-center gap-5 text-2xl md:text-3xl font-semibold">
            <p> We specialize in</p> <TypewriterComponent />
          </div>

          <div className="mt-10 flex sm:flex-row flex-col items-center justify-center gap-6">
            <Link
              className={
                'bg-orange-400 rounded-lg text-black w-1/2 sm:w-auto sm:px-8 border-1 border-orange-400 px-2 py-2 flex justify-center  font-semibold'
              }
              href={'#'}
            >
              Book Consultation
            </Link>

            <Link
              className={
                'border-white flex justify-center border-1 bg-transparent rounded-lg text-white w-1/2 sm:w-auto sm:px-8 px-4 py-2 text-center font-semibold'
              }
              href={'#'}
            >
              Start project
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl pt-10 px-4 flex-grow">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dcd8gvgup/video/upload/v1771591956/vecteezy_interior-of-modern-cozy-bedroom-with-large-bed-and-ambient_59018780_jchrtp.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute w-full h-full left-0 top-0 bottom-0 bg-black/50 z-10"></div>
      </div>
    </section>
  );
}
