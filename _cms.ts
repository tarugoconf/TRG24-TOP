import lumeCMS from "lume/cms/mod.ts";

import contactBlock from "./_includes/blocks/contact/fields.ts";
import faqBlock from "./_includes/blocks/faq/fields.ts";
import headerBlock from "./_includes/blocks/header/fields.ts";
import imageTextBlock from "./_includes/blocks/imagetext/fields.ts";
import locationBlock from "./_includes/blocks/location/fields.ts";
import pdfBlock from "./_includes/blocks/pdf/fields.ts";
import textBlock from "./_includes/blocks/text/fields.ts";
import videoBlock from "./_includes/blocks/video/fields.ts";

const blocks = {
  type: "choose-list",
  name: "blocks",
  fields: [
    contactBlock,
    faqBlock,
    headerBlock,
    imageTextBlock,
    locationBlock,
    pdfBlock,
    textBlock,
    videoBlock,
  ],
};

const cms = lumeCMS();

cms.document("Home", "src:index.yml", [
  "title: text",
  "extra_header: textarea",
  blocks,
]);

cms.upload("Uploads", "src:files");

export default cms;
