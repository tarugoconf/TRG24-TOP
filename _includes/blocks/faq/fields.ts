import { frame, theme } from "../cms.ts";

export default {
  type: "object",
  name: "faq",
  fields: [
    "title: text",
    theme,
    frame,
    {
      type: "object-list",
      name: "questions",
      fields: [
        "question: text",
        "answer: markdown",
      ],
    },
  ],
};
