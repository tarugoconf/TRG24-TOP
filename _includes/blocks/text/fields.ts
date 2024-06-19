import { theme } from "../cms.ts";

export default {
  type: "object",
  name: "text",
  fields: [
    "title: text",
    theme,
    "text: markdown",
  ],
};
