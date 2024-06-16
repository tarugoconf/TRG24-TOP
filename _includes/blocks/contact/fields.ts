export default {
  type: "object",
  name: "contact",
  fields: [
    "title: text",
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
