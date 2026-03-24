// /app/page.tsx
import { getDatabasePages } from "../lib/notion";

export default async function Page() {
  const rawPages = await getDatabasePages();

  const pages = rawPages
    .filter((p: any) => p.properties)
    .filter((p: any) => p.properties.Published?.checkbox === true) // only show published pages

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>

      {pages.map((page: any) => {
        
        const title =
          page.properties?.Title?.title?.[0]?.text?.content || "Untitled";
        const postDate = page.properties?.Date;
        const date = postDate?.date?.start
          ? new Date(postDate.date.start).toLocaleDateString()
          : "No date";

        return (
          <div key={page.id} className="mb-4 p-4 border rounded">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">
              {date}
            </p>
          </div>
        );
      })}
    </main>
  );
}
