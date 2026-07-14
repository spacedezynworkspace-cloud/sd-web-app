import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/client';
import Link from 'next/link';
import Blog from '@/components/Web/Blog/Blog';
import { blogPostImageUrl } from '@/utils/blog.utils';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-4 flex flex-col gap-4">
      <Link
        href={`/blog/#${post.slug.current}`}
        className="hover:underline flex items-center"
      >
        <div>
          <ArrowLeftIcon className="size-4" />{' '}
        </div>
        <span className="text-sm font-semibold">Back to posts</span>
      </Link>
      <Blog
        postImageUrl={blogPostImageUrl(post, projectId, dataset)}
        post={post}
        preview={false}
      />
    </main>
  );
}
