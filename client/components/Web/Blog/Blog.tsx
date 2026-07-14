'use client';
import React from 'react';
import { PortableText, type SanityDocument } from 'next-sanity';
import { formatDateAndTime } from '@/utils/dateFormat.utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

interface BlogProps {
  postImageUrl: string | null | undefined;
  post: SanityDocument;
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
              href={`/blog/${post.slug.current}`}
              className="hover:underline"
              id={post.slug.current}
            >
              <h1 className="text-md flex justify-between items-center text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
                <span>{post.title}.</span>
                <ArrowUpRightIcon className="size-5" />
              </h1>
            </Link>
          ) : (
            <h1 className="text-xl text-wrap dark:text-white font-montserrat uppercase font-extrabold tracking-wide">
              {post.title}.
            </h1>
          )}
          <p className="text-[#F19645] text-xs font-semibold">
            {formatDateAndTime(post.publishedAt)}
          </p>
        </div>
      </div>
      <h2 className=" text-gray-950 text-sm dark:text-gray-200 sm:block">
        {/* Transforming Homes & Commercial Spaces */}
        {Array.isArray(post.body) && (
          <PortableText value={preview ? post.body.slice(0, 4) : post.body} />
        )}
      </h2>
    </div>
  );
};

export default Blog;
