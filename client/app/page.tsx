import { Link } from '@heroui/link';
import { Snippet } from '@heroui/snippet';
import { Code } from '@heroui/code';
import { button as buttonStyles } from '@heroui/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import clsx from 'clsx';
import TypewriterComponent from '@/components/Web/TypewriterComponent';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative left-0 w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 left-0">
        <Image
          src="/sd-web-hero-img.png"
          alt="Luxury Interior Design in Abuja"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Brand Orange Gradient Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-transparent to-black/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <Image
          src="/sd-web-hero-img.png"
          alt="Space Dezyn Logo"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-6xl font-light tracking-wide">
          Luxury Interior Design in Abuja
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-gray-200">
          Transforming Homes & Commercial Spaces
        </h2>

        <div className="mt-6 text-2xl md:text-3xl font-semibold">
          <TypewriterComponent />
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            className={clsx(
              buttonStyles({
                radius: 'full',
                variant: 'shadow',
              }),
              'bg-orange-500 text-black px-8 py-6 text-lg font-semibold'
            )}
            href={siteConfig.links.docs}
          >
            View Our Projects
          </Link>

          <Link
            className={buttonStyles({
              variant: 'bordered',
              radius: 'full',
            })}
            href={siteConfig.links.github}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl pt-10 px-4 flex-grow"></div>
    </section>
  );
}
