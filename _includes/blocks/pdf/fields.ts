import { theme } from "../cms.ts";

export default {
  type: "object",
  name: "pdf",
  fields: [
    "title: text",
    theme,
    "text: markdown",
    "src: file",
    "caption: markdown",
  ],
};
