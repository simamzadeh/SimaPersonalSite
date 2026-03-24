import Link from "next/link";
import { getDatabasePages } from "../../lib/notion";

export default async function Page() {
  const rawPages = await getDatabasePages(process.env.NOTION_BLOG_DB_ID!);

  // Filter published pages and ensure properties exist
  const pages = rawPages
    .filter((p: any) => p.properties)
    .filter((p: any) => p.properties.Published?.checkbox === true);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>

      {/* Collage-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any) => {
          
          const title =
            page.properties?.Title?.title?.[0]?.text?.content || "Untitled";

          const postDate = page.properties?.Date;
          const date = postDate?.date?.start
            ? new Date(postDate.date.start).toLocaleDateString()
            : "No date";

          return (
            <Link key={page.id} href={`/posts/${page.id}`}>
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition cursor-pointer flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{date}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
