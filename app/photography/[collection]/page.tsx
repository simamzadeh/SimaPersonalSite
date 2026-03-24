import { getDatabasePages } from "../../../lib/notion";

interface Photo {
  id: string;
  properties: any;
}

interface Props {
  params: Promise<{ collection: string }>;
}

export default async function CollectionPage({ params }: Props) {
  // 1. Unwrap params
  const { collection } = await params;

  if (!collection) {
    return <p className="text-red-500">Error: missing collection name</p>;
  }

  // 2. Decode URL-encoded collection
  const decodedCollection = decodeURIComponent(collection);

  // 3. Fetch all photo pages
  const allResults = await getDatabasePages(process.env.NOTION_PHOTO_DB_ID!);
  console.log("All results from Notion:", allResults);

  // 4. Filter only items with properties
  const allPhotos: Photo[] = allResults.filter(
    (item: any) => "properties" in item
  ) as Photo[];

  console.log(
    "Collections found in Notion:",
    allPhotos.map((p) => p.properties.Collection?.select?.name)
  );

  // 5. Filter photos for this collection
  const photos = allPhotos.filter(
    (p) =>
      p.properties.Collection &&
      p.properties.Collection.select &&
      p.properties.Collection.select.name === decodedCollection
  );

  if (!photos.length) {
    return (
      <main className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{decodedCollection}</h1>
        <p className="text-gray-500">No photos found for this collection.</p>
        <p className="text-sm text-gray-400 mt-2">
          Check that the collection name in Notion matches exactly.
        </p>
      </main>
    );
  }

  // 6. Render photos
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold mb-8">{decodedCollection}</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
  {photos.map((photo) => {
    const url = photo.properties["Image URL"]?.url;
    const caption =
      photo.properties["Caption"]?.rich_text?.[0]?.plain_text || "";

    if (!url)
      return (
        <p key={photo.id} className="text-red-500 text-sm">
          Missing image URL for this photo
        </p>
      );

    return (
      <div
        key={photo.id}
        className="mb-6 break-inside-avoid"
      >
        <img
          src={url}
          alt={caption}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />

        {caption && (
          <p className="text-sm mt-2 text-gray-600">
            {caption}
          </p>
        )}
      </div>
    );
  })}
</div>
    </main>
  );
}