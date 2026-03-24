import { notion, getPageBlocks } from "../../../lib/notion";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
  // Unwrap params
  const { id } = await params;

  if (!id) return <p className="text-red-500">Error: missing page ID</p>;

  // Fetch page metadata
  const page = await notion.pages.retrieve({ page_id: id });

  let title = "Untitled";
  let date = "No date";

  if ("properties" in page) {
    const properties = (page as any).properties;

    title = properties.Title?.title?.[0]?.plain_text || "Untitled";
    date = properties.Date?.date?.start
      ? new Date(properties.Date.date.start).toLocaleDateString()
      : "No date";
  }

  // Fetch all content blocks
  let blocks: any[] = [];
  try {
    blocks = await getPageBlocks(id);
  } catch (err) {
    console.warn("Could not fetch blocks:", id, err);
  }

  console.log("Blocks fetched:", blocks);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">{date}</p>

      <div className="space-y-6">
        {blocks.map((block: any) => {
          switch (block.type) {
            case "paragraph": {
              const textArray = block.paragraph?.rich_text || [];
              if (!textArray.length) return null;
              return (
                <p key={block.id} className="text-base leading-relaxed">
                  {textArray.map((t: any) => t.plain_text).join("")}
                </p>
              );
            }

            case "heading_2": {
              const textArray = block.heading_2?.text || [];
              if (!textArray.length) return null;
              return (
                <h2 key={block.id} className="text-2xl font-semibold mt-6 mb-2">
                  {textArray.map((t: any) => t.plain_text).join("")}
                </h2>
              );
            }

            case "heading_3": {
              const textArray = block.heading_3?.text || [];
              if (!textArray.length) return null;
              return (
                <h3 key={block.id} className="text-xl font-semibold mt-4 mb-2">
                  {textArray.map((t: any) => t.plain_text).join("")}
                </h3>
              );
            }

            case "image": {
              const src = block.image?.file?.url || block.image?.external?.url;
              if (!src) return null;
              return (
                <img
                  key={block.id}
                  src={src}
                  alt=""
                  className="my-4 rounded-lg shadow"
                />
              );
            }

            default:
              return null; // ignore unsupported block types
          }
        })}
      </div>
    </main>
  );
}