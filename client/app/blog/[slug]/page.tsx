import Link from 'next/link';
import Blog from '@/components/Web/Blog/Blog';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { posts } from '@/data/data';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-4 flex flex-col gap-4">
      <Link
        href={`/blog/#${posts[0]._id}`}
        className="hover:underline flex items-center"
      >
        <div>
          <ArrowLeftIcon className="size-4" />{' '}
        </div>
        <span className="text-sm font-semibold">Back to posts</span>
      </Link>
      <Blog
        key={posts[0]._id}
        postImageUrl={'/blog.jfif'}
        post={{
          _id: posts[0]._id,
          title: posts[0].title,
          slug: posts[0]._id,
          body: posts[0].body,
        }}
        preview={true}
      />
    </main>
  );
}
