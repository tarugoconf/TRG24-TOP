import lume from "lume/mod.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import icons from "https://deno.land/x/lume_icon_plugins@v0.1.0/phosphor.ts";

const site = lume();

site.use(lightningcss());
site.use(icons({
  name: "icon",
  defaultType: "duotone",
}));

site.remoteFile(
  "_includes/styles/reset.css",
  "https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.css",
);

export default site;
