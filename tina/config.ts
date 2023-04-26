import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const BRANCH = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const CLIENT_ID = String(process.env.TINA_CLIENT_ID ?? '');
const TOKEN = String(process.env.TINA_TOKEN ?? '');

export default defineConfig({
  branch: BRANCH,
  clientId: CLIENT_ID, // Get this from tina.io
  token: TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
