export default {
  type: "object",
  name: "video",
  fields: [
    "src: file",
    "id: text",
    "caption: markdown",
    {
      type: "radio",
      name: "mode",
      options: ["background", "video"],
    },
  ],
};
