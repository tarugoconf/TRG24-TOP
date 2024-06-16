export default {
  type: "object",
  name: "video",
  fields: [
    "src: file",
    "caption: markdown",
    {
      type: "radio",
      name: "mode",
      options: ["background", "video"],
    },
  ],
};
