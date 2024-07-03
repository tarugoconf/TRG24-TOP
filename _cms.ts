import lumeCMS from "lume/cms/mod.ts";

import contactBlock from "./_includes/blocks/contact/fields.ts";
import faqBlock from "./_includes/blocks/faq/fields.ts";
import heroBlock from "./_includes/blocks/hero/fields.ts";
import imageTextBlock from "./_includes/blocks/imagetext/fields.ts";
import locationBlock from "./_includes/blocks/location/fields.ts";
import logosBlock from "./_includes/blocks/logos/fields.ts";
import pdfBlock from "./_includes/blocks/pdf/fields.ts";
import textBlock from "./_includes/blocks/text/fields.ts";
import videoBlock from "./_includes/blocks/video/fields.ts";
import separatorBlock from "./_includes/blocks/separator/fields.ts";
import calendarBlock from "./_includes/blocks/calendar/fields.ts";
import speakersBlock from "./_includes/blocks/speakers/fields.ts";
import ticketsBlock from "./_includes/blocks/tickets/fields.ts";

const blocks = {
  type: "choose-list",
  name: "blocks",
  fields: [
    contactBlock,
    calendarBlock,
    faqBlock,
    heroBlock,
    imageTextBlock,
    locationBlock,
    logosBlock,
    separatorBlock,
    speakersBlock,
    ticketsBlock,
    pdfBlock,
    textBlock,
    videoBlock,
  ],
};

const cms = lumeCMS();

cms.document("Home", "src:index.yml", [
  "title: text",
  {
    type: "object-list",
    name: "menu",
    fields: [
      "text: text",
      "url: text",
      "highlight: checkbox",
    ],
  },
  blocks,
]);

cms.collection("Pages", "src:block_pages/*.yml", [
  "title: text",
  {
    type: "object-list",
    name: "menu",
    fields: [
      "text: text",
      "url: text",
      "highlight: checkbox",
    ],
  },
  blocks,
]);

cms.collection("Legal pages", "src:pages/*.md", [
  "title: text",
  "subtitle: text",
  "content: markdown",
]);

cms.document({
  name: "Settings",
  description: "General settings",
  store: "src:_data.yml",
  fields: [
    {
      type: "object",
      name: "cta",
      description: "Call to action (visible on all pages)",
      fields: [
        "text: text",
        "url: text",
      ],
    },
    {
      type: "object",
      name: "footer",
      description: "Footer settings (copyright, menu)",
      fields: [
        "copyright: markdown",
        {
          type: "object-list",
          name: "menu",
          fields: [
            "text: text",
            "href: text",
          ],
        },
      ],
    },
  ],
});

cms.document("Humans.txt", "src:humans.vto", [
  "content: code",
]);

cms.upload("Uploads", "src:files");

export default cms;
