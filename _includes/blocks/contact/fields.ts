import { theme } from "../cms.ts";

export default {
  type: "object",
  name: "contact",
  fields: [
    "title: text",
    theme,
    {
      type: "object-list",
      name: "items",
      fields: [
        "title: text",
        "info: markdown",
        {
          type: "object-list",
          name: "links",
          fields: [
            "url: text",
            "icon: text",
            "text: text",
          ],
        },
      ],
    },
  ],
};
