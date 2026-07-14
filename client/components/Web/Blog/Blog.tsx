'use client';
import React from 'react';
// import { PortableText, type SanityDocument } from 'next-sanity';
// import { formatDateAndTime } from '@/utils/dateFormat.utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface BlogProps {
  postImageUrl: string | null | undefined;
  post: {
    _id: string;
    title: string;
    slug: string;
    body: string;
  };
  preview?: boolean;
}
const Blog = ({ postImageUrl, post, preview }: BlogProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex  flex-col justify-between gap-4 w-full">
        {postImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element

          <div className="w-full">
            <Image
              alt={post.title}
              className="object-cover w-full rounded-xl"
              src={postImageUrl}
              height={200}
              width={800}
            />
          </div>
        )}

        <div className=" w-full flex flex-col gap-2">
          <p className=" text-xs font-semibold">Published by: Space Dezyn</p>
          {preview ? (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="hover:underline"
              id={post.slug}
            >
              <h1 className="text-md flex justify-between items-center text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
                <span>{post.title}</span>
                <ArrowUpRightIcon className="size-5" />
              </h1>
            </Link>
          ) : (
            <h1 className="text-xl text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
              {post.title}
            </h1>
          )}
          <p className="text-[#F19645] text-xs font-semibold">
            {/* {formatDateAndTime(post.publishedAt)} */}
            July 12, 2026 at 1:07 AM
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="lead">
          Every exceptional space begins with a vision. At{' '}
          <strong>Space Dezyn</strong>, we believe that great design is more
          than aesthetics—it is about creating environments that improve how
          people live, work, and interact every day.
        </p>

        <p>
          Whether you're building your dream home, renovating an office, or
          transforming a commercial property, thoughtful design has the power to
          increase comfort, functionality, and long-term value. Our approach
          combines creativity, technical expertise, and modern technology to
          deliver spaces that truly reflect our clients' lifestyles and business
          goals.
        </p>

        {postImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element

          <div className="w-full">
            <Image
              alt={post.title}
              className="object-cover w-full rounded-xl"
              src={postImageUrl}
              height={200}
              width={800}
            />
          </div>
        )}

        <h2>Why Interior Design Matters</h2>

        <p>
          Interior design goes beyond choosing furniture and paint colours. It
          involves understanding how people interact with their environment and
          creating spaces that enhance productivity, comfort, and wellbeing.
        </p>

        <ul>
          <li>✔ Improve functionality and space planning.</li>
          <li>✔ Increase property value.</li>
          <li>✔ Enhance comfort and everyday living.</li>
          <li>✔ Reflect your personality or brand identity.</li>
          <li>✔ Integrate smart technology seamlessly.</li>
        </ul>

        <blockquote>
          "Good design isn't about making spaces look expensive. It's about
          making them work beautifully for the people who use them."
        </blockquote>

        <h2>Our Design Philosophy</h2>

        <p>
          At Space Dezyn, every project begins with listening. We take time to
          understand your vision, lifestyle, functional needs, and future goals
          before developing a concept that brings everything together.
        </p>

        <p>
          Our team combines modern design principles with practical solutions to
          create interiors that are elegant, timeless, and easy to maintain.
        </p>

        {postImageUrl && (
          // eslint-disable-next-line @next/next/no-img-element

          <div className="w-full">
            <Image
              alt={post.title}
              className="object-cover w-full rounded-xl"
              src={postImageUrl}
              height={200}
              width={800}
            />
          </div>
        )}

        <h2>Our Process</h2>

        <ol>
          <li>
            <strong>Consultation</strong> — Understanding your vision and
            requirements.
          </li>
          <li>
            <strong>Concept Development</strong> — Creating mood boards and
            design directions.
          </li>
          <li>
            <strong>3D Visualization</strong> — Bringing ideas to life before
            implementation.
          </li>
          <li>
            <strong>Execution</strong> — Coordinating every detail during
            construction and installation.
          </li>
          <li>
            <strong>Final Styling</strong> — Adding the finishing touches that
            complete the experience.
          </li>
        </ol>

        <h2>Smart Living Starts Here</h2>

        <p>
          Modern living demands more than beautiful interiors. Smart home
          technology allows homeowners to control lighting, security, climate,
          entertainment, and energy consumption from anywhere.
        </p>

        <p>
          We seamlessly integrate intelligent systems into our projects without
          compromising aesthetics, ensuring technology becomes a natural
          extension of the design.
        </p>

        <div className="tip-box">
          <h3>Design Tip</h3>
          <p>
            Before purchasing furniture, always create a space plan. Proper
            planning prevents overcrowding and ensures every piece serves both a
            functional and aesthetic purpose.
          </p>
        </div>

        <h2>Looking Ahead</h2>

        <p>
          As design trends continue to evolve, our commitment remains the same:
          creating beautiful, functional, and innovative spaces that stand the
          test of time.
        </p>

        <p>
          Through this blog, we'll be sharing practical design tips, project
          showcases, renovation advice, smart home innovations, and
          behind-the-scenes insights from our team. Whether you're a homeowner,
          developer, or business owner, we hope you'll find inspiration for your
          next project.
        </p>

        <hr />

        <div className="cta-section">
          <h3>Ready to Transform Your Space?</h3>

          <p>
            Whether you're planning a residential renovation, commercial
            interior, architectural project, or smart home installation, Space
            Dezyn is here to bring your vision to life.
          </p>

          <a href="/contact">Start Your Project →</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
