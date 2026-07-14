import NewsLetter from '@/components/Web/NewsLetter';
import Blogs from '@/components/Web/Blog/Blogs';
import Blog from '@/components/Web/Blog/Blog';
import { posts } from '@/data/data';

export default async function BlogPage() {
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

          <Blog
            key={posts[0]._id}
            postImageUrl={posts[0].postImageUrl}
            post={{
              _id: posts[0]._id,
              title: posts[0].title,
              slug: posts[0]._id,
              body: posts[0].body,
            }}
            preview={true}
          />

          {/* All blog posts  */}
          <div className="sm:w-[800px] w-full flex flex-col gap-10">
            {posts.map((post) => {
              return (
                <Blogs
                  key={post._id}
                  postImageUrl={post.postImageUrl}
                  post={{
                    _id: post._id,
                    title: post.title,
                    slug: post._id,
                    body: post.body,
                  }}
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
