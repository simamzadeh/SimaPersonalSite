import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Generic function to get database metadata by ID
export const getDatabase = async (databaseId: string) => {
  return await notion.databases.retrieve({ database_id: databaseId });
};


// Get pages from the database via the first data source
export const getDatabasePages = async (databaseId: string) => {
  const database = await getDatabase(databaseId);

  const dataSources = (database as any).data_sources;
  const dataSourceId = dataSources?.[0]?.id;

  if (!dataSourceId) return [];

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
  });

  return response.results;

};

// Get all content blocks for a page, handling pagination
export const getPageBlocks = async (pageId: string) => {
  const blocks: any[] = [];
  let cursor: string | undefined = undefined;

  while (true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 50,
    });

    blocks.push(...response.results);

    if (!response.has_more) break;
    cursor = response.next_cursor!;
  }

  return blocks;
};

export const getPhotosByCollection = async (collection: string) => {
  const photos = await getDatabasePages(process.env.NOTION_PHOTO_DB_ID!);
  return photos.filter(
    (p: any) => p.properties.Collection.select?.name === collection
  );
};