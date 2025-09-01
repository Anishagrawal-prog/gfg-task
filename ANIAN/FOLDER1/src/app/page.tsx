import Link from 'next/link';
import { getPostSlugs, getPostData } from '@/lib/posts';

// Define the type for your post data
type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export default async function HomePage() {
  const slugs = getPostSlugs();
  const posts: Post[] = slugs.map((slug) => getPostData(slug));

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Latest Blog Posts
      </h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            <p className="mt-4 text-gray-700">
              {post.content.slice(0, 150)}...
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
