import { frame, theme } from "../cms.ts";

export default {
  type: "object",
  name: "location",
  fields: [
    "title: text",
    theme,
    frame,
    "embed: textarea",
    "caption: markdown",
    {
      type: "object-list",
      name: "directions",
      fields: [
        "title: text",
        "description: markdown",
        "icon: text",
      ],
    },
  ],
};
