import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getPosts = async () => {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
  });

  return response.results;
};
