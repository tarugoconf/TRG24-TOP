import { frame, theme } from "../cms.ts";

export default {
  type: "object",
  name: "pdf",
  fields: [
    "title: text",
    theme,
    frame,
    "text: markdown",
    "src: file",
    "caption: markdown",
  ],
};
