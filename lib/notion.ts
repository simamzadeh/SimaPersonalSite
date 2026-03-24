import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Retrieve database metadata
export const getDatabase = async () => {
  return await notion.databases.retrieve({
    database_id: process.env.NOTION_BLOG_DB_ID!,
  });
};

// Get pages from the database via the first data source
export const getDatabasePages = async () => {
  const database = await getDatabase();

  const dataSources = (database as any).data_sources;
  const dataSourceId = dataSources?.[0]?.id;

  if (!dataSourceId) return [];

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
  });

  return response.results;

};

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

