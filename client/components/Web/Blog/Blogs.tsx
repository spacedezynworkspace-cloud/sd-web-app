'use client';
import React from 'react';
import { formatDateAndTime } from '@/utils/dateFormat.utils';
import Image from 'next/image';
import Link from 'next/link';

interface BlogsProps {
  postImageUrl: string | null | undefined;
  post: {
    _id: string;
    title: string;
    slug: string;
    body: string;
  };
  preview?: boolean;
}
const Blogs = ({ postImageUrl, post, preview }: BlogsProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex sm:flex-row flex-col justify-between gap-4 w-full">
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
              <h1 className="text-sm text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
                {post.title}
              </h1>
            </Link>
          ) : (
            <h1 className="text-xl text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
              {post.title}
            </h1>
          )}
          <p className="text-[#F19645] text-xs font-semibold">
            {/* {formatDateAndTime(post.publishedAt)}  */}
            July 12, 2026 at 1:07 AM
          </p>
          <div className="blog-content">
            <p className="text-xs">
              Every exceptional space begins with a vision. At{' '}
              <strong>Space Dezyn</strong>, we believe that great design is more
              than aesthetics—it is about creating environments that improve how
              people live, work, and interact every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
