import { type SanityDocument } from 'next-sanity';

import { client } from '@/sanity/client';
import NewsLetter from '@/components/Web/NewsLetter';
import Blogs from '@/components/Web/Blog/Blogs';
import Blog from '@/components/Web/Blog/Blog';
import { blogPostImageUrl } from '@/utils/blog.utils';

const { projectId, dataset } = client.config();

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body, image}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <section className="container mx-auto min-h-screen max-w-7xl sm:p-8 p-4 flex flex-col sm:gap-20 gap-14">
      <div className="flex items-center justify-center w-full mt-10">
        <div className="text-center flex flex-col gap-4 items-center">
          {' '}
          <h1 className="sm:text-5xl text-4xl font-bold">
            Inside Design: Stories and Interviews
          </h1>
          <p className="sm:text-xl text-xs mb-3">
            Subscribe to learn more about space transformation & practical
            design inspiration.
          </p>
          <NewsLetter />
        </div>
      </div>

      {/* Blog posts  */}
      <div>
        <h1 className="text-xl font-bold mb-5">Recent blog posts</h1>
        <div className="flex items-start flex-col sm:gap-7 gap-20 sm:flex-row">
          {/* Recent blog posts  */}

          {posts.map((post) => {
            return (
              <Blog
                key={post._id}
                postImageUrl={blogPostImageUrl(post, projectId, dataset)}
                post={post}
                preview={true}
              />
            );
          })}

          {/* All blog posts  */}
          <div className="sm:w-[800px] w-full">
            {posts.map((post) => {
              return (
                <Blogs
                  key={post._id}
                  postImageUrl={blogPostImageUrl(post, projectId, dataset)}
                  post={post}
                  preview={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
