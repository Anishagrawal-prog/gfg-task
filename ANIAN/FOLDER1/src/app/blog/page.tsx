import Link from "next/link";
import { getPostSlugs, getPostData } from "@/lib/posts";

export default function BlogPage() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostData(slug));

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm">
              {post.date ? post.date.split("T")[0] : ""}
            </p>
            {post.author && (
              <p className="text-gray-400 text-sm">By {post.author}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
