import Link from "next/link";
import { getDatabasePages } from "../../lib/notion";

interface Photo {
  id: string;
  properties: any;
}

export default async function PhotographyOverview() {
  // Fetch all photo pages
  const allResults = await getDatabasePages(process.env.NOTION_PHOTO_DB_ID!);

  // Filter only pages with properties
  const allPhotos: Photo[] = allResults.filter(
    (item: any) => "properties" in item
  ) as Photo[];

  // Extract unique collections dynamically
  const collections = Array.from(
    new Set(
      allPhotos
        .map((p) => p.properties.Collection?.select?.name)
        .filter(Boolean)
    )
  ) as string[];

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Photography Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((col) => (
          <Link
            key={col}
            href={`/photography/${encodeURIComponent(col)}`}
            className="p-6 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <h2 className="text-xl font-semibold">{col}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}