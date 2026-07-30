import Link from "next/link";
import { getDatabasePages } from "../../lib/notion";

export default async function Page() {
  const pages = await getDatabasePages(process.env.NOTION_CREATIONS_DB_ID!);

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Creations</h1>

      {/* Collage-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any) => {
          
          const title =
            page.properties?.Title?.title?.[0]?.text?.content || "Untitled";

          const postDate = page.properties?.Date;
          const date = postDate?.date?.start
            ? new Date(postDate.date.start).toLocaleDateString()
            : "No date";
        
        const description =
            page.properties?.Description?.rich_text?.[0]?.text?.content || "No description";
            
        const image = page.properties?.Image?.files?.[0]?.file?.url || null;


          return (
            <Link key={page.id} href={`/posts/${page.id}`}>
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition cursor-pointer flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{date}</p>
                  <p className="text-sm text-gray-700">{description}</p>
                  <img
                    src={image}
                    alt={title}
                    className="mt-2 rounded-lg"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
