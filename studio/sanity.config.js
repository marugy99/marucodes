import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  title: "studio",
  projectId: "ewz4ezcb",
  dataset: "production",
  plugins: [
    deskTool(),
    codeInput(),
    visionTool(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "My Netlify deploys",
          sites: [
            {
              title: "MaruCodes",
              apiId: "7b72fc06-898a-4b98-bcd4-9852cceb36af",
              buildHookId: "641a1936391cd10fd5b35d1c",
              name: "marucodes-new",
            },
          ],
        }),
      ],
    }),
  ],
  schema: {
    types: schemas,
  },
});
