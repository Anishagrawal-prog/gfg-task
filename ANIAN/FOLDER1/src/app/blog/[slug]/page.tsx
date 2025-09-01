import { getPostData, getPostSlugs, PostData } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));  // ✅ must return {slug: "my-first-post"}
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const postData: PostData = getPostData(params.slug);

  const processedContent = await remark().use(html).process(postData.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
      <p className="text-gray-500 text-sm mt-1">{postData.date}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
