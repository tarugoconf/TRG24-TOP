export default {
  type: "object",
  name: "faq",
  fields: [
    "title: text",
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
